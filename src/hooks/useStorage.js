import { useState, useEffect } from "react";
import { projectStorage, database } from "../../firebase/firebase.config";
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { push, ref, serverTimestamp, set } from "firebase/database";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false); 

  useEffect(() => {
    if (!file || isUploading) return;

    setIsUploading(true);
    const fileRef = storageRef(projectStorage, file.name);
    const uploadTask = uploadBytesResumable(fileRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
        setIsUploading(false);
      },
      async () => {
        try {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          
          const imageRef = ref(database, 'images');
          const newImageRef = push(imageRef);
          const data = {
            url,
            createdAt: serverTimestamp()
          };
          await set(newImageRef, data);
          setUrl(url);
        } catch (err) {
          setError(err);
        } finally {
          setIsUploading(false);
        }
      }
    );

    return () => {
      uploadTask.cancel();
      setIsUploading(false);
    };
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
