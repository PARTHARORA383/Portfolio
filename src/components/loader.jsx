import {motion } from 'motion/react'

const Loader = ()=>{


  const playClickSound = () => {
  const clickAudio = new Audio('/sounds/camera-shutter.mp3');
  clickAudio.volume = 0.5; // optional: lower volume
  console.log('helllo bitch')
  clickAudio.play().catch((err) => {
    console.warn("Audio play failed:", err);
  });
};

return (

  <motion.div
  key="loader"
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-100%" }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
  onAnimationStart={() => playClickSound()}
  className="z-50 fixed inset-0 bg-amber-50 h-screen w-screen"
/>


)  


}


export default Loader