import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaJs, FaCuttlefish } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiPostgresql, SiTypescript, SiPrisma, SiFirebase, SiExpress, SiVercel } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact className="text-sky-500" /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
  { name: 'Prisma', icon: <SiPrisma /> },
  { name: 'RESTful APIs', icon: <SiVercel /> },
  { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'C++', icon: <FaCuttlefish className="text-gray-700" /> },
  { name: 'TurboRepo', icon: <SiVercel /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
];

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-center border-b border-black">
      <h2 className="text-3xl font-bold mb-8 uppercase tracking-wide">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-4 border border-gray-300 rounded-md hover:shadow-md"
          >
            <div className="text-3xl mb-2">{skill.icon}</div>
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
