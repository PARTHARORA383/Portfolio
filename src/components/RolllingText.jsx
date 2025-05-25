import React from "react";
import { motion } from "framer-motion";

const RollingTextFullScreen = () => {
  return (
    <>
      <style>
        {`
          .rolling-wrapper {
        
            width: 100vw;
            overflow: hidden;
            white-space: nowrap;
            margin-top: 4rem;
           /* optional: black background */
          }

          .rolling-text {
            flex-shrink: 0;
            padding-right: 4rem;
            font-size: 4rem;
            font-weight: 700;
            color: black;
            white-space: nowrap;
            user-select: none;
          }

          @media (max-width: 768px) {
            .rolling-text {
              font-size: 2rem;
              padding-right: 2rem;
            }
          }
        `}
      </style>

      <div className="rolling-wrapper">
        <motion.div
          className="flex bg-amber-50"
          style={{ width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            },
          }}
        >
          <div className="rolling-text ">FROM THE CITY OF SMOKE</div>
          <div className="rolling-text">FROM THE CITY OF SMOKE</div>
          <div className="rolling-text">FROM THE CITY OF SMOKE</div>
          <div className="rolling-text">FROM THE CITY OF SMOKE</div>
          <div className="rolling-text">FROM THE CITY OF SMOKE</div>
        </motion.div>
      </div>
    </>
  );
};

export default RollingTextFullScreen;
