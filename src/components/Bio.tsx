"use client";

// ============================================================
// IMPORTS
// ============================================================

import Image from "next/image";
import { useState, useEffect, useRef, ReactNode } from "react";
import { motion, useMotionValue, useTransform, useSpring, MotionValue } from "framer-motion";
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
import { 
  Github, 
  Linkedin, 
  Send, 
  Globe,
  LucideIcon,
} from "lucide-react";

// ============================================================
// TYPES
// ============================================================

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface SocialLink {
  icon: LucideIcon;
  href: string;
}

interface ColorScheme {
  bg: string;
  bgSecondary: string;
  bgCard: string;
  bgCardHover: string;
  text: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textDim: string;
  primary: string;
  primaryDark: string;
  primaryLight: string;
  secondary: string;
  secondaryLight: string;
  accent: string;
  border: string;
  borderLight: string;
  glow: string;
  glowGold: string;
}

interface Config {
  colors: ColorScheme;
  social: SocialLink[];
}

// ============================================================
// CONFIGURATION
// ============================================================

const CONFIG: Config = {
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
  social: [
    { icon: Github, href: "https://github.com/HamiParsa" },
    { icon: Linkedin, href: "https://linkedin.com/in/HamiParsa" },
    { icon: Send, href: "https://t.me/HamiParsa" },
    { icon: Globe, href: "https://hamiparsa.github.io/Profile-Bio/" },
  ],
};

// ============================================================
// SKILLS DATA
// ============================================================

const skills: Skill[] = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: IoLogoJavascript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: RiNextjsFill },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Zustand", icon: TbBrandRedux },
  { name: "Tailwind", icon: RiTailwindCssFill },
  { name: "Supabase", icon: RiSupabaseFill },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Python", icon: SiPython },
  { name: "SQLite", icon: SiSqlite },
];

// ============================================================
// TYPEWRITER COMPONENT
// ============================================================

interface TypewriterProps {
  words: string[];
  speed?: number;
  delay?: number;
}

function Typewriter({ words, speed = 120, delay = 2500 }: TypewriterProps): ReactNode {
  const [currentWord, setCurrentWord] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const colors: string[] = [CONFIG.colors.primary, CONFIG.colors.secondary, CONFIG.colors.accent];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullWord: string = words[currentWord];
        const currentLength: number = text.length;

        if (!isDeleting) {
          if (currentLength < fullWord.length) {
            setText(fullWord.substring(0, currentLength + 1));
          } else {
            setTimeout(() => setIsDeleting(true), delay);
          }
        } else {
          if (currentLength > 0) {
            setText(fullWord.substring(0, currentLength - 1));
          } else {
            setIsDeleting(false);
            setCurrentWord((prev: number) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentWord, words, speed, delay]);

  const currentColor: string = colors[currentWord % colors.length];

  return (
    <span 
      className="text-xl font-bold" 
      style={{ color: currentColor, textShadow: `0 0 30px ${currentColor}30` }}
    >
      {text}
      <span 
        className="inline-block w-0.5 h-6 ml-1 animate-pulse" 
        style={{ background: currentColor }} 
      />
    </span>
  );
}

// ============================================================
// SKILLS BADGE COMPONENT
// ============================================================

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

function SkillBadge({ skill, index }: SkillBadgeProps): ReactNode {
  const c: ColorScheme = CONFIG.colors;
  const Icon: React.ComponentType<{ className?: string }> = skill.icon;

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 + index * 0.015 }}
      className="flex items-center gap-1.5 px-3 py-1 text-[11px] rounded-full transition-all duration-300 hover:scale-105"
      style={{
        color: c.textMuted,
        border: `1px solid ${c.border}`,
        background: c.bgCard,
      }}
    >
      <Icon className="text-sm"  />
      {skill.name}
    </motion.span>
  );
}

// ============================================================
// PROFILE CARD WITH 3D EFFECT
// ============================================================



