import { motion } from "framer-motion"
const Model = ({img,setImg}) => {
    const handleClick = (e)=>{
        if(e.target.classList.contains('fixed')){
            setImg(null)
        }
    }
  return (
    <motion.div className="fixed top-0 left-0 w-full h-full bg-[#00000080]"
     onClick={handleClick}
     initial={{opacity:0}}
     animate={{opacity:1}}
    >
        <motion.img src={img} alt="pic" 
         className="block max-w-[60%] max-h-[80%] m-16 mx-auto shadow-lg border-3 border-white"
         initial={{y:"-100vh"}}
         animate={{y:"0vh"}}
        />
    </motion.div>
  )
}

export default Model