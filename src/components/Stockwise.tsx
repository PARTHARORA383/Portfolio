import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";



const Stockwise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // once:true triggers only the first time
const navigate = useNavigate()
  return (
    <div>
      <div  
        className="rounded-2xl mt-10 flex flex-col items-start"
        ref={ref}
      >
        <div
          className="p-3 bg-neutral-700 hover:opacity-60 transition-transform duration-500 cursor-pointer"
          onClick={() => {
            navigate("/Project/StockWise");
          }}
        >
          <img src="Images/stockwise.png" className="rounded-lg" />
        </div>

        <motion.div
          className="mt-4 flex flex-col items-start justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p
            className="text-lg lg:text-2xl font-semibold"
          >
            Stockwise : Inventory Management application  
            <a
              href="https://stock-wise-chi.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl ml-5 font-bold text-pink-100 animate-pulse"
            >
              →
            </a>
          </motion.p>
          <p className="text-lg lg:text-xl text-start mt-1">
            A web platform for stock tracking, sales logging,
            and expense analysis to optimize <br />
            inventory operations.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Stockwise;
