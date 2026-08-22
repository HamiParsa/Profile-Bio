"use client";

// ============================================================
// IMPORTS
// ============================================================

import { useState, useEffect, ReactNode, useRef } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Code2,
  Sparkles,
  Zap,
  Star,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";

// ============================================================
// TYPES
// ============================================================

interface MenuItem {
  name: string;
  href: string;
}

// ============================================================
// DATA
// ============================================================

const menuItems: MenuItem[] = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// ============================================================
// COMPONENT
// ============================================================

export default function NavBar(): ReactNode {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);
  const [rotation, setRotation] = useState(0);

  // 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(springY, [-1, 1], [15, -15]);
  const rotateY = useTransform(springX, [-1, 1], [-15, 15]);

  const logoRef = useRef<HTMLDivElement>(null);

  // ============================================================
  // EFFECTS
  // ============================================================

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);

      const sections: string[] = ["about", "projects", "contact"];
      for (const section of sections) {
        const element: HTMLElement | null = document.getElementById(section);
        if (element) {
          const rect: DOMRect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isHoveringLogo) {
      const interval = setInterval(() => {
        setRotation((prev) => prev + 2);
      }, 20);
      return () => clearInterval(interval);
    }
  }, [isHoveringLogo]);

  // ============================================================
  // HELPERS
  // ============================================================

  const toggleMenu = (): void => setIsOpen((prev: boolean) => !prev);
  const closeMenu = (): void => setIsOpen(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!logoRef.current) return;
    const rect = logoRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / rect.width;
    const deltaY = (e.clientY - centerY) / rect.height;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-2xl border-b border-orange-500/10 shadow-2xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* ==========================================================
              COSMIC LOGO - ORANGE THEME
              ========================================================== */}

          <Link
            href="/"
            className="flex items-center gap-3 group relative"
            onMouseEnter={() => setIsHoveringLogo(true)}
            onMouseLeave={() => {
              setIsHoveringLogo(false);
              handleMouseLeave();
            }}
          >
            {/* 3D Tilt Container */}
            <motion.div
              ref={logoRef}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 800,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              {/* ==========================================================
                  ORANGE COSMIC RINGS
                  ========================================================== */}

              {/* Primary Galaxy Ring - Orange */}
              <motion.div
                className="absolute -inset-8 rounded-full"
                animate={{
                  rotate: rotation,
                  scale: isHoveringLogo ? [1, 1.1, 1] : 1,
                }}
                transition={{
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                style={{
                  background:
                    "conic-gradient(from 0deg, #FB923C, #F97316, #EA580C, #FB923C)",
                  padding: "2px",
                  filter: "blur(8px)",
                  opacity: isHoveringLogo ? 0.5 : 0.15,
                }}
              >
                <div className="w-full h-full rounded-full bg-black" />
              </motion.div>

              {/* Secondary Ring - Orange/Coral */}
              <motion.div
                className="absolute -inset-5 rounded-full"
                animate={{
                  rotate: -rotation * 0.7,
                }}
                style={{
                  border: "2px solid transparent",
                  borderImage:
                    "linear-gradient(45deg, #F97316, #FB923C, #EA580C) 1",
                  borderRadius: "50%",
                  opacity: isHoveringLogo ? 0.4 : 0.08,
                  filter: "blur(4px)",
                }}
              />

              {/* Orbital Rings - Orange */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full border border-orange-500/10"
                  style={{
                    width: `${40 + i * 20}px`,
                    height: `${40 + i * 20}px`,
                    left: `-${20 + i * 10}px`,
                    top: `-${20 + i * 10}px`,
                  }}
                  animate={{
                    rotate: i % 2 === 0 ? rotation * 0.5 : -rotation * 0.3,
                    scale: isHoveringLogo ? [1, 1.02, 1] : 1,
                    borderColor: isHoveringLogo
                      ? [
                          `rgba(251,146,60,0.3)`,
                          `rgba(249,115,22,0.3)`,
                          `rgba(251,146,60,0.3)`,
                        ]
                      : "rgba(255,255,255,0.05)",
                  }}
                  transition={{
                    scale: {
                      duration: 2 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    borderColor: { duration: 3, repeat: Infinity },
                  }}
                />
              ))}

              {/* ==========================================================
                  ORBITING PARTICLES - ORANGE THEME
                  ========================================================== */}

              {isHoveringLogo &&
                [...Array(12)].map((_, i) => {
                  const angle = (i / 12) * Math.PI * 2;
                  const radius = 35 + Math.random() * 15;
                  const colors = [
                    "#FB923C",
                    "#F97316",
                    "#EA580C",
                    "#FDBA74",
                    "#FED7AA",
                  ];
                  return (
                    <motion.div
                      key={`star-${i}`}
                      className="absolute w-1 h-1 rounded-full"
                      style={{
                        background: `radial-gradient(circle, ${colors[i % 5]}, transparent)`,
                        x: Math.cos(angle) * radius,
                        y: Math.sin(angle) * radius,
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        x: Math.cos(angle + rotation * 0.02) * radius,
                        y: Math.sin(angle + rotation * 0.02) * radius,
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut",
                      }}
                    />
                  );
                })}

              {/* ==========================================================
                  MAIN LOGO - ORANGE GLASS
                  ========================================================== */}

              <motion.div
                className="relative p-1.5 rounded-2xl"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "translateZ(20px)",
                }}
                animate={{
                  scale: isHoveringLogo ? 1.08 : 1,
                  boxShadow: isHoveringLogo
                    ? "0 20px 60px rgba(251,146,60,0.3), 0 0 120px rgba(249,115,22,0.15)"
                    : "0 10px 30px rgba(0,0,0,0.3)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Glass Background with Orange Depth */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-orange-400/5 backdrop-blur-xl border border-orange-500/10 overflow-hidden">
                  {/* Animated Gradient Overlay - Orange */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: isHoveringLogo
                        ? [
                            "radial-gradient(circle at 0% 0%, rgba(251,146,60,0.25), transparent 70%)",
                            "radial-gradient(circle at 100% 100%, rgba(249,115,22,0.25), transparent 70%)",
                            "radial-gradient(circle at 0% 100%, rgba(234,88,12,0.25), transparent 70%)",
                            "radial-gradient(circle at 0% 0%, rgba(251,146,60,0.25), transparent 70%)",
                          ]
                        : "transparent",
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <motion.div
                    className="absolute w-1/2 h-full"
                    animate={{
                      x: isHoveringLogo ? ["-100%", "300%"] : "-100%",
                    }}
                    transition={{
                      duration: 2,
                      repeat: isHoveringLogo ? Infinity : 0,
                      ease: "easeInOut",
                    }}
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(251,146,60,0.15), transparent)",
                      transform: "skewX(-25deg)",
                    }}
                  />
                </div>

                {/* Logo Image with 3D Layer */}
                <div className="relative rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-400/20 to-orange-600/20" />
                  <motion.div
                    animate={{
                      scale: isHoveringLogo ? 1.02 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Image
                      alt="HamiParsa Logo"
                      src="https://iili.io/Cgd06TG.png"
                      width={42}
                      height={42}
                      className="relative z-10"
                    />
                  </motion.div>

                  {/* Lens Flare - Orange */}
                  <motion.div
                    className="absolute top-0 left-0 w-8 h-8 rounded-full blur-xl"
                    animate={{
                      x: isHoveringLogo ? [0, 20, 0] : 0,
                      y: isHoveringLogo ? [0, -10, 0] : 0,
                      opacity: isHoveringLogo ? [0.5, 0.15, 0.5] : 0,
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                      background:
                        "radial-gradient(circle, rgba(251,146,60,0.6), transparent)",
                    }}
                  />
                </div>

                {/* Corner Accents - Orange */}
                <div className="absolute -top-px -left-px w-6 h-6 border-t-2 border-l-2 border-orange-400/30 rounded-tl-xl" />
                <div className="absolute -top-px -right-px w-6 h-6 border-t-2 border-r-2 border-orange-500/30 rounded-tr-xl" />
                <div className="absolute -bottom-px -left-px w-6 h-6 border-b-2 border-l-2 border-orange-400/30 rounded-bl-xl" />
                <div className="absolute -bottom-px -right-px w-6 h-6 border-b-2 border-r-2 border-orange-300/30 rounded-br-xl" />
              </motion.div>
            </motion.div>

            {/* ==========================================================
                TEXT WITH ORANGE COSMIC EFFECTS
                ========================================================== */}

            <motion.div
              className="flex items-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative">
                {/* Text Glow - Orange */}
                <motion.div
                  className="absolute -inset-2 rounded-lg blur-xl"
                  animate={{
                    opacity: isHoveringLogo ? 0.25 : 0,
                    background:
                      "radial-gradient(circle, rgba(251,146,60,0.4), transparent 70%)",
                  }}
                  transition={{ duration: 0.5 }}
                />

                <span className="text-xl font-bold tracking-tight relative">
                  {/* Animated Gradient Text - Orange */}
                  <motion.span
                    className="inline-block bg-clip-text text-transparent"
                    style={{
                      backgroundImage: isHoveringLogo
                        ? "linear-gradient(135deg, #FB923C, #F97316, #EA580C, #FDBA74, #FB923C)"
                        : "linear-gradient(135deg, #ffffff, #ffffff)",
                      backgroundSize: "300% 300%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    animate={{
                      backgroundImage: isHoveringLogo
                        ? [
                            "linear-gradient(135deg, #FB923C, #F97316, #EA580C, #FDBA74, #FB923C)",
                            "linear-gradient(225deg, #FB923C, #F97316, #EA580C, #FDBA74, #FB923C)",
                            "linear-gradient(135deg, #FB923C, #F97316, #EA580C, #FDBA74, #FB923C)",
                          ]
                        : "linear-gradient(135deg, #ffffff, #ffffff)",
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    Hami
                  </motion.span>

                  <span className="text-white/30">.</span>

                  <motion.span
                    className="inline-block"
                    animate={{
                      color: isHoveringLogo
                        ? "#ffffff"
                        : "rgba(255,255,255,0.8)",
                      textShadow: isHoveringLogo
                        ? "0 0 30px rgba(251,146,60,0.4), 0 0 60px rgba(249,115,22,0.2)"
                        : "none",
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    Parsa
                  </motion.span>

                  {/* Underline - Orange */}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 rounded-full"
                    animate={{
                      width: isHoveringLogo ? "100%" : "0%",
                      background:
                        "linear-gradient(90deg, #FB923C, #F97316, #EA580C, #FDBA74)",
                      filter: "blur(3px)",
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </span>

                {/* Status Dot - Premium Orange/Green */}
                <motion.span
                  className="ml-3 relative inline-flex"
                  animate={{
                    scale: isHoveringLogo ? 1.3 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  {/* Multiple pulse rings - Orange */}
                  {[...Array(3)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="absolute inset-0 w-3 h-3 rounded-full"
                      animate={{
                        scale: [1, 2 + i * 0.5, 1],
                        opacity: [0.8, 0, 0.8],
                      }}
                      transition={{
                        duration: 1.5 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeOut",
                      }}
                      style={{
                        background: `radial-gradient(circle, rgba(251,146,60,${0.3 - i * 0.1}), transparent)`,
                      }}
                    />
                  ))}

                  {/* Core dot with orange glow */}
                  <span className="relative block w-3 h-3 rounded-full">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 animate-pulse" />
                    <span className="absolute inset-0.5 rounded-full bg-orange-400 shadow-lg shadow-orange-400/50" />
                    <span className="absolute inset-1 rounded-full bg-white/30" />
                  </span>
                </motion.span>
              </div>
            </motion.div>

            {/* ==========================================================
                FLOATING ICONS ON HOVER - ORANGE
                ========================================================== */}

            {isHoveringLogo && (
              <>
                <motion.div
                  initial={{ scale: 0, opacity: 0, y: 0 }}
                  animate={{ scale: 1, opacity: 1, y: -25 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="absolute -right-8 -top-8"
                >
                  <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0, opacity: 0, x: 0 }}
                  animate={{ scale: 1, opacity: 1, x: -25 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    delay: 0.1,
                  }}
                  className="absolute -left-8 bottom-0"
                >
                  <Star className="w-3 h-3 text-orange-300 animate-spin-slow" />
                </motion.div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    delay: 0.2,
                  }}
                  className="absolute -right-6 bottom-0"
                >
                  <Zap className="w-3 h-3 text-orange-500 animate-pulse" />
                </motion.div>
              </>
            )}
          </Link>

          {/* ==========================================================
              DESKTOP MENU - ORANGE THEME
              ========================================================== */}

          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item: MenuItem) => {
              const isActive: boolean =
                activeSection === item.href.replace("#", "");

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white bg-orange-500/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}

                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 rounded-full"
                      style={{
                        background:
                          "linear-gradient(to right, #FB923C, #F97316)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Social icons with orange effects */}
            <div className="flex items-center gap-1 ml-4 pl-4 border-l border-orange-500/10">
              {[
                {
                  icon: Github,
                  href: "https://github.com/hamiparsa",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/HamiParsa",
                  label: "LinkedIn",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-2 rounded-xl text-gray-400 hover:text-orange-400 transition-all duration-300"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -5, 5, -5, 0],
                    transition: { rotate: { duration: 0.5 } },
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                  <motion.span
                    className="absolute -inset-1 rounded-xl bg-gradient-to-r from-orange-500/20 to-orange-400/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* ==========================================================
              MOBILE TOGGLE 
              ========================================================== */}

          <motion.button
            className="md:hidden p-2.5 rounded-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            style={{
              background: isOpen
                ? "rgba(255,255,255,0.08)"
                : "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </motion.button>
        </div>
      </div>

      {/* ==========================================================
          MOBILE MENU 
          ========================================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden"
            style={{
              background: "rgba(0,0,0,0.95)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div className="px-4 py-6 space-y-2">
              {menuItems.map((item: MenuItem, index: number) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-gray-400 hover:text-orange-400 hover:bg-orange-500/5 transition-all duration-300"
                    onClick={closeMenu}
                  >
                    <span className="text-xs font-mono text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.name}
                    <span className="ml-auto text-white/10">→</span>
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex gap-2 px-4 pt-4 mt-2 border-t border-orange-500/10"
              >
                {[
                  { icon: Github, href: "https://github.com/hamiparsa" },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/HamiParsa",
                  },
                  
                  {
                    icon: Code2,
                    href: "https://github.com/hamiparsa/Profile-Bio",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-orange-500/5 hover:bg-orange-500/10 text-gray-400 hover:text-orange-400 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