function ProfileCard(): ReactNode {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const c: ColorScheme = CONFIG.colors;

  const mouseX: MotionValue<number> = useMotionValue(0);
  const mouseY: MotionValue<number> = useMotionValue(0);
  const rotateX: MotionValue<number> = useTransform(mouseY, [-100, 100], [6, -6]);
  const rotateY: MotionValue<number> = useTransform(mouseX, [-100, 100], [-6, 6]);
  const springRotateX: MotionValue<number> = useSpring(rotateX, { damping: 20, stiffness: 300 });
  const springRotateY: MotionValue<number> = useSpring(rotateY, { damping: 20, stiffness: 300 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    const rect: DOMRect | undefined = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const x: number = e.clientX - rect.left - rect.width / 2;
      const y: number = e.clientY - rect.top - rect.height / 2;
      mouseX.set(x);
      mouseY.set(y);
    }
  };

  return (
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
        {/* Glow ring */}
        <div
          className="absolute -inset-4 rounded-2xl blur-2xl transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle, ${c.primary}, ${c.secondary})`,
            opacity: isHovered ? 0.4 : 0.1,
          }}
        />

        {/* Image */}
        <div
          className="relative w-full h-full rounded-2xl overflow-hidden border-2 transition-all duration-500"
          style={{
            borderColor: isHovered ? `${c.primary}60` : `${c.border}`,
            boxShadow: isHovered ? `0 0 60px ${c.glow}` : "none",
          }}
        >
          <Image
            src="https://avatars.githubusercontent.com/u/227557537?v=4"
            alt="Hami Parsa"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: `linear-gradient(to top, ${c.bg}80, transparent 60%)`,
            }}
          />
        </div>

        {/* Status badge */}
        <div
          className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm border"
          style={{
            background: c.bgCard,
            borderColor: c.border,
            color: c.textMuted,
          }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full mr-1.5 animate-pulse"
            style={{ background: "#22c55e" }}
          />
          Available
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function Bio(): ReactNode {
  const [mounted, setMounted] = useState<boolean>(false);
  const c: ColorScheme = CONFIG.colors;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex items-center justify-center px-4 py-20 overflow-hidden"
      style={{ background: c.bg }}
    >
      {/* ==========================================================
          BACKGROUND
          ========================================================== */}

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-[0.08]"
        style={{ background: c.primary }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-[0.06]"
        style={{ background: c.secondary }}
      />
      <div
        className="absolute top-2/3 left-1/2 w-64 h-64 rounded-full blur-3xl opacity-[0.04]"
        style={{ background: c.accent }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* ==========================================================
              PROFILE CARD
              ========================================================== */}
          <ProfileCard />

          {/* ==========================================================
              CONTENT
              ========================================================== */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Status tag */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 lg:mb-3"
                style={{
                  border: `1px solid ${c.border}`,
                  background: c.bgCard,
                }}
              >
                <span
                  className="w-1 h-1 rounded-full animate-pulse"
                  style={{ background: c.secondary }}
                />
                <span
                  className="text-[10px] font-medium tracking-wider"
                  style={{ color: c.textMuted }}
                >
                  OPEN TO WORK
                </span>
              </div>

              {/* Name */}
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight"
                style={{ color: c.text }}
              >
                Hami Parsa
                <span className="inline-block ml-2" style={{ color: c.textDim }}>
                  .
                </span>
              </h1>

              {/* Title with typewriter */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-2">
                <p className="text-lg sm:text-xl" style={{ color: c.textMuted }}>
                  Full Stack Developer
                </p>
                <FaLaptopCode className="text-lg" style={{ color: c.textDim }} />
              </div>

              <div className="mt-1 flex items-center justify-center lg:justify-start gap-2">
                <span className="text-sm" style={{ color: c.textMuted }}>I am a</span>
                <Typewriter words={["Developer", "Designer", "Creator", "Problem Solver"]} />
              </div>

              {/* Bio */}
              <p
                className="text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mt-4"
                style={{ color: c.textMuted }}
              >
                Crafting modern web applications with clean code and thoughtful design.
              </p>

              {/* Contact info */}
              <div className="flex flex-wrap items-center gap-4 mt-4 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-sm" style={{ color: c.textDim }}>
                  <MdEmail size={16} />
                  parsa.developer001@gmail.com
                </div>
                <span className="w-px h-3 bg-white/5 hidden sm:block" />
                <div className="flex items-center gap-2 text-sm" style={{ color: c.textDim }}>
                  <MdLocationOn size={16} />
                  Iran, Arak
                </div>
              </div>
            </motion.div>

            {/* ==========================================================
                SKILLS
                ========================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {skills.map((skill: Skill, index: number) => (
                  <SkillBadge key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>

            {/* ==========================================================
                CTA BUTTONS
                ========================================================== */}
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
                className="px-6 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: c.bgCard,
                  border: `1px solid ${c.border}`,
                  color: c.textMuted,
                }}
              >
                About
              </a>

              <a
                href="https://github.com/hamiparsa"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: c.bgCard,
                  border: `1px solid ${c.border}`,
                  color: c.textMuted,
                }}
              >
                GitHub
              </a>

              <a
                href="#contact"
                className="px-6 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${c.primary}, ${c.secondary})`,
                  color: "#0A0A0A",
                  boxShadow: `0 0 30px ${c.glow}`,
                }}
              >
                Contact
              </a>

              {/* Social icons */}
              <div className="flex gap-2 ml-2">
                {CONFIG.social.map((link: SocialLink, index: number) => {
                  const Icon: LucideIcon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: c.bgCard,
                        border: `1px solid ${c.border}`,
                      }}
                    >
                      <Icon className="w-4 h-4" style={{ color: c.textMuted }} />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}