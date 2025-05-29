import { motion } from "framer-motion";
import { Home, Folder, BookOpen, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { label: "Home", icon: Home, path: "/" },
  { label: "Projects", icon: Folder, path: "/Projects" },
  { label: "Blogs", icon: BookOpen, path: null },

  { label: "Contact", icon: Mail, path: '/Contactus' }

];

const Navbar = () => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="hidden lg:flex fixed top-1/3 left-6 w-[70px] bg-gradient-to-b from-neutral-700 to-neutral-800 shadow-xl flex-col items-center justify-center rounded-full py-6 z-50"
    >
      {navItems.map((item, idx) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={idx}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.1 }}
            onClick={() => item.path && navigate(item.path)}
            className="relative flex items-center justify-center w-full my-6 group cursor-pointer"
          >
            {/* Background glow on hover */}
            <motion.div
              initial={false}
              animate={{
                opacity: hovered === idx ? 0.3 : 0,
                scale: hovered === idx ? 1.2 : 0.8,
              }}
              transition={{ duration: 0.3 }}
              className="absolute w-16 h-16 rounded-full bg-neutral-100 blur-2xl"
            ></motion.div>

            {/* Icon */}
            <Icon size={23} className="text-white z-10" />

            {/* Text label on hover */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: hovered === idx ? 1 : 0,
                x: hovered === idx ? 10 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="absolute left-[70px] text-white bg-neutral-900 px-4  rounded-md text-lg whitespace-nowrap z-10"
            >
              {item.label}
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Navbar;
