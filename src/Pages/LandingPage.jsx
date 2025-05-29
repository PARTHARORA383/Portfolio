
import { useNavigate, useSearchParams } from "react-router-dom";
import Stockwise from "../components/Stockwise";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react"
import BentoGrid from "../components/Bentogrid";
import Slay from "../components/Slay";

const LandingPage = () => {
const navigate = useNavigate()
const [showloader , setShowloader] = useState(true);
const [show , setShow] = useState(true);

const playClickSound = () => {
  const clickAudio = new Audio('/sounds/camera-shutter.mp3');
  clickAudio.volume = 0.5; // optional: lower volume
  console.log('helllo bitch')
  clickAudio.play().catch((err) => {
    console.warn("Audio play failed:", err);
  });
};


useEffect(() => {
  const timeout = setTimeout(() => {
    setShowloader(false);
  }, 800);

  return () => clearTimeout(timeout);
}, []);


  return <div>
<AnimatePresence>
  {showloader && (
<motion.div
  key="loader"
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-100%" }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
  onAnimationStart={() => playClickSound()}
  className="z-50 fixed inset-0 bg-amber-50 h-screen w-screen"
/>

  )}
</AnimatePresence>
    <div className="flex flex-col items-start">



     
      <div className="text-md lg:text-lg text-neutral-200 mt-12 ml-2">
        Hey there , I am
      </div>
      <div className=" text-4xl lg:text-5xl font-semibold mt-1">
        Parth Arora
      </div>



   

      <div className=" text-lg lg:text-xl text-start text-neutral-300 leading-normal mt-5">
        Frontend-focused developer with a passion
        for backend  <br />architecture and product experience
      </div>
    {
      //Add an onclick to email here 
    }
      <div className=" rounded-md  py-1.5  px-16 lg:px-20 hover:bg-gradient-to-tl bg-gradient-to-br text-sm lg:text-md font-medium from-neutral-700 to-neutral-900 transition-transform duration-500 ease-in cursor-pointer mt-8" onClick={()=>{
        navigate('/Contactus')
      }}>
        Hire Me
      </div>


    </div>

      <div className="text-start">

        <div className=" text-lg lg:text-xl text-neutral-300 mt-16">Explore Projects</div>
        <Slay/>
        <Stockwise/>
      </div>


      <BentoGrid/>

  </div>
}

export default LandingPage