import { useState, useEffect } from "react";
import { database } from "../firebase/firebase.config";
import { ref, onValue, query, orderByChild } from "firebase/database";

const getImages = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const collectionRef = ref(database, collection);
    const collectionQuery = query(collectionRef, orderByChild('createdAt'));

    const unsubscribe = onValue(collectionQuery, (snapshot) => {
      const documents = [];
      snapshot.forEach((childSnapshot) => {
        documents.push({ ...childSnapshot.val(), id: childSnapshot.key });
      });
      setDocs(documents.reverse());
    });

    return () => unsubscribe();
  }, [collection]);

  return { docs };
};

export default getImages;
