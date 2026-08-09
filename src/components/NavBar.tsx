"use client";

// ============================================================
// IMPORTS
// ============================================================

import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Send, Code2, Sparkles, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// ============================================================
// TYPES
// ============================================================

interface MenuItem {
  name: string;
  href: string;
  icon?: ReactNode;
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);

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

    const handleMouseMove = (e: MouseEvent): void => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // ============================================================
  // HELPERS
  // ============================================================

  const toggleMenu = (): void => setIsOpen((prev: boolean) => !prev);
  const closeMenu = (): void => setIsOpen(false);

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
          ? "bg-black/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* ==========================================================
              ULTRA PREMIUM LOGO
              ========================================================== */}

          <Link 
            href="/" 
            className="flex items-center gap-3 group relative"
            onMouseEnter={() => setIsHoveringLogo(true)}
            onMouseLeave={() => setIsHoveringLogo(false)}
          >
            {/* Magnetic glow effect based on mouse position */}
            {isHoveringLogo && (
              <motion.div
                className="absolute -inset-8 pointer-events-none"
                animate={{
                  background: `radial-gradient(circle at ${mousePosition.x - 100}px ${mousePosition.y - 50}px, rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.2), transparent 70%)`,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
              />
            )}

            {/* Multiple glow layers */}
            <div className="relative">
              {/* Outer glow - animated */}
              <motion.div
                className="absolute -inset-4 rounded-2xl"
                animate={{
                  background: isHoveringLogo
                    ? "conic-gradient(from 0deg, #8B5CF6, #EC4899, #3B82F6, #8B5CF6)"
                    : "conic-gradient(from 0deg, transparent, transparent)",
                  opacity: isHoveringLogo ? 0.3 : 0,
                  scale: isHoveringLogo ? 1.2 : 1,
                }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                style={{ filter: "blur(20px)" }}
              />

              {/* Secondary glow */}
              <motion.div
                className="absolute -inset-3 rounded-2xl"
                animate={{
                  background: isHoveringLogo
                    ? "radial-gradient(circle, rgba(139, 92, 246, 0.4), rgba(236, 72, 153, 0.2), transparent 70%)"
                    : "transparent",
                  opacity: isHoveringLogo ? 1 : 0,
                  scale: isHoveringLogo ? 1.1 : 1,
                }}
                transition={{ duration: 0.5 }}
                style={{ filter: "blur(15px)" }}
              />

              {/* Rotating border ring */}
              <motion.div
                className="absolute -inset-1 rounded-full"
                animate={{
                  rotate: isHoveringLogo ? 360 : 0,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  background: "conic-gradient(from 0deg, #8B5CF6, #EC4899, #3B82F6, #8B5CF6)",
                  padding: "2px",
                }}
              >
                <div className="w-full h-full rounded-full bg-black" />
              </motion.div>

              {/* Main logo container - glass morphism */}
              <motion.div
                className="relative p-1 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10"
                animate={{
                  scale: isHoveringLogo ? 1.05 : 1,
                  borderColor: isHoveringLogo ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.1)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Inner shimmer */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <motion.div
                    className="absolute -inset-full"
                    animate={{
                      x: isHoveringLogo ? ["0%", "200%"] : "0%",
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: isHoveringLogo ? Infinity : 0,
                      ease: "easeInOut",
                    }}
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                      transform: "skewX(-20deg)",
                    }}
                  />
                </div>

                {/* Logo image with ring */}
                <div className="relative rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20" />
                  <Image 
                    alt="HamiParsa Logo" 
                    src='https://iili.io/Cgd06TG.png' 
                    width={44} 
                    height={44}
                    className="relative z-10"
                  />
                </div>

                {/* Floating particles */}
                {isHoveringLogo && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-purple-400/60"
                        initial={{
                          x: 0,
                          y: 0,
                          scale: 0,
                          opacity: 0,
                        }}
                        animate={{
                          x: [0, (Math.random() - 0.5) * 40],
                          y: [0, (Math.random() - 0.5) * 40],
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1 + Math.random(),
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeOut",
                        }}
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            </div>

            {/* Text with advanced effects */}
            <div className="flex items-center">
              <motion.div
                className="relative"
                animate={{
                  scale: isHoveringLogo ? 1.02 : 1,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <span className="text-xl font-bold tracking-tight">
                  <motion.span
                    className="inline-block"
                    animate={{
                      background: isHoveringLogo
                        ? "linear-gradient(135deg, #8B5CF6, #EC4899, #3B82F6, #8B5CF6)"
                        : "linear-gradient(135deg, #ffffff, #ffffff)",
                      backgroundSize: isHoveringLogo ? "300% 300%" : "100% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    Hami
                  </motion.span>
                  <span className="text-white/30">.</span>
                  <motion.span
                    className="text-white/80 inline-block"
                    animate={{
                      color: isHoveringLogo ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.8)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Parsa
                  </motion.span>
                </span>

                {/* Underline glow */}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 rounded-full"
                  animate={{
                    width: isHoveringLogo ? "100%" : "0%",
                    background: "linear-gradient(90deg, #8B5CF6, #EC4899, #3B82F6)",
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{ filter: "blur(2px)" }}
                />
              </motion.div>

              {/* Premium status dot */}
              <motion.span
                className="ml-3 relative"
                animate={{
                  scale: isHoveringLogo ? 1.2 : 1,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {/* Pulse ring */}
                <motion.span
                  className="absolute inset-0 w-2.5 h-2.5 bg-green-400 rounded-full"
                  animate={{
                    scale: isHoveringLogo ? [1, 2] : [1, 1.5],
                    opacity: isHoveringLogo ? [0.8, 0] : [0.6, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
                
                {/* Outer glow */}
                <span className="absolute -inset-1 bg-green-400/20 rounded-full animate-pulse" />
                
                {/* Core dot */}
                <span className="relative block w-2.5 h-2.5 bg-green-400 rounded-full shadow-lg shadow-green-400/50">
                  {/* Inner sparkle */}
                  <span className="absolute inset-0 rounded-full bg-white/30 animate-pulse" />
                </span>
              </motion.span>
            </div>

            {/* Sparkle icon on hover */}
            {isHoveringLogo && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute -right-6 -top-6"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
              </motion.div>
            )}
          </Link>

          {/* ==========================================================
              DESKTOP MENU 
              ========================================================== */}

          <div className="hidden md:flex items-center gap-1">
            {menuItems.map((item: MenuItem) => {
              const isActive: boolean = activeSection === item.href.replace("#", "");
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                  
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 rounded-full"
                      style={{ background: "linear-gradient(to right, #8B5CF6, #EC4899)" }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Social icons with hover effects */}
            <div className="flex items-center gap-1 ml-4 pl-4 border-l border-white/5">
              {[
                { icon: Github, href: "https://github.com/hamiparsa", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/HamiParsa", label: "LinkedIn" },
                { icon: Send, href: "https://t.me/hamiparsa", label: "Telegram" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                  <motion.span
                    className="absolute -inset-1 rounded-xl bg-white/5"
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
              background: isOpen ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
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
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300"
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
                className="flex gap-2 px-4 pt-4 mt-2 border-t border-white/5"
              >
                {[
                  { icon: Github, href: "https://github.com/hamiparsa" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/HamiParsa" },
                  { icon: Send, href: "https://t.me/hamiparsa" },
                  { icon: Code2, href: "https://github.com/hamiparsa/Profile-Bio" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300"
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