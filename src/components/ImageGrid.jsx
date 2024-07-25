import getImages from "../hooks/getImages";
import { motion } from "framer-motion";
const ImageGrid = ({ setImg }) => {
  const { docs } = getImages("images");
  console.log(docs);
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-20 mt-10 mx-10">
        {docs.map((doc, index) => (
          <motion.div key={index} className="flex justify-center items-center opacity-95"
           onClick={()=>setImg(doc.url)}
           layout
           whileHover={{opacity:1}} 
          >
              <motion.img
                className="h-[50vh] w-full object-cover rounded-lg"
                src={doc.url}
                alt={`Image ${index + 1}`}
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:1}}
              />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ImageGrid;
