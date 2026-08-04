"use client";

// ============================================================
// IMPORTS
// ============================================================

import { useState, useEffect, ReactNode } from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTelegramPlane, 
  FaHeart, 
  FaStar, 
  FaCodeBranch 
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Github, Linkedin, Send, Mail } from "lucide-react";

// ============================================================
// TYPES
// ============================================================

interface SocialLink {
  icon: ReactNode;
  link: string;
  label: string;
  color: string;
}

interface QuickLink {
  name: string;
  href: string;
}

interface RepoData {
  stars: number;
  forks: number;
  loading: boolean;
}

// ============================================================
// CONFIGURATION
// ============================================================

const CONFIG = {
  colors: {
    bg: "#0A0A0A",
    bgSecondary: "#121212",
    bgCard: "rgba(255,255,255,0.04)",
    bgCardHover: "rgba(255,255,255,0.08)",
    text: "#FFFFFF",
    textPrimary: "#F5F5F5",
    textSecondary: "#D4D4D4",
    textMuted: "#A3A3A3",
    textDim: "#737373",
    primary: "#DC2626",
    primaryDark: "#991B1B",
    primaryLight: "#EF4444",
    secondary: "#F59E0B",
    secondaryLight: "#FBBF24",
    accent: "#FCD34D",
    border: "rgba(255,255,255,0.06)",
    borderLight: "rgba(255,255,255,0.1)",
    glow: "rgba(220, 38, 38, 0.2)",
    glowGold: "rgba(245, 158, 11, 0.2)",
  },
};

// ============================================================
// SOCIAL LINKS DATA
// ============================================================

const socialLinks: SocialLink[] = [
  { 
    icon: <FaGithub size={20} />, 
    link: "https://github.com/hamiparsa", 
    label: "GitHub", 
    color: "hover:text-white" 
  },
  { 
    icon: <FaLinkedin size={20} />, 
    link: "https://www.linkedin.com/in/HamiParsa", 
    label: "LinkedIn", 
    color: "hover:text-blue-400" 
  },
  { 
    icon: <FaTelegramPlane size={20} />, 
    link: "https://t.me/hamiparsa", 
    label: "Telegram", 
    color: "hover:text-blue-500" 
  },
  { 
    icon: <FaInstagram size={20} />, 
    link: "https://www.instagram.com/hamii.parsa", 
    label: "Instagram", 
    color: "hover:text-pink-500" 
  },
];

