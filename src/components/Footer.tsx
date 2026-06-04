"use client";

import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Footer() {
  const [particles, setParticles] = useState<{ top: number; left: number; xOffset: number; delay: number; color: string }[]>([]);

  useEffect(() => {
    const colors = ["#EC4899", "#8B5CF6", "#3B82F6", "#F59E0B", "#10B981"];
    setParticles(
      Array.from({ length: 40 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        xOffset: Math.random() * 300 - 150,
        delay: Math.random() * 10,
        color: colors[Math.floor(Math.random() * colors.length)],
      }))
    );
  }, []);

  const socialLinks = [
    { icon: <FaGithub size={32} />, link: "https://github.com/hamiparsa", color: "#EC4899" },
    { icon: <FaLinkedin size={32} />, link: "https://www.linkedin.com/in/HamiParsa", color: "#3B82F6" },
    { icon: <FaTelegramPlane size={32} />, link: "https://t.me/hamiparsa", color: "#1DA1F2" },
    { icon: <FaInstagram size={32} />, link: "https://www.instagram.com/hamii.parsa", color: "#1DA1F2" },
  ];

  return (
    <footer className="relative mt-[150px] text-white pt-20 pb-10 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 opacity-40 animate-gradientSlow blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-black/50 backdrop-blur-3xl border border-white/20 shadow-[0_0_30px_rgba(236,72,153,0.4)] p-10 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden"
        >
          {/* Neon Glow Backplate */}
          <div className="absolute inset-0 rounded-3xl  opacity-40 blur-xl -z-10 animate-pulseSlow"></div>

          <motion.h1 whileHover={{ scale: 1.05 }} className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide drop-shadow-[0_0_25px_rgba(236,72,153,0.7)]">
            Hami Parsa
          </motion.h1>

          <div className="flex gap-10">
            {socialLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.4, rotate: 10 }}
                className="text-gray-300 transition-all duration-300 transform hover:text-white hover:drop-shadow-[0_0_20px_rgb(236,72,153)]"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-gray-300 font-medium text-center md:text-right text-lg drop-shadow-md">
            © {new Date().getFullYear()} Hami Parsa. All Rights Reserved.
          </motion.p>
        </motion.div>
      </div>

      {/* Gradient line */}
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1.5, ease: "easeOut" }} viewport={{ once: true }} className="mt-14 h-1 w-2/3 mx-auto rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_25px_rgba(236,72,153,0.7)]"></motion.div>

      {/* Floating Neon Blobs */}
      <div className="absolute -top-16 left-10 w-40 h-40 bg-cyan-500/30 rounded-full blur-3xl animate-floatSlow"></div>
      <div className="absolute bottom-0 right-10 w-52 h-52 bg-purple-500/30 rounded-full blur-3xl animate-floatSlow delay-2000"></div>

      {/* Floating Neon Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute w-2 h-2 rounded-full"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: [-20, -100], x: p.xOffset }}
            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: p.delay }}
            style={{ top: `${p.top}%`, left: `${p.left}%`, backgroundColor: p.color, boxShadow: `0 0 10px ${p.color}, 0 0 20px ${p.color}` }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes gradientSlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(30px); }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.7; }
        }
        .animate-gradientSlow { background-size: 200% 200%; animation: gradientSlow 30s ease infinite; }
        .animate-floatSlow { animation: floatSlow 12s ease-in-out infinite; }
        .animate-pulseSlow { animation: pulseSlow 4s ease-in-out infinite; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
    </footer>
  );
}
