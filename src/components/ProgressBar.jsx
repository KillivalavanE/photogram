import { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { url, progress, error } = useStorage(file);
  useEffect(()=>{
    if(url){
        setFile(null)
    }
  },[url,setFile])
  return (
    <div className="flex items-center gap-2">
      {file && <progress value={progress} max="100" className={`${progress==100 ? 'opacity-0' : 'opacity-100'}`}/>}
      <p>{progress!=100 && `${Math.trunc(progress)}%`}</p>
    </div>
  );
};

export default ProgressBar;
