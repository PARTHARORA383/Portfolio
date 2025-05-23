import React from "react";

const RollingTextFullScreen = () => {
  return (
    <>
      <style>
        {`
          @keyframes roll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .rolling-wrapper {
            width: 100vw; /* full viewport width */
            
            white-space: nowrap;
            position: relative;
          }
          .rolling-inner {
            display: inline-flex;
            width: 200%; /* double width for 2 copies */
            animation: roll 15s linear infinite;
          }
          .rolling-text {
            flex-shrink: 0;
            padding-right: 4rem;
            font-size: 7.5rem; /* roughly text-7xl */
            font-weight: 700;  /* bold */
            user-select: none;
            white-space: nowrap;
          }
        `}
      </style>

      <div className="rolling-wrapper mt-30">
        <div className="rolling-inner">
          <div className="rolling-text">
            FROM THE CITY OF SMOKE
          </div>
          <div className="rolling-text">
           FROM THE CITY OF SMOKE
          </div>
    

         
        </div>
      </div>
    </>
  );
};

export default RollingTextFullScreen;
