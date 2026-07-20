"use client";

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTelegramPlane, FaHeart, FaStar, FaCodeBranch } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  const [year, setYear] = useState(2024);
  const [repoData, setRepoData] = useState({
    stars: 0,
    forks: 0,
    loading: true,
  });

  useEffect(() => {
    setYear(new Date().getFullYear());

    // Fetch GitHub repo stats
    const fetchRepoStats = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/HamiParsa/Profile-Bio"
        );
        if (response.ok) {
          const data = await response.json();
          setRepoData({
            stars: data.stargazers_count || 0,
            forks: data.forks_count || 0,
            loading: false,
          });
        } else {
          setRepoData((prev) => ({ ...prev, loading: false }));
        }
      } catch (error) {
        console.error("Failed to fetch repo stats:", error);
        setRepoData((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchRepoStats();
  }, []);

  const socialLinks = [
    { icon: <FaGithub size={22} />, link: "https://github.com/hamiparsa", label: "GitHub", color: "hover:text-white" },
    { icon: <FaLinkedin size={22} />, link: "https://www.linkedin.com/in/HamiParsa", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: <FaTelegramPlane size={22} />, link: "https://t.me/hamiparsa", label: "Telegram", color: "hover:text-blue-500" },
    { icon: <FaInstagram size={22} />, link: "https://www.instagram.com/hamii.parsa", label: "Instagram", color: "hover:text-pink-500" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-4 space-y-4"
          >
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Hami<span className="text-gray-500">.</span>Parsa
            </h2>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Full Stack Developer crafting modern web experiences with passion and precision.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-500 ${item.color} transition-all duration-300 border border-white/5 hover:border-white/10`}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* GitHub Repo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              GitHub Repo
            </h3>
            <a
              href="https://github.com/HamiParsa/Profile-Bio"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-xl transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-2">
                <FaGithub className="text-gray-400 group-hover:text-white transition-colors" size={16} />
                <span className="text-sm text-white/60 group-hover:text-white transition-colors">
                  Profile-Bio
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <FaStar size={12} className="text-yellow-500" />
                  {repoData.loading ? "..." : repoData.stars}
                </span>
                <span className="flex items-center gap-1">
                  <FaCodeBranch size={12} />
                  {repoData.loading ? "..." : repoData.forks}
                </span>
              </div>
            </a>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Lets Talk
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              hamiparsa@gmail.com
            </p>
            <p className="text-sm text-gray-500">
              Iran, Arak
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs text-gray-500">Available for work</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-gray-600">
            © {year} Hami Parsa. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <span>Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-red-400"
            >
              <FaHeart size={12} />
            </motion.span>
            <span>Hami Parsa</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}