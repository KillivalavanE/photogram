import { useState } from "react";
import ProgressBar from "./ProgressBar";

const Upload = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const allowedTypes=['image/png','image/jpg','image/jpeg','image/svg']
    const handleChange =(e) =>{
        var selected = e.target.files[0];
        console.log(selected)
        if(selected && allowedTypes.includes(selected.type)){
            setFile(selected);
            setError('')
        }
        else{
            setFile(null);
            setError('Please upload an image file!!!')
        }
    }
  return (
    <>
        <form className="flex flex-col items-center justify-center mt-5">
            <label className="cursor-pointer" htmlFor="fileInput">Upload the image 📤</label>
            <input type="file" id="fileInput" className="mt-3 opacity-0" onChange={handleChange} />
            <div className="mt-5 text-red-800 font-semibold">
                {error && <div>{error}</div>}
            </div>
            {file && <ProgressBar file={file} setFile={setFile}/>}
        </form>
    </>
  )
}

export default Upload