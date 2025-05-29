import {motion} from 'motion/react'
import ScrollingSkills from './ScrollingSkill';
import { FaGithub } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // New Twitter/X 
import { useEffect, useState } from 'react';
import Keyboard from './keyboard';


const BentoGrid = () => {
  const [time, setTime] = useState(new Date());
  
  useEffect(()=>{
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return ()=>clearInterval(interval);
  } , [])


   const minutes = time.getMinutes();
  const hours = time.getHours();


  return <div className="flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-5 w-full lg:h-[550px] mt-28">
    {/*Tech stacks */}
    <motion.div 
    initial = {{opacity : 0  , y : 30}}
    whileInView={{ opacity: 1  , y : 0}}
    transition={{duration : 0.3 , ease : 'easeIn'}}
     
    className="relative shadow-2xl border-[0.5px] border-neutral-700 w-full lg:col-span-2 rounded-lg">
      <div className='absolute top-3 left-4  rounded-full  text-neutral-300 px-7 py-1 bg-gradient-to-br from-neutral-700 to-neutral-800 border-[0.5px] border-neutral-700'>
        Tech Stack
      </div>

      <div className='ml-10 mr-10 '><ScrollingSkills/></div>
      <div className='text-lg font-semibold ml-4 '>Tech stack I mainly use</div>
      <div className='text-lg text-neutral-400  ml-4 mr-4'>Focused on React or Javascript ecosystem, recently have been using Next.js</div>
    </motion.div>



    <motion.div 
        initial = {{opacity : 0  , y : 30}}
    whileInView={{ opacity: 1  , y : 0}}
    transition={{duration : 0.3 , ease : 'easeIn'}}className=" hidden lg:block relative shadow-2xl border-[0.5px] border-neutral-700 rounded-lg w-full   lg:col-span-1 overflow-hidden ">
<iframe  src="https://open.spotify.com/embed/track/0bNkrxGqyFNYuXfj9HBV4r?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </motion.div>

    <motion.div 
        initial = {{opacity : 0  , y : 30}}
    whileInView={{ opacity: 1  , y : 0}}
    transition={{duration : 0.3 , ease : 'easeIn'}}className=" relative shadow-2xl border-[0.5px] border-neutral-700  rounded-lg w-full h-full lg:row-span-2 ">

        <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,_20px)] grid-rows-[repeat(auto-fill,_20px)] opacity-10 overflow-hidden ">
    {Array.from({ length: 500 }).map((_, i) => (
      <div key={i} className="border border-zinc-600 "></div>
    ))}
  </div>
      <div className='flex items-center justify-center'>

    <img src = '/Images/Profile.jpg ' className='w-32 h-32 mt-10 rounded-full'/>   
      </div>


    <div className='text-lg mt-6 bg-gradient-to-br from-neutral-400 to-neutral-600 bg-clip-text  text-center'>
      <span className='text-transparent font-semibold'> 
        Hello, I am Parth. <br/>I turn your ideas into seamless user experience
        </span></div> 
      <div className='flex justify-center items-center mt-5'>


         <a
    href="https://x.com/partharora9128"
    target="_blank"
    rel="noopener noreferrer"
    className="block z-20 rounded-full hover:opacity-60 cursor-pointer hover:bg-neutral-800 p-4 text-neutral-200 "
>
    <FaXTwitter size={32} className=""  />
    </a>

    <a href='https://github.com/Partharora383'
    target='_blank'
    rel = 'noopener noreferre'
    className='block z-20 rounded-full transition-colors hover:opacity-60 cursor-pointer hover:bg-neutral-800 p-4 text-neutral-200 '>

      <FaGithub size={32 }/>
    </a>
     <a
  href="https://wa.me/919991191025" // India country code (91) + your number
  target="_blank"
  rel="noopener noreferrer"
  className="block p-4 hover:bg-neutral-800 hover:opacity-60 cursor-pointer z-20 transition-colors rounded-lg text-neutral-200"
>
  <FaWhatsapp size={35} className="" />
</a>
     
      </div>

        <div className='z-20 absolute bottom-0 bg-neutral-800 hidden lg:h-[150px] w-full rounded-lg text-3xl lg:flex items-center justify-center flex-col font-semibold text -neutral-400' >
          

        Let's Work <p> 
          Together
          </p>
        </div>
    </motion.div>

    <motion.div 
          initial = {{opacity : 0  , y : 30}}
    whileInView={{ opacity: 1  , y : 0}}
    transition={{duration : 0.3 , ease : 'easeIn'}}
    className="shadow-2xl border-[0.5px] border-neutral-700 rounded-lg  col-span-1 overflow-hidden ">
    <iframe  className='' src="https://open.spotify.com/embed/track/5rLyYxZNzca00ENADO9m54?utm_source=generator" width="100%" height="352" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </motion.div>
    <motion.div
          initial = {{opacity : 0  , y : 30}}
    whileInView={{ opacity: 1  , y : 0}}
    transition={{duration : 0.3 , ease : 'easeIn'}}
    className=" hidden lg:block relative shadow-2xl border-[0.5px] border-neutral-700 rounded-lg  col-span-2 overflow-hidden bg-neutral-900">
        <div className='relative flex justify-between items-center mt-5'>

        <div className=' bg-neutral-800 h-[170px]  rounded-lg  ml-2 p-5'>
        <p className='text-2xl font-bold text-neutral-400'>You Think</p>
<span className='text-xl font-semibold text-neutral-400'>Let AI handle the<br />Keystrokes</span>

        </div>
      <div className='absolute right-0 overflow-hidden translate-x-1/6'>
    <Keyboard/>
      </div>
        </div>
    <div className='absolute bg-neutral-700 text-2xl p-3 w-full text- bottom-0 overflow-hidden flex justify-between font-semibold'>
   <div> 
    New Delhi
       </div>
    <div className=''>{hours}<span className='animate-pulse '> : </span>{minutes}</div>
    </div>

    </motion.div>





  </div>
}


export default BentoGrid;