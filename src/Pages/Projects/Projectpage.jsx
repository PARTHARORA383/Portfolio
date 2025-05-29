import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react"

import Loader from "../../components/loader";
import Slay from "../../components/Slay";
import Stockwise from "../../components/Stockwise";


 const ProjectPage = ()=>{
    const [showloader , setShowloader] = useState(true);
    
    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowloader(false);
      }
      , 800);
    
      return () => clearTimeout(timeout);
    }, []);


  return<>
  
  <div className="">
     <AnimatePresence>
      {showloader && (
    <Loader/>
  )}
  </AnimatePresence>

    <motion.div className="text-3xl lg:text-4xl mt-16">OUR PROJECTS</motion.div>



    {/*Slay card */}

    <motion.div className=" rounded-lg">
      <Slay/>
   </motion.div>
    <motion.div className=" rounded-lg mt-12 lg:mt-20">
      <Stockwise/>
   </motion.div>
    </div>
  </>
}


export default  ProjectPage