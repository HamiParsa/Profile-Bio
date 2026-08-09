"use client";

// ============================================================
// IMPORTS
// ============================================================

import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { Menu, X, Github, Linkedin, Send, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

  // ============================================================
  // EFFECTS
  // ============================================================

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);

      // Detect active section
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
          ? "bg-black/90 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          // ============================================================ //
          BRAND // ============================================================
          <Link href="/" className="flex items-center gap-3 group relative">
            {/* Animated icon background with glow effect */}
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500 group-hover:scale-110" />

              {/* Rotating border */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-full bg-black/90" />
              </div>

              {/* Main icon container */}
              <div className="relative p-1.5 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:scale-110">
                <div className="relative rounded-full bg-black/90 p-1.5">
                  <Image
                    alt="logo"
                    src="https://iili.io/Cgd06TG.png"
                    width={45}
                    height={45}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Text with gradient and glow */}
            <div className="flex items-center">
              <span className="text-xl font-bold tracking-tight">
                <span className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 transition-all duration-500">
                  Hami
                </span>
                <span className="text-white/30">.</span>
                <span className="text-white/80 group-hover:text-white transition-colors duration-500">
                  Parsa
                </span>
              </span>

              {/* Status dot with pulse ring */}
              <span className="ml-3 relative">
                <span className="absolute inset-0 w-2.5 h-2.5 bg-green-400 rounded-full animate-ping opacity-75" />
                <span className="absolute -inset-2 bg-green-400/20 rounded-full animate-pulse" />
                <span className="relative block w-2.5 h-2.5 bg-green-400 rounded-full shadow-lg shadow-green-400/50" />
              </span>
            </div>

            {/* Hover glow */}
            <span className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-purple-500/0 via-white/5 to-blue-500/0" />
          </Link>
          {/* ==========================================================
              DESKTOP MENU 
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
                      ? "text-white bg-white/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}

                  {/* Active indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 rounded-full"
                      style={{
                        background: "linear-gradient(to right, #fff, #fff/40)",
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

            {/* Social icons in desktop */}
            <div className="flex items-center gap-1 ml-4 pl-4 border-l border-white/5">
              <a
                href="https://github.com/hamiparsa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/HamiParsa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://t.me/hamiparsa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 hover:scale-110"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
          {/* ==========================================================
              MOBILE TOGGLE 
              ========================================================== */}
          <button
            className="md:hidden p-2.5 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
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
          </button>
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

              {/* Social icons in mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex gap-2 px-4 pt-4 mt-2 border-t border-white/5"
              >
                <a
                  href="https://github.com/hamiparsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/HamiParsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://t.me/hamiparsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300"
                >
                  <Send className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/hamiparsa/Profile-Bio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300 ml-auto"
                >
                  <Code2 className="w-4 h-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