const quickLinks: QuickLink[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// ============================================================
// FOOTER COMPONENT
// ============================================================

export default function Footer(): ReactNode {
  const [year, setYear] = useState<number>(2024);
  const [repoData, setRepoData] = useState<RepoData>({
    stars: 0,
    forks: 0,
    loading: true,
  });

  const c = CONFIG.colors;

  // ============================================================
  // EFFECTS
  // ============================================================

  useEffect(() => {
    setYear(new Date().getFullYear());

    const fetchRepoStats = async (): Promise<void> => {
      try {
        const response: Response = await fetch(
          "https://api.github.com/repos/HamiParsa/Profile-Bio"
        );
        if (response.ok) {
          const data: { stargazers_count?: number; forks_count?: number } = await response.json();
          setRepoData({
            stars: data.stargazers_count || 0,
            forks: data.forks_count || 0,
            loading: false,
          });
        } else {
          setRepoData((prev: RepoData) => ({ ...prev, loading: false }));
        }
      } catch (error: unknown) {
        console.error("Failed to fetch repo stats:", error);
        setRepoData((prev: RepoData) => ({ ...prev, loading: false }));
      }
    };

    fetchRepoStats();
  }, []);

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <footer 
      className="relative border-t overflow-hidden"
      style={{
        background: c.bg,
        borderColor: c.border,
      }}
    >
      {/* ==========================================================
          BACKGROUND GLOW
          ========================================================== */}

      <div className="absolute inset-0">
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-3xl opacity-[0.08]"
          style={{ background: c.primary }}
        />
        <div 
          className="absolute bottom-0 left-1/4 w-[300px] h-[150px] rounded-full blur-3xl opacity-[0.05]"
          style={{ background: c.secondary }}
        />
      </div>

      {/* ==========================================================
          MAIN CONTENT
          ========================================================== */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* ==========================================================
              BRAND
              ========================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-4 space-y-4"
          >
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: c.text }}>
              Hami<span style={{ color: c.primary }}>.</span>Parsa
            </h2>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: c.textMuted }}>
              Full Stack Developer crafting modern web experiences with passion and precision.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((item: SocialLink, index: number) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2.5 rounded-full transition-all duration-300 border ${item.color}`}
                  style={{
                    background: c.bgCard,
                    borderColor: c.border,
                    color: c.textMuted,
                  }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ==========================================================
              QUICK LINKS
              ========================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: c.textDim }}
            >
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link: QuickLink) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-300"
                    style={{ color: c.textMuted }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = c.text)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = c.textMuted)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ==========================================================
              GITHUB REPO
              ========================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <h3 
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: c.textDim }}
            >
              GitHub Repo
            </h3>
            <a
              href="https://github.com/HamiParsa/Profile-Bio"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-4 rounded-xl transition-all duration-300"
              style={{
                background: c.bgCard,
                border: `1px solid ${c.border}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = c.primary;
                e.currentTarget.style.background = c.bgCardHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = c.border;
                e.currentTarget.style.background = c.bgCard;
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <FaGithub 
                  className="transition-colors" 
                  style={{ color: c.textMuted }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = c.text)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = c.textMuted)}
                  size={16} 
                />
                <span 
                  className="text-sm transition-colors"
                  style={{ color: c.textMuted }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = c.text)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = c.textMuted)}
                >
                  Profile-Bio
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs" style={{ color: c.textDim }}>
                <span className="flex items-center gap-1">
                  <FaStar size={12} style={{ color: c.secondary }} />
                  {repoData.loading ? "..." : repoData.stars}
                </span>
                <span className="flex items-center gap-1">
                  <FaCodeBranch size={12} />
                  {repoData.loading ? "..." : repoData.forks}
                </span>
              </div>
            </a>
          </motion.div>

          {/* ==========================================================
              INFO
              ========================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <h3 
              className="text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ color: c.textDim }}
            >
              Lets Talk
            </h3>
            <p className="text-sm mb-2" style={{ color: c.textMuted }}>
              hamiparsa@gmail.com
            </p>
            <p className="text-sm" style={{ color: c.textMuted }}>
              Iran, Arak
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span 
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#22c55e" }}
              />
              <span className="text-xs" style={{ color: c.textMuted }}>
                Available for work
              </span>
            </div>

            {/* Small social icons */}
            <div className="flex gap-2 mt-4">
              <a
                href="https://github.com/hamiparsa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg transition-all duration-300 hover:scale-110"
                style={{ background: c.bgCard }}
              >
                <Github className="w-3.5 h-3.5" style={{ color: c.textDim }} />
              </a>
              <a
                href="https://www.linkedin.com/in/HamiParsa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg transition-all duration-300 hover:scale-110"
                style={{ background: c.bgCard }}
              >
                <Linkedin className="w-3.5 h-3.5" style={{ color: c.textDim }} />
              </a>
              <a
                href="https://t.me/hamiparsa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg transition-all duration-300 hover:scale-110"
                style={{ background: c.bgCard }}
              >
                <Send className="w-3.5 h-3.5" style={{ color: c.textDim }} />
              </a>
              <a
                href="mailto:hamiparsa@gmail.com"
                className="p-1.5 rounded-lg transition-all duration-300 hover:scale-110"
                style={{ background: c.bgCard }}
              >
                <Mail className="w-3.5 h-3.5" style={{ color: c.textDim }} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* ==========================================================
            BOTTOM BAR
            ========================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: c.border }}
        >
          <p className="text-xs" style={{ color: c.textDim }}>
            © {year} Hami Parsa. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 text-xs" style={{ color: c.textDim }}>
            <span>Built with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{ color: c.primary }}
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