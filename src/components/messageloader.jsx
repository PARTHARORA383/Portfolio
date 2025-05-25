import React from 'react';

const BounceLoader = () => {
  return (
    <>
      <div className="loader">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="circle"
            style={{ animationDelay: `-${index * 0.1}s` }}
          ></div>
        ))}
      </div>

      <style>{`
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
            opacity: 0;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .loader {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          width: 100px;
          height: 100px;
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .circle {
          width: 20px;
          height: 20px;
          background-color: #fcf3cf;
          border-radius: 50%;
          margin: 2px;
          animation: bounce 1.2s infinite ease-in-out;
        }
      `}</style>
    </>
  );
};

export default BounceLoader;
