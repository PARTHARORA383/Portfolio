// import React, { useEffect, useState } from 'react';

// export default function AnalogClock() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => setTime(new Date()), 1000);
//     return () => clearInterval(interval);
//   }, []);

//   const seconds = time.getSeconds();
//   const minutes = time.getMinutes();
//   const hours = time.getHours();

//   const secondDeg = seconds * 6;
//   const minuteDeg = minutes * 6;
//   const hourDeg = (hours % 12) * 30 + minutes * 0.5;

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
//       <div className="relative w-64 h-64 rounded-full border-4 border-white bg-gray-800 shadow-inner">
//         {/* Tick Marks */}
//         {[...Array(12)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-full bg-white origin-bottom left-1/2 top-0 opacity-30"
//             style={{ transform: `rotate(${i * 30}deg) translateX(-50%)` }}
//           />
//         ))}

//         {/* Hour Hand */}
//         <div
//           className="absolute w-1 h-16 bg-white rounded origin-bottom left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-full shadow-md z-10"
//           style={{ transform: `rotate(${hourDeg}deg) translate(-50%, -100%)` }}
//         />

//         {/* Minute Hand */}
//         <div
//           className="absolute w-0.5 h-24 bg-blue-400 rounded origin-bottom left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-full shadow-md z-10"
//           style={{ transform: `rotate(${minuteDeg}deg) translate(-50%, -100%)` }}
//         />

//         {/* Second Hand */}
//         <div
//           className="absolute w-0.5 h-28 bg-red-500 rounded origin-bottom left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-full shadow-md z-10"
//           style={{ transform: `rotate(${secondDeg}deg) translate(-50%, -100%)` }}
//         />

//         {/* Center Dot */}
//         <div className="absolute w-4 h-4 bg-white rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 shadow" />
//       </div>

//       {/* Optional: Digital time display */}
//       <p className="text-white mt-4 text-xl font-mono">
//         {time.toLocaleTimeString()}
//       </p>
//     </div>
//   );
// } 
