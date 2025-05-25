import { AnimatePresence  , motion} from "motion/react";
import { useEffect, useState } from "react";
import Loader from "../components/loader";
import axios  from "axios";
import { FaGithub } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // New Twitter/X icon
import BounceLoader from "../components/messageloader";

// WhatsApp icon is not native




const Contact = ()=>{
  const [showloader , setShowloader] = useState(true);
  const [name , setName] = useState('');
  const [Email , setEmail] = useState("");
  const [text , setText] = useState("");
  const[isloading , setIsloading] = useState(false)
  const [renderThanks , setRenderThanks] = useState(false);
  const [alertbox , setAlertbox] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowloader(false);
    }, 800);
  
    return () => clearTimeout(timeout);
  }, []);
 


// In your submit function:
const handleSubmit = async (e) => {
  setIsloading(true)
  e.preventDefault();
  const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in|hotmail\.com)$/i;

  if (!emailRegex.test(Email)) {
    alert('Please enter a valid email ending with .com, .in, or .hotmail.com');
    return;
  } 
  try{


    const requestbody = {
      name : name,
      email : Email,
      message : text
    }
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/send-email` , requestbody)
    
    if(response.status == 200){
      setRenderThanks(true)

    }
  }catch(e){
     console.error("Error sending email", e);
    setAlertbox(true);
  }
  finally{
    setIsloading(false);
  }
};



  return <>
  <AnimatePresence>
  {showloader && (
    <Loader/>
  )}
  </AnimatePresence>
    <AnimatePresence>

    {alertbox && (<motion.div 
    initial = {{y: "-100%" , x:"100%"}}
    animate = {{y : 0 , x:0}}
    exit={{y : "-100%" , x:"100%"}}
    transition={{duration : 0.3 , ease : 'easeInOut'}}
    className=" bottom-6 right-0 fixed z-50 text-red-500 bg-neutral-700 p-3 rounded-md max-w-lg">
    
      Backend Down, Sorry for inconvenience<br/> You can reach us on the social media handles given below 

    </motion.div>)}
  </AnimatePresence>


  <div className=" relative bg-gradient-to-bl from-neutral-700 to-neutral-800  mt-20 rounded-lg lg:w-full shadow-lg">

    {isloading && (
      <div className="absolute bg-black opacity-70 inset-0 rounded-lg flex items-start">
      <BounceLoader/>
      </div>
    )}  




  {renderThanks ? (
  <div className=" text-lg text-neutral-200 font-normal mt-10 ml-5 ">
    <p className="text-xl font-semibold mb-3">Thank you!
      </p> For reaching out to us, We will reach back to you very soon.
  </div>
) : (
  <>
    <div className="text-neutral-400 pl-1 pr-1 text-lg md:text-xl text-center mt-10 font-semibold border-b-2 border-neutral-600 h-[80px]" >
  <span className="font-semibold text-neutral-100 text-lg lg:text-xl">Talk to me.
    </span> Whether you want to say hi or collab on your next big idea.
  </div>
    <div className="flex flex-col md:flex-row gap-4">
      {/* Name Input */}
      <div className="flex flex-col mt-5 md:w-full lg:ml-5 ml-4 mr-4">
        <label className="font-semibold lg:text-lg text-neutral-300">Name</label>
        <input
          placeholder="Name"
          className="py-1.5 px-1.5 mt-2 rounded-md border-[0.5px] border-neutral-400"
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Email Input */}
      <div className="flex flex-col mt-5 md:w-full lg:mr-5 ml-4 mr-4">
        <label className="font-semibold lg:text-lg text-neutral-300">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="py-1.5 px-1.5 mt-2 rounded-md border-[0.5px] border-neutral-400"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </div>

    {/* Message Input */}
    <div className="flex flex-col mt-5 md:mr-5 ml-4 mr-4">
      <label className="font-semibold lg:text-lg text-neutral-300">How can I help?</label>
      <textarea
        placeholder="Type your message here..."
        className="h-24 px-1.5 mt-2 rounded-md border-[0.5px] border-neutral-400 py-1"
        onChange={(e) => setText(e.target.value)}
      />
    </div>

    {/* Submit Button */}
    <div className="flex justify-center items-center h-10 bg-neutral-800 rounded-md lg:mx-5 mt-10 ml-4 mr-4 cursor-pointer hover:opacity-60 transition-transform duration-500">
      <button
        type="button"
        className="w-full h-full text-neutral-100 font-semibold"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  </>
)}

 
<div className="bg-neutral-600 w-full h-[0.5px] mt-15"></div> 


<div className="grid grid-cols-3 p-4 ">

  <div className="col-span-1 hover:bg-neutral-700 rounded-md transition-colors duration-300 h-full cursor-pointer">
<a
  href="https://x.com/partharora9128"
  target="_blank"
  rel="noopener noreferrer"
  className="block p-4 hover:bg-neutral-800 transition-colors rounded-lg text-neutral-200"
>
  <FaXTwitter size={35} className="text-white" />

  <div className="lg:text-lg mt-4 font-medium">
    Follow me on X
  </div>

  <div className=" text-sm lg:text-md mt-2 text-neutral-400">
    Personal Updates and a <br />lot of Tech talks
  </div>
</a>


  </div>
  <div className="col-span-1 hover:bg-neutral-700 rounded-md transition-colors duration-300 h-full cursor-pointer">   
   <a
  href="https://github.com/Partharora383"
  target="_blank"
  rel="noopener noreferrer"
  className="block p-4 hover:bg-neutral-800 transition-colors rounded-lg text-neutral-200"
>
  <FaGithub size={35} className="text-white" />

  <div className="lg:text-lg mt-4 font-medium text-neutral-200">
    Follow me on GitHub
  </div>

  <div className=" text-sm lg:text-md mt-2 text-neutral-400">
    Code projects and open source contributions
  </div>
</a>

        
        
        </div>
  <div className="col-span-1 hover:bg-neutral-700 rounded-md transition-colors duration-300 h-full cursor-pointer">    
 <a
  href="https://wa.me/919991191025" // India country code (91) + your number
  target="_blank"
  rel="noopener noreferrer"
  className="block p-4 hover:bg-neutral-800 transition-colors rounded-lg text-neutral-200"
>
  <FaWhatsapp size={35} className="" />

  <div className="lg:text-lg mt-4 font-medium text-neutral-200">
    Contact me on WhatsApp
  </div>

  <div className="text-sm lg:text-md mt-2 text-neutral-400">
    For work-related information and any queries
  </div>
</a>

        
        </div>
</div>
  </div>


  </>

}


export default Contact;