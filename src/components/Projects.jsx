"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaGlobe,
  FaHeart,
  FaStar,
  FaReact,
  FaSearch,
  FaArrowLeft,
  FaArrowRight,
  FaCode,
  FaFolderOpen,
  FaRocket,
  FaCheck,
  FaCircle,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

// ============================================================
// TECH ICONS
// ============================================================

const techIcons = {
  React: <FaReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  Tailwind: <SiTailwindcss className="text-cyan-400" />,
  Zustand: <TbBrandRedux className="text-purple-400" />,
};

// ============================================================
// PROJECTS DATA
// ============================================================

const allProjects = [
  {
    id: 1,
    name: "Fast Food Menu",
    url: "https://hamiparsa.github.io/Menu-Fast-Food/",
    github: "https://github.com/HamiParsa/Menu-Fast-Food",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Menu-Fast-Food/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Menu-Fast-Food/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Menu-Fast-Food/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Menu-Fast-Food/main/pic4.png",
      "https://raw.githubusercontent.com/HamiParsa/Menu-Fast-Food/main/pic5.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind", "Zustand"],
    description:
      "Modern fast food ordering interface with real-time cart management and seamless checkout experience.",
    featured: true,
    category: "E-commerce",
  },
  {
    id: 2,
    name: "Movies",
    url: "https://imaginative-granita-28d88b.netlify.app/",
    github: "https://github.com/HamiParsa/Movie",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Movie/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Movie/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Movie/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Movie/main/pic4.png",
      "https://raw.githubusercontent.com/HamiParsa/Movie/main/pic5.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind", "Zustand"],
    description:
      "Browse and discover movies with advanced filtering, search, and personalized recommendations.",
    featured: false,
    category: "Entertainment",
  },
  {
    id: 3,
    name: "Game Zone",
    url: "https://stellular-salamander-2f94ef.netlify.app/",
    github: "https://github.com/HamiParsa/Game-Zone",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Game-Zone/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Game-Zone/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Game-Zone/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Game-Zone/main/pic4.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Collection of mini-games with sleek gaming interface and competitive leaderboards.",
    featured: false,
    category: "Gaming",
  },
  {
    id: 4,
    name: "Music Player",
    url: "https://hamiparsa.github.io/Music-Player/",
    github: "https://github.com/HamiParsa/Music-Player",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Music-Player/main/pic1.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Beautiful music player with playlist management and audio controls.",
    featured: false,
    category: "Music",
  },
  {
    id: 5,
    name: "Kouman",
    url: "https://kouman.netlify.app/",
    github: "https://github.com/HamiParsa/Kouman",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Kouman/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Kouman/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Kouman/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Kouman/main/pic4.png",
      "https://raw.githubusercontent.com/HamiParsa/Kouman/main/pic5.png",
      "https://raw.githubusercontent.com/HamiParsa/Kouman/main/pic6.png",
      "https://raw.githubusercontent.com/HamiParsa/Kouman/main/pic7.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind", "Zustand"],
    description:
      "Comprehensive e-commerce platform with modern shopping experience and payment integration.",
    featured: true,
    category: "E-commerce",
  },
  {
    id: 6,
    name: "Coffee Shop",
    url: "https://hamiparsa.github.io/Coffee-Shop/",
    github: "https://github.com/HamiParsa/Coffee-Shop",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Coffee-Shop/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Coffee-Shop/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Coffee-Shop/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Coffee-Shop/main/pic4.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Cozy coffee shop website with menu browsing, ordering, and loyalty program.",
    featured: false,
    category: "Food & Drink",
  },
  {
    id: 7,
    name: "Galaxy",
    url: "https://hamiparsa.github.io/Galaxy/",
    github: "https://github.com/HamiParsa/Galaxy",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Galaxy/main/pic1.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Interactive space exploration experience with stunning visuals and animations.",
    featured: false,
    category: "Interactive",
  },
  {
    id: 8,
    name: "Eminem",
    url: "https://hamiparsa.github.io/Eminem/",
    github: "https://github.com/HamiParsa/Eminem",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Eminem/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Eminem/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Eminem/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Eminem/main/pic4.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Tribute page dedicated to Eminem with his music, biography, and discography.",
    featured: false,
    category: "Tribute",
  },
  {
    id: 9,
    name: "TMNT",
    url: "https://hamiparsa.github.io/TMNT/",
    github: "https://github.com/HamiParsa/TMNT",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/TMNT/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/TMNT/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/TMNT/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/TMNT/main/pic4.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Fan site for Teenage Mutant Ninja Turtles with character profiles and history.",
    featured: false,
    category: "Fan Site",
  },
  {
    id: 10,
    name: "Hyper Net",
    url: "https://hamiparsa.github.io/Hyper-Net/",
    github: "https://github.com/HamiParsa/Hyper-Net",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Hyper-Net/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Hyper-Net/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Hyper-Net/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Hyper-Net/main/pic4.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "High-performance networking dashboard with real-time analytics.",
    featured: false,
    category: "Dashboard",
  },
  {
    id: 11,
    name: "Code Space",
    url: "https://hamiparsa.github.io/Code-Space/",
    github: "https://github.com/HamiParsa/Code-Space",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Code-Space/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Code-Space/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Code-Space/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Code-Space/main/pic4.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description: "Collaborative coding environment with live editing features.",
    featured: false,
    category: "Development",
  },
  {
    id: 12,
    name: "Apple Store",
    url: "https://glittering-cajeta-1c0bb2.netlify.app/",
    github: "https://github.com/HamiParsa/Apple-Store",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Apple-Store/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Apple-Store/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Apple-Store/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Apple-Store/main/pic4.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Apple-inspired storefront with product browsing and seamless checkout.",
    featured: false,
    category: "E-commerce",
  },
  {
    id: 13,
    name: "Phone Music Player",
    url: "https://hamiparsa.github.io/Phone-Music-Player/",
    github: "https://github.com/HamiParsa/Phone-Music-Player",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Phone-Music-Player/main/pic1.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Mobile-first music player designed for phone screens with touch controls.",
    featured: false,
    category: "Music",
  },
  {
    id: 14,
    name: "Anime Shop",
    url: "https://spiffy-kringle-0e26e5.netlify.app/",
    github: "https://github.com/HamiParsa/Anime-Shop",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Anime-Shop/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Anime-Shop/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Anime-Shop/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Anime-Shop/main/pic4.png",
      "https://raw.githubusercontent.com/HamiParsa/Anime-Shop/main/pic5.png",
      "https://raw.githubusercontent.com/HamiParsa/Anime-Shop/main/pic6.png",
      "https://raw.githubusercontent.com/HamiParsa/Anime-Shop/main/pic7.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind", "Zustand"],
    description:
      "Anime merchandise store with vibrant colorful design and exclusive collections.",
    featured: false,
    category: "E-commerce",
  },
  {
    id: 15,
    name: "Js Compiler",
    url: "https://github.com/HamiParsa/Js-Compiler",
    github: "https://github.com/HamiParsa/Js-Compiler",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Js-Compiler/main/pic1.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Lightweight JavaScript compiler with real-time code execution.",
    featured: false,
    category: "Development",
  },
  {
    id: 16,
    name: "Travel Mate",
    url: "https://hamiparsa.github.io/Travel-Mate/",
    github: "https://github.com/HamiParsa/Travel-Mate",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Travel-Mate/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Travel-Mate/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Travel-Mate/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Travel-Mate/main/pic4.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Travel planning app with destination guides, itineraries, and booking integration.",
    featured: false,
    category: "Travel",
  },
  {
    id: 17,
    name: "Youtube",
    url: "https://lighthearted-tarsier-75bef8.netlify.app/",
    github: "https://github.com/HamiParsa/Youtube",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Youtube/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Youtube/main/pic2.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "YouTube clone with video browsing, playback, and channel features.",
    featured: false,
    category: "Entertainment",
  },
  {
    id: 18,
    name: "Task List",
    url: "https://hamiparsa.github.io/Task-List/",
    github: "https://github.com/HamiParsa/Task-List",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Task-List/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Task-List/main/pic2.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Productivity task manager with drag-and-drop functionality and categories.",
    featured: false,
    category: "Productivity",
  },
  {
    id: 19,
    name: "My Restaurant",
    url: "https://hamiparsa.github.io/My-Restaurant/",
    github: "https://github.com/HamiParsa/My-Restaurant",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/My-Restaurant/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/My-Restaurant/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/My-Restaurant/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/My-Restaurant/main/pic4.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Restaurant website with menu browsing, reservation system, and online ordering.",
    featured: false,
    category: "Food & Drink",
  },
  {
    id: 20,
    name: "Second Hand Shop",
    url: "https://delightful-wisp-111a27.netlify.app/",
    github: "https://github.com/HamiParsa/Second-Hand-Shop",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Second-Hand-Shop/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Second-Hand-Shop/main/pic2.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Second-hand marketplace for buying and selling used items with categories.",
    featured: false,
    category: "E-commerce",
  },
  {
    id: 21,
    name: "Instagram",
    url: "https://hamiparsa.github.io/Instagram/",
    github: "https://github.com/HamiParsa/Instagram",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Instagram/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Instagram/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Instagram/main/pic3.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Instagram clone with photo sharing, feed, and story features.",
    featured: false,
    category: "Social Media",
  },
  {
    id: 22,
    name: "Iron Zone",
    url: "https://hamiparsa.github.io/Iron-Zone/",
    github: "https://github.com/HamiParsa/Iron-Zone",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Iron-Zone/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Iron-Zone/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Iron-Zone/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Iron-Zone/main/pic4.png",
      "https://raw.githubusercontent.com/HamiParsa/Iron-Zone/main/pic5.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Gym and fitness website with workout plans, schedules, and progress tracking.",
    featured: false,
    category: "Fitness",
  },
  {
    id: 23,
    name: "Luxury Beauty",
    url: "https://hamiparsa.github.io/Luxury-Beauty/",
    github: "https://github.com/HamiParsa/Luxury-Beauty",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Luxury-Beauty/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Luxury-Beauty/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Luxury-Beauty/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Luxury-Beauty/main/pic4.png",
      "https://raw.githubusercontent.com/HamiParsa/Luxury-Beauty/main/pic5.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Luxury beauty brand website with product showcases and customer reviews.",
    featured: false,
    category: "Beauty",
  },
  {
    id: 24,
    name: "Melody Hub",
    url: "https://hamiparsa.github.io/Melody-Hub/",
    github: "https://github.com/HamiParsa/Melody-Hub",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Melody-Hub/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Melody-Hub/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Melody-Hub/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Melody-Hub/main/pic4.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Music discovery platform with curated playlists and artist profiles.",
    featured: false,
    category: "Music",
  },
  {
    id: 25,
    name: "GTA San Andreas",
    url: "https://hamiparsa.github.io/Gta-SanAndreas/",
    github: "https://github.com/HamiParsa/Gta-SanAndreas",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Gta-SanAndreas/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Gta-SanAndreas/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Gta-SanAndreas/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Gta-SanAndreas/main/pic4.png",
      "https://raw.githubusercontent.com/HamiParsa/Gta-SanAndreas/main/pic5.png",
      "https://raw.githubusercontent.com/HamiParsa/Gta-SanAndreas/main/pic6.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Fan site for GTA San Andreas with game info, mods, and community features.",
    featured: false,
    category: "Gaming",
  },
  {
    id: 26,
    name: "Rockstar Games",
    url: "https://hamiparsa.github.io/Rockstar-Games/",
    github: "https://github.com/HamiParsa/Rockstar-Games",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Rockstar-Games/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Rockstar-Games/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Rockstar-Games/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Rockstar-Games/main/pic4.png",
      "https://raw.githubusercontent.com/HamiParsa/Rockstar-Games/main/pic5.png",
      "https://raw.githubusercontent.com/HamiParsa/Rockstar-Games/main/pic6.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Fan tribute to Rockstar Games with game catalogs, news, and community.",
    featured: false,
    category: "Gaming",
  },
  {
    id: 27,
    name: "Tesla",
    url: "https://hamiparsa.github.io/Tesla/",
    github: "https://github.com/HamiParsa/Tesla",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Tesla/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Tesla/main/pic2.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Tesla-inspired website with vehicle configurator, specs, and test drive booking.",
    featured: false,
    category: "Automotive",
  },
  {
    id: 28,
    name: "Art The Clown",
    url: "https://hamiparsa.github.io/Art-The-Clown/",
    github: "https://github.com/HamiParsa/Art-The-Clown",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Art-The-Clown/main/pic1.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Horror-themed fan site dedicated to the character Art the Clown.",
    featured: false,
    category: "Fan Site",
  },
  {
    id: 29,
    name: "My Messenger",
    url: "https://hamiparsa.github.io/My-Messenger/",
    github: "https://github.com/HamiParsa/My-Messenger",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/My-Messenger/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/My-Messenger/main/pic2.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Real-time messaging app with chat rooms, user authentication, and emoji support.",
    featured: false,
    category: "Social Media",
  },
  {
    id: 30,
    name: "NewYork",
    url: "https://hamiparsa.github.io/NewYork/",
    github: "https://github.com/HamiParsa/NewYork",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/NewYork/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/NewYork/main/pic2.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Travel guide to New York City with attractions, maps, and insider tips.",
    featured: false,
    category: "Travel",
  },
  {
    id: 31,
    name: "Sexy-Arena",
    url: "https://hamiparsa.github.io/Sexy-Arena/",
    github: "https://github.com/HamiParsa/Sexy-Arena",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Sexy-Arena/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Sexy-Arena/main/pic2.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description: "Vibrant event venue website with booking and event listings.",
    featured: false,
    category: "Events",
  },
  {
    id: 32,
    name: "Los Angeles",
    url: "https://hamiparsa.github.io/Los-Angeles/",
    github: "https://github.com/HamiParsa/Los-Angeles",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Los-Angeles/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Los-Angeles/main/pic2.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Travel guide to Los Angeles with attractions, landmarks, and local favorites.",
    featured: false,
    category: "Travel",
  },
  {
    id: 33,
    name: "Mia & Kourosh",
    url: "https://hamiparsa.github.io/Mia-Kourosh/",
    github: "https://github.com/HamiParsa/Mia-Kourosh",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Mia-Kourosh/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Mia-Kourosh/main/pic2.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Personal portfolio website for a creative duo showcasing their work.",
    featured: false,
    category: "Portfolio",
  },
  {
    id: 34,
    name: "Keoxer",
    url: "https://hamiparsa.github.io/Keoxer/",
    github: "https://github.com/HamiParsa/Keoxer",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Keoxer/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Keoxer/main/pic2.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Modern SaaS landing page with interactive features and pricing plans.",
    featured: false,
    category: "SaaS",
  },
  {
    id: 35,
    name: "React&Next",
    url: "https://hamiparsa.github.io/React-Next/",
    github: "https://github.com/HamiParsa/React-Next",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/React-Next/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/React-Next/main/pic2.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Comprehensive guide and reference for React and Next.js with examples.",
    featured: false,
    category: "Education",
  },
  {
    id: 36,
    name: "TripletsCods Lab",
    url: "https://hamiparsa.github.io/TripletsCods-Lab/",
    github: "https://github.com/HamiParsa/TripletsCods-Lab",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/TripletsCods-Lab/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/TripletsCods-Lab/main/pic2.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Coding lab with tutorials and resources for developers of all levels.",
    featured: false,
    category: "Education",
  },
  {
    id: 37,
    name: "My Dream",
    url: "https://hamiparsa.github.io/My-Dream/",
    github: "https://github.com/HamiParsa/My-Dream",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/My-Dream/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/My-Dream/main/pic2.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Personal dream journal and vision board application with goal tracking.",
    featured: false,
    category: "Productivity",
  },
  {
    id: 38,
    name: "Animation-Universe",
    url: "https://hamiparsa.github.io/Animation-Universe/",
    github: "https://github.com/HamiParsa/Animation-Universe",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Animation-Universe/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Animation-Universe/main/pic2.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description: "Showcase of CSS and Framer Motion animations and effects.",
    featured: false,
    category: "Interactive",
  },
  {
    id: 39,
    name: "Game-Hub",
    url: "https://game-hub0.netlify.app/",
    github: "https://github.com/HamiParsa/Game-Hub",
    images: [
      "https://yourimageshare.com/ib/zd2D5E6xcr.png",
      "https://yourimageshare.com/ib/gz2qIRYYx4.png",
      "https://yourimageshare.com/ib/z4RluCshMk.png",
      "https://yourimageshare.com/ib/9slmPB9Wbg.png",
      "https://yourimageshare.com/ib/2Lpb9kTq4L.png",
      "https://yourimageshare.com/ib/aHF8oVrh4I.png",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    description:
      "Gaming platform with game discovery, reviews, community features, and more.",
    featured: true,
    category: "Gaming",
  },
];

// ============================================================
// GITHUB STARS
// ============================================================

function useGitHubStars(repoUrl) {
  const [stars, setStars] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!match) {
          setLoading(false);
          return;
        }
        const [, owner, repo] = match;
        const res = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`,
        );
        if (res.ok) {
          const data = await res.json();
          setStars(data.stargazers_count || 0);
        }
        setLoading(false);
      } catch {
        setLoading(false);
      }
    };
    fetchStars();
  }, [repoUrl]);

  return { stars, loading };
}

// ============================================================
// IMAGE SLIDER - WITH DRAG
// ============================================================

function ImageSlider({ images, projectName }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      nextImage();
    } else if (info.offset.x > threshold) {
      prevImage();
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div id="projects" className="relative w-full h-full overflow-hidden bg-[#0a0a0a]">
      <motion.div
        className="relative w-full h-full cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.3}
        onDragEnd={handleDragEnd}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={projectName || "Project image"}
            className="w-full h-full object-cover"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            draggable={false}
            onError={(e) => {
              e.target.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect width='800' height='600' fill='%231a1a1a'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='24' fill='%23444' text-anchor='middle'%3ENo Image%3C/text%3E%3C/svg%3E";
            }}
          />
        </AnimatePresence>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />

      {projectName && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-orange-400/20 text-orange-300 rounded-full text-xs font-bold border border-orange-400/30 backdrop-blur-sm">
          <FaStar size={12} /> Featured
        </div>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-6 bg-orange-400 shadow-lg shadow-orange-400/50"
                  : "w-1.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================
// PROJECT CARD
// ============================================================

function ProjectCard({ project, isFavorite, onToggleFavorite, cardRef }) {
  const [isHovered, setIsHovered] = useState(false);
  const { stars, loading } = useGitHubStars(project.github);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full mb-8 last:mb-0"
    >
      <div
        className={`relative bg-[#0d0d0d] rounded-3xl overflow-hidden border transition-all duration-500 ${
          isHovered
            ? "border-orange-400/30 shadow-2xl shadow-orange-400/5"
            : "border-white/5"
        }`}
      >
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="relative aspect-[16/9] lg:aspect-[16/10] overflow-hidden">
            <ImageSlider
              images={project.images}
              projectName={project.featured ? project.name : null}
            />
          </div>

          <div className="p-6 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-400 border border-white/5 mb-4">
                {project.category}
              </div>

              <h3 className="text-2xl lg:text-4xl font-bold text-white mb-3">
                {project.name}
              </h3>

              <p className="text-sm lg:text-base text-gray-400 leading-relaxed max-w-xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((techName) => (
                  <span
                    key={techName}
                    className="flex items-center gap-1 px-3 py-1.5 text-xs bg-white/5 text-gray-300 rounded-full border border-white/5"
                  >
                    {techIcons[techName] || (
                      <FaCircle className="text-gray-500 text-[8px]" />
                    )}
                    {techName}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-6 text-sm">
                  <button
                    onClick={() => onToggleFavorite(project.id)}
                    className={`flex items-center gap-1.5 transition-all ${
                      isFavorite
                        ? "text-orange-400"
                        : "text-gray-500 hover:text-white"
                    }`}
                  >
                    <FaHeart
                      className={isFavorite ? "fill-orange-400" : ""}
                      size={16}
                    />
                    {isFavorite ? "Liked" : "Like"}
                  </button>
                  <span className="flex items-center gap-1.5 text-orange-400">
                    <FaStar size={16} />
                    {loading ? (
                      <span className="animate-pulse">...</span>
                    ) : (
                      stars
                    )}
                  </span>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl transition-all ${
                      isHovered
                        ? "bg-orange-400/20 text-orange-300 border border-orange-400/30 shadow-lg shadow-orange-400/10"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    <FaGlobe size={14} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-bold rounded-xl transition-all"
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================
// MAIN
// ============================================================

export default function ProjectsShowcase() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [favorites, setFavorites] = useState([]);
  const projectsRef = useRef(null);
  const firstNewProjectRef = useRef(null);
  const prevVisibleCountRef = useRef(3);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id],
    );
  };

  const getFilteredProjects = () => {
    let base = allProjects;

    if (activeTab === "favorites") {
      base = base.filter((p) => favorites.includes(p.id));
    }

    if (searchTerm) {
      base = base.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    return base;
  };

  const filtered = getFilteredProjects();
  const visibleProjects = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const loadMore = () => {
    prevVisibleCountRef.current = visibleCount;
    setVisibleCount((prev) => prev + 3);

    setTimeout(() => {
      if (firstNewProjectRef.current) {
        const element = firstNewProjectRef.current;
        const offset = 80;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }, 300);
  };

  useEffect(() => {
    setVisibleCount(3);
    prevVisibleCountRef.current = 3;
  }, [searchTerm, activeTab]);

  const favoritesCount = favorites.length;

  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-orange-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-orange-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-orange-400/20" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-orange-400/20" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-orange-400/20" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-orange-400/20" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-400/10 rounded-full border border-orange-400/20 mb-4">
            <FaRocket className="w-4 h-4 text-orange-300" />
            <span className="text-xs font-medium text-orange-300 tracking-wider uppercase">
              Portfolio
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-3">
            My{" "}
            <span className="bg-gradient-to-r from-orange-300 to-orange-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 max-w-lg mx-auto mb-6">
            {filtered.length} projects built with modern technologies
          </p>

          <div className="flex items-center justify-center gap-3 mb-6">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === "all"
                  ? "bg-orange-400/20 text-orange-300 border border-orange-400/30"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab("favorites")}
              className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === "favorites"
                  ? "bg-orange-400/20 text-orange-300 border border-orange-400/30"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <FaHeart
                className={activeTab === "favorites" ? "fill-orange-300" : ""}
                size={14}
              />
              Favorites
              {favoritesCount > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-orange-400/20 text-orange-300 rounded-full text-[10px] font-bold">
                  {favoritesCount}
                </span>
              )}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <div className="relative w-full">
              <FaSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={14}
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-400/50 transition-colors"
              />
            </div>
          </div>
        </div>

        <div ref={projectsRef} className="space-y-8">
          {visibleProjects.length > 0 ? (
            visibleProjects.map((project, index) => {
              const isFirstNew = index === prevVisibleCountRef.current;
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isFavorite={favorites.includes(project.id)}
                  onToggleFavorite={toggleFavorite}
                  cardRef={isFirstNew ? firstNewProjectRef : null}
                />
              );
            })
          ) : (
            <div
              className="flex flex-col justify-center items-center text-center py-20 "
            >
              <div className="text-6xl mb-4">
                {activeTab === "favorites" ? (
                  <FaHeart className="text-red-400" size={40} />
                ) : (
                  <FaSearch className="text-gray-400" size={40} />
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {activeTab === "favorites"
                  ? "No favorites yet"
                  : "No projects found"}
              </h3>
              <p className="text-gray-400">
                {activeTab === "favorites"
                  ? "Start liking projects to see them here"
                  : "Try adjusting your search"}
              </p>
            </div>
          )}
        </div>

        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="px-8 py-3 bg-orange-400/20 text-orange-300 border border-orange-400/30 font-bold rounded-xl hover:bg-orange-400/30 transition-all duration-300"
            >
              Load More ({filtered.length - visibleCount} remaining)
            </button>
          </div>
        )}

        {!hasMore && filtered.length > 3 && (
          <div className="text-center mt-8 text-gray-500 text-sm">
            <FaCheck className="inline mr-1 text-green-400" size={14} /> All{" "}
            {filtered.length} projects loaded
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-16">
          {[
            {
              label: "Total Projects",
              value: allProjects.length,
              icon: <FaFolderOpen className="text-orange-300" size={18} />,
              desc: "All projects",
            },
            {
              label: "Featured",
              value: allProjects.filter((p) => p.featured).length,
              icon: <FaStar className="text-yellow-400" size={18} />,
              desc: "Top projects",
            },
            {
              label: "Tech Stack",
              value: "10+",
              icon: <FaReact className="text-cyan-400" size={18} />,
              desc: "Technologies",
            },
            {
              label: "Favorites",
              value: favoritesCount,
              icon: <FaHeart className="text-red-400" size={18} />,
              desc: "Liked projects",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/5 hover:border-orange-400/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                {stat.icon}
                <span className="text-2xl font-bold text-white">
                  {stat.value}
                </span>
              </div>
              <div className="text-xs font-medium text-gray-400">
                {stat.label}
              </div>
              <div className="text-[10px] text-gray-600">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
