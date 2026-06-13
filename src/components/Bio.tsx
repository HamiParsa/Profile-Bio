"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaLaptopCode } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { GiChessKing } from "react-icons/gi";
import { TbBrandRedux } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { MdOutlineWeb } from "react-icons/md";

import GalaxyBackground from "./GalaxyBackgroundParallax"; // <- our new galaxy background

// ===============================
// Bio Component
// ===============================
export default function Bio() {
  // ===== Skills Array =====
  // Each skill has a name and an icon component with optional color
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript className="text-amber-300" />,
    },
    { name: "React", icon: <FaReact className="text-blue-900" /> },
    { name: "Next.js", icon: <RiNextjsFill /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Zustand", icon: <TbBrandRedux className="text-purple-600" /> },
    { name: "Tailwind", icon: <RiTailwindCssFill className="text-blue-500" /> },
    { name: "Supabase", icon: <RiSupabaseFill className="text-green-500" /> },
  ];

  // ===== Mounted State =====
  // Used to ensure animations and motion values only run on the client
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // ===== Mouse Tilt Animation =====
  // motionX & motionY track mouse movement
  const motionX = useMotionValue(0);
  const motionY = useMotionValue(0);
  // rotateY & rotateX transform motion values into rotation degrees
  const rotateY = useTransform(motionX, (val) => val);
  const rotateX = useTransform(motionY, (val) => -val);

  // ===== Mouse Move Effect =====
  // Moves the profile image slightly based on mouse position
  useEffect(() => {
    if (!mounted) return;
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30; // Rotate up to 15 degrees
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      motionX.set(x);
      motionY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mounted, motionX, motionY]);

  return (
    <div
      id="about"
      className="relative mt-20 min-h-screen font-bricolage overflow-hidden"
    >
      {/* ===== Galaxy Background Component ===== */}
      <GalaxyBackground />

      {/* ===============================
          Main Content
          =============================== */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-center mt-36 px-6 lg:px-0 gap-16">
        {/* ===== Profile Image with Glow & Tilt ===== */}
        <motion.div
          className="relative w-80 h-80 lg:w-96 lg:h-96 perspective z-10"
          style={{ rotateX, rotateY }}
          animate={{ y: ["0%", "-3%", "0%"] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          {/* Layered Gradient Glows */}
          <div className="absolute inset-0 rounded-2xl blur-3xl opacity-60"></div>
          <div className="absolute inset-0 rounded-2xl blur-2xl opacity-40 "></div>
          <div className="absolute inset-0 rounded-2xl blur-xl opacity-30 "></div>

          <Image
            src="https://yourimageshare.com/ib/Sw14Iz6zvv.png"
            width={400}
            height={400}
            alt="Hami Parsa"
            className="relative mt-5 rounded-2xl shadow-2xl border border-gray-800"
          />
        </motion.div>

        {/* ===== Text Section ===== */}
        <div className="text-gray-100 max-w-lg flex flex-col gap-6 z-10 relative">
          {/* Name with Gradient & Icon */}
          <h1 className="flex items-center gap-2 text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-textGradient">
            Im Hami Parsa
            <GiChessKing className="text-yellow-400 text-4xl animate-bounce" />
          </h1>

          {/* Role */}
          <h2 className="text-2xl flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300">
            Full Stack Developer{" "}
            <FaLaptopCode className="text-indigo-400 text-2xl" />
          </h2>
          <hr className="border-gray-800" />

          {/* ===== Skills Grid ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 bg-gray-800/40 hover:bg-gray-700/60 px-4 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-110 hover:rotate-3 hover:shadow-purple-500/70"
              >
                {skill.icon}
                <span className="text-lg font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Bio Paragraph ===== */}
      <p className="text-white text-center mt-20 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
        Hi, Im <span className="font-bold text-pink-500">Hami Parsa</span> — a{" "}
        <span className="text-indigo-400 font-semibold">
          passionate Full Stack Developer
        </span>{" "}
        crafting{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-bold">
          modern, interactive, and visually stunning
        </span>{" "}
        web experiences.
      </p>

      {/* Awesome Website Button */}
      <div className="flex justify-center mt-10 z-10 relative">
        <a
          href="https://hamiparsa.github.io/About-Me/" 
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-lg text-white transition-all duration-300 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 active:scale-95 overflow-hidden cursor-pointer"
        >
          {/* Ripple effect on click */}
          <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-active:opacity-30 transition-opacity duration-300 rounded-2xl"></span>

          {/* Animated background on hover */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></span>

          {/* Website Icon */}
          <MdOutlineWeb className="text-2xl group-hover:rotate-12 transition-transform duration-300" />

          {/* Button Text */}
          <span>Visit About Me Website</span>

          {/* Animated underline */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500 ease-out"></span>
        </a>
      </div>

      {/* ===== Custom Animations ===== */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }

        /* Glow Animations for Profile Image */
        @keyframes glow1 {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes glow2 {
          0% {
            background-position: 100% 0%;
          }
          50% {
            background-position: 0% 100%;
          }
          100% {
            background-position: 100% 0%;
          }
        }
        @keyframes glow3 {
          0% {
            background-position: 50% 0%;
          }
          50% {
            background-position: 50% 100%;
          }
          100% {
            background-position: 50% 0%;
          }
        }
        .animate-glow1 {
          background-size: 200% 200%;
          animation: glow1 6s ease-in-out infinite;
        }
        .animate-glow2 {
          background-size: 200% 200%;
          animation: glow2 8s ease-in-out infinite;
        }
        .animate-glow3 {
          background-size: 200% 200%;
          animation: glow3 10s ease-in-out infinite;
        }

        /* Gradient Text Animation */
        @keyframes textGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-textGradient {
          background-size: 200% 200%;
          animation: textGradient 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
