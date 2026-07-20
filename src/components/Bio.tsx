"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaLaptopCode,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { 
  RiNextjsFill, 
  RiSupabaseFill,
  RiTailwindCssFill
} from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";
import { 
  SiTypescript, 
  SiMongodb, 
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiSqlite
} from "react-icons/si";
import { MdEmail, MdLocationOn } from "react-icons/md";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-gray-400" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-gray-400" /> },
  { name: "JavaScript", icon: <IoLogoJavascript className="text-gray-400" /> },
  { name: "React", icon: <FaReact className="text-gray-400" /> },
  { name: "Next.js", icon: <RiNextjsFill className="text-gray-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-gray-400" /> },
  { name: "Zustand", icon: <TbBrandRedux className="text-gray-400" /> },
  { name: "Tailwind", icon: <RiTailwindCssFill className="text-gray-400" /> },
  { name: "Supabase", icon: <RiSupabaseFill className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-gray-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-gray-400" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
  { name: "Python", icon: <SiPython className="text-gray-400" /> },
  { name: "SQLite", icon: <SiSqlite className="text-gray-400" /> },
];

export default function Bio() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-100, 100], [6, -6]);
  const rotateY = useTransform(mouseX, [-100, 100], [-6, 6]);
  const springRotateX = useSpring(rotateX, { damping: 20, stiffness: 300 });
  const springRotateY = useSpring(rotateY, { damping: 20, stiffness: 300 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  if (!mounted) return null;

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-black flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Minimal Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
      
      {/* Single Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Profile Image */}
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex-shrink-0"
            style={{
              rotateX: isHovered ? springRotateX : 0,
              rotateY: isHovered ? springRotateY : 0,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="https://avatars.githubusercontent.com/u/227557537?v=4"
                  alt="Hami Parsa"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Status */}
              <div className="absolute -bottom-2 -right-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full text-xs font-medium text-white/60">
                Available
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full mb-4 lg:mb-3">
                <span className="w-1 h-1 bg-white/40 rounded-full" />
                <span className="text-[10px] font-medium text-white/40 tracking-wider">OPEN TO WORK</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-2 leading-tight">
                Hami Parsa
                <span className="inline-block ml-2 text-white/20">.</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/40 mb-4 flex items-center justify-center lg:justify-start gap-2">
                Full Stack Developer
                <FaLaptopCode className="text-white/20" size={20} />
              </p>

              <p className="text-white/30 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Crafting modern web applications with clean code and thoughtful design.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-sm text-white/20">
                  <MdEmail size={16} />
                  parsa.developer001@gmail.com
                </div>
                <span className="w-px h-3 bg-white/5 hidden sm:block" />
                <div className="flex items-center gap-2 text-sm text-white/20">
                  <MdLocationOn size={16} />
                  Iran, Arak
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + index * 0.015 }}
                    className="flex items-center gap-1.5 px-3 py-1 text-[11px] text-white/30 border border-white/5 rounded-full"
                  >
                    <span className="text-sm">{skill.icon}</span>
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-3 justify-center lg:justify-start"
            >
              <a
                href="https://hamiparsa.github.io/About-Me/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 text-sm font-medium rounded-xl transition-all duration-300"
              >
                About
              </a>
              
              <a
                href="https://github.com/hamiparsa"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 text-sm font-medium rounded-xl transition-all duration-300"
              >
                GitHub
              </a>

              <a
                href="#contact"
                className="px-6 py-2.5 bg-white text-black text-sm font-medium rounded-xl transition-all duration-300 hover:bg-white/90"
              >
                Contact
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}