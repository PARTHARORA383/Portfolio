'use client';

import { animate, motion, useMotionValue } from 'framer-motion';
import { ReactNode, useEffect } from 'react';
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiGithub,
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiMongodb,
  SiExpress,
} from 'react-icons/si';


import useMeasure from 'react-use-measure'

const skills = [
  { icon: <SiReact />, name: 'React' },
  { icon: <SiNextdotjs />, name: 'Next.js' },
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <SiTailwindcss />, name: 'Tailwind' },
  { icon: <SiNodedotjs />, name: 'Node.js' },
  { icon: <SiExpress />, name: 'Express' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
  { icon: <SiPrisma />, name: 'Prisma' },
  { icon: <SiGithub />, name: 'GitHub' },
];

const ScrollingSkills = () => {
  const duplicatedSkills = [...skills, ...skills]; // duplicate to make it loop cleanly

let [ref , {width}] = useMeasure()

const xTranslation = useMotionValue()

useEffect(()=>{
let controls;
let finalPosition = -width/2;

controls = animate(xTranslation,  [0 , finalPosition], {
  ease : 'linear',
  duration :45,
  repeat : Infinity,
  repeatType : "loop",
  repeatDelay : 0


} )
return controls.stop
}, [xTranslation , width])

  return (
    <div className=" relative overflow-hidden whitespace-nowrap w-full py-20 ">
      <motion.div 
      ref={ref}
      style={{x:xTranslation}}
        className=" absolute flex gap-10 "
    
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={index}
            className="flex gap-2 items-center min-w-[120px]   transition-colors"
          >
            <div className="text-4xl text-neutral-400">{skill.icon}</div>
            <span className="text-neutral-400 mt-1 text-lg font-semibold ">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingSkills;
