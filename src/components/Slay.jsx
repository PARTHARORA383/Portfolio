
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";



const Slay = () => {
const navigate = useNavigate()
  return (
    <div>
      <div  
        className="rounded-2xl mt-10 flex flex-col items-start"
      >
        <motion.div
           initial={{ opacity: 0, y: 30 }}
          whileInView = {{opacity : 1 , y : 0}}
          transition={{ duration: 0.6, ease: "easeIn" }}
          className=" hover:opacity-60 transition-transform duration-500 cursor-pointer"
          onClick={() => {
            window.location.href = "https://slay-web-mu.vercel.app"
          }}
        >
          <img src="Images/slay.png" className="rounded-lg" />
        </motion.div>

        <motion.div
          className="mt-4 flex flex-col items-start justify-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView = {{opacity : 1 , y : 0}}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          <motion.p
            className="text-lg lg:text-2xl font-semibold"
          >
            Slay: Secure & Smart Payment Platform 
            <a
              href="https://slay-web-mu.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl ml-5 font-bold animate-pulse"
            >
              →
            </a>
          </motion.p>
          <motion.span className="text-lg lg:text-xl text-neutral-400  lg:mt-1 ">
            A modern payment website offering peer-to-peer (P2P) transfers, net banking <br/> via DummyBank APIs, and robust security measures. 
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};

export default Slay;
