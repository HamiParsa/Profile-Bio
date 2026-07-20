"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGlobe,
  FaGithub,
  FaStar,
  FaEye,
  FaHeart,
  FaBookmark,
  FaSearch,
  FaCode,
  FaRocket,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

import { TbBrandRedux } from "react-icons/tb";

const projectsData = [
  {
    id: 1,
    name: "Fast Food Menu",
    url: "https://hamiparsa.github.io/Menu-Fast-Food/",
    github: "https://github.com/HamiParsa/Menu-Fast-Food",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Menu-Fast-Food/main/pic1.png",
      "https://github.com/HamiParsa/Menu-Fast-Food/raw/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Menu-Fast-Food/main/pic3.png",
      "https://github.com/HamiParsa/Menu-Fast-Food/raw/main/pic4.png",
      "https://github.com/HamiParsa/Menu-Fast-Food/raw/main/pic5.png",
    ],
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Zustand", icon: <TbBrandRedux className="text-purple-400" /> },
    ],
    description:
      "Modern fast food ordering interface with real-time cart management and seamless checkout experience.",
    featured: true,
    color: "#F59E0B",
    likes: 124,
    views: 1240,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Zustand", icon: <TbBrandRedux className="text-purple-400" /> },
    ],
    description:
      "Browse and discover movies with advanced filtering, search, and personalized recommendations.",
    featured: false,
    color: "#3B82F6",
    likes: 89,
    views: 890,
    category: "Entertainment",
  },
  {
    id: 3,
    name: "Game Zone",
    url: "https://stellular-salamander-2f94ef.netlify.app/",
    github: "https://github.com/HamiParsa/Game-Zone",
    images: [
      "https://github.com/HamiParsa/Game-Zone/raw/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Game-Zone/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Game-Zone/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Game-Zone/main/pic4.png",
    ],
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Collection of mini-games with sleek gaming interface and competitive leaderboards.",
    featured: false,
    color: "#8B5CF6",
    likes: 156,
    views: 1560,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Beautiful music player with playlist management and audio controls.",
    featured: false,
    color: "#EC4899",
    likes: 67,
    views: 670,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Zustand", icon: <TbBrandRedux className="text-purple-400" /> },
    ],
    description:
      "Comprehensive e-commerce platform with modern shopping experience and payment integration.",
    featured: true,
    color: "#10B981",
    likes: 203,
    views: 2030,
    category: "E-commerce",
  },
  {
    id: 6,
    name: "Coffee Shop",
    url: "https://hamiparsa.github.io/Coffee-Shop/",
    github: "https://github.com/HamiParsa/Coffee-Shop",
    images: [
      "https://github.com/HamiParsa/Coffee-Shop/raw/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Coffee-Shop/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Coffee-Shop/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Coffee-Shop/main/pic4.png",
    ],
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Cozy coffee shop website with menu browsing, ordering, and loyalty program.",
    featured: false,
    color: "#F59E0B",
    likes: 67,
    views: 670,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Interactive space exploration experience with stunning visuals and animations.",
    featured: false,
    color: "#7C3AED",
    likes: 92,
    views: 920,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Tribute page dedicated to Eminem with his music, biography, and discography.",
    featured: false,
    color: "#EF4444",
    likes: 78,
    views: 780,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Fan site for Teenage Mutant Ninja Turtles with character profiles and history.",
    featured: false,
    color: "#22C55E",
    likes: 112,
    views: 1120,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "High-performance networking dashboard with real-time analytics.",
    featured: false,
    color: "#06B6D4",
    likes: 134,
    views: 1340,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description: "Collaborative coding environment with live editing features.",
    featured: false,
    color: "#6366F1",
    likes: 98,
    views: 980,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Apple-inspired storefront with product browsing and seamless checkout.",
    featured: false,
    color: "#6B7280",
    likes: 134,
    views: 1340,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Mobile-first music player designed for phone screens with touch controls.",
    featured: false,
    color: "#EC4899",
    likes: 89,
    views: 890,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "Zustand", icon: <TbBrandRedux className="text-purple-400" /> },
    ],
    description:
      "Anime merchandise store with vibrant colorful design and exclusive collections.",
    featured: false,
    color: "#EC4899",
    likes: 145,
    views: 1450,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Lightweight JavaScript compiler with real-time code execution.",
    featured: false,
    color: "#F59E0B",
    likes: 78,
    views: 780,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Travel planning app with destination guides, itineraries, and booking integration.",
    featured: false,
    color: "#06B6D4",
    likes: 92,
    views: 920,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "YouTube clone with video browsing, playback, and channel features.",
    featured: false,
    color: "#EF4444",
    likes: 156,
    views: 1560,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Productivity task manager with drag-and-drop functionality and categories.",
    featured: false,
    color: "#8B5CF6",
    likes: 67,
    views: 670,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Restaurant website with menu browsing, reservation system, and online ordering.",
    featured: false,
    color: "#F59E0B",
    likes: 89,
    views: 890,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Second-hand marketplace for buying and selling used items with categories.",
    featured: false,
    color: "#6B7280",
    likes: 56,
    views: 560,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Instagram clone with photo sharing, feed, and story features.",
    featured: false,
    color: "#EC4899",
    likes: 167,
    views: 1670,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Gym and fitness website with workout plans, schedules, and progress tracking.",
    featured: false,
    color: "#EF4444",
    likes: 78,
    views: 780,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Luxury beauty brand website with product showcases and customer reviews.",
    featured: false,
    color: "#EC4899",
    likes: 112,
    views: 1120,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Music discovery platform with curated playlists and artist profiles.",
    featured: false,
    color: "#8B5CF6",
    likes: 145,
    views: 1450,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Fan site for GTA San Andreas with game info, mods, and community features.",
    featured: false,
    color: "#F59E0B",
    likes: 189,
    views: 1890,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Fan tribute to Rockstar Games with game catalogs, news, and community.",
    featured: false,
    color: "#EF4444",
    likes: 156,
    views: 1560,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Tesla-inspired website with vehicle configurator, specs, and test drive booking.",
    featured: false,
    color: "#EF4444",
    likes: 111,
    views: 1110,
    category: "Automotive",
  },
  {
    id: 28,
    name: "Art The Clown",
    url: "https://hamiparsa.github.io/Art-The-Clown/",
    github: "https://github.com/HamiParsa/Art-The-Clown",
    images: ["https://github.com/HamiParsa/Art-The-Clown/raw/main/pic1.png"],
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Horror-themed fan site dedicated to the character Art the Clown.",
    featured: false,
    color: "#EF4444",
    likes: 45,
    views: 450,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Real-time messaging app with chat rooms, user authentication, and emoji support.",
    featured: false,
    color: "#3B82F6",
    likes: 89,
    views: 890,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Travel guide to New York City with attractions, maps, and insider tips.",
    featured: false,
    color: "#06B6D4",
    likes: 78,
    views: 780,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description: "Vibrant event venue website with booking and event listings.",
    featured: false,
    color: "#EC4899",
    likes: 67,
    views: 670,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Travel guide to Los Angeles with attractions, landmarks, and local favorites.",
    featured: false,
    color: "#F59E0B",
    likes: 89,
    views: 890,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Personal portfolio website for a creative duo showcasing their work.",
    featured: false,
    color: "#EC4899",
    likes: 56,
    views: 560,
    category: "Portfolio",
  },
  {
    id: 34,
    name: "Keoxer",
    url: "https://hamiparsa.github.io/Keoxer/",
    github: "https://github.com/HamiParsa/Keoxer",
    images: [
      "https://github.com/HamiParsa/Keoxer/raw/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Keoxer/main/pic2.png",
    ],
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Modern SaaS landing page with interactive features and pricing plans.",
    featured: false,
    color: "#6366F1",
    likes: 78,
    views: 780,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Comprehensive guide and reference for React and Next.js with examples.",
    featured: false,
    color: "#06B6D4",
    likes: 134,
    views: 1340,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Coding lab with tutorials and resources for developers of all levels.",
    featured: false,
    color: "#8B5CF6",
    likes: 89,
    views: 890,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Personal dream journal and vision board application with goal tracking.",
    featured: false,
    color: "#EC4899",
    likes: 67,
    views: 670,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description: "Showcase of CSS and Framer Motion animations and effects.",
    featured: false,
    color: "#7C3AED",
    likes: 156,
    views: 1560,
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
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
    description:
      "Gaming platform with game discovery, reviews, community features, and more.",
    featured: true,
    color: "#8B5CF6",
    likes: 178,
    views: 1780,
    category: "Gaming",
  },
];

// Fast image loading helper component
function FastImage({ src, alt, className }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setHasError(true);
  }, [src]);

  if (hasError) {
    return (
      <div
        className={`${className} flex items-center justify-center bg-gray-900`}
      >
        <span className="text-2xl">🖼️</span>
      </div>
    );
  }

  return (
    <div id="projects" className="relative w-full h-full">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
          <div className="w-6 h-6 border-2 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        draggable={false}
        loading="eager"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

function ProjectCard({ project, index, searchTerm }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Preload next image
  useEffect(() => {
    if (project.images.length > 1) {
      const nextIndex = (currentImage + 1) % project.images.length;
      const img = new Image();
      img.src = project.images[nextIndex];
    }
  }, [currentImage, project.images]);

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  };

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    const threshold = 50;
    if (info.offset.x < -threshold) {
      nextImage();
    } else if (info.offset.x > threshold) {
      prevImage();
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  if (
    searchTerm &&
    !project.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !project.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !project.category.toLowerCase().includes(searchTerm.toLowerCase())
  ) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group h-full flex"
    >
      {/* ===== NEW CARD DESIGN ===== */}
      <div
        className={`relative flex flex-col justify-between w-full bg-[#0d0d0d] rounded-2xl border border-white/5 overflow-hidden transition-all duration-500 ${
          isHovered
            ? "border-white/20 shadow-2xl shadow-white/5 -translate-y-1"
            : "shadow-none"
        }`}
      >
        {/* Soft Hover Glow */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/5 via-transparent to-transparent" />
        )}

        {/* Featured Badge - Black & White */}
        {project.featured && (
          <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2 py-1 bg-white text-black rounded-full text-[10px] font-semibold">
            <FaStar size={8} />
            Featured
          </div>
        )}

        {/* Category Badge - Gray */}
        <div className="absolute top-3 left-3 z-20 px-2 py-1 bg-black/80 backdrop-blur-sm rounded-full text-[10px] text-gray-400 border border-white/5">
          {project.category}
        </div>

        {/* Image */}
        <div className="relative aspect-video bg-black/50 overflow-hidden cursor-grab active:cursor-grabbing">
          <motion.div
            className="w-full h-full"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            whileTap={{ cursor: "grabbing" }}
          >
            <AnimatePresence mode="wait">
              <FastImage
                key={currentImage}
                src={project.images[currentImage]}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </motion.div>

          {/* Drag Indicator */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isDragging ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-3 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-full text-[10px] text-white/70">
              <FaArrowLeft size={12} />
              Drag
              <FaArrowRight size={12} />
            </div>
          </motion.div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Navigation Buttons */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className={`absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/70 hover:bg-black/90 rounded-full text-white transition-all backdrop-blur-sm z-20 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <FaArrowLeft size={12} />
              </button>
              <button
                onClick={nextImage}
                className={`absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/70 hover:bg-black/90 rounded-full text-white transition-all backdrop-blur-sm z-20 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              >
                <FaArrowRight size={12} />
              </button>

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImage(i);
                    }}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === currentImage
                        ? "w-4 bg-white shadow-lg"
                        : "w-1.5 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-5 space-y-2.5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-sm font-bold text-white group-hover:text-gray-300 transition-colors">
              {project.name}
            </h3>
            <span className="text-[10px] text-gray-600 font-mono">
              #{String(project.id).padStart(2, "0")}
            </span>
          </div>

          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 min-h-[2rem]">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech.name}
                className="flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-medium bg-white/5 text-gray-400 rounded-full border border-white/5"
              >
                <span className="text-[10px]">{tech.icon}</span>
                {tech.name}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-1.5 py-0.5 text-[10px] text-gray-600">
                +{project.tech.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Bottom stats and action buttons container */}
        <div className="p-5 pt-0 space-y-2.5">
          {/* Stats */}
          <div className="flex items-center justify-between pt-2 border-t border-white/5">
            <div className="flex items-center gap-3 text-[10px] text-gray-500">
              <span
                className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLiked(!isLiked);
                }}
              >
                <FaHeart
                  className={`${isLiked ? "text-white fill-white" : ""} transition-colors`}
                  size={10}
                />
                {project.likes + (isLiked ? 1 : 0)}
              </span>
              <span className="flex items-center gap-1">
                <FaEye size={10} />
                {project.views}
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsBookmarked(!isBookmarked);
              }}
              className="p-1 hover:bg-white/5 rounded transition-colors"
            >
              <FaBookmark
                className={`${isBookmarked ? "text-white" : "text-gray-600"} transition-colors`}
                size={11}
              />
            </button>
          </div>

          {/* Buttons */}
          <div className="flex gap-1.5 pt-1">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 text-[10px] font-medium rounded-lg transition-all duration-300 ${
                isHovered
                  ? "bg-white text-black scale-105 shadow-lg shadow-white/20"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <FaGlobe size={10} />
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-2.5 py-1.5 text-[10px] rounded-lg transition-all duration-300 flex items-center justify-center ${
                isHovered
                  ? "text-black bg-white border border-white/10 scale-105"
                  : "text-gray-500 bg-white/5 hover:bg-white/10 hover:text-white"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub size={13} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsShowcase() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const filteredProjects = useMemo(() => {
    if (!searchTerm) return projectsData;
    return projectsData.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen bg-[#0a0a0a]">
      {/* ====== SIMPLE BLACK & GRAY ====== */}

      {/* Grid - Soft Gray */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Center Lines - Soft */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/10" />
      </div>

      {/* Corner Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-white/15" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-white/15" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-white/15" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-white/15" />
      </div>

      {/* Soft Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-3">
            <FaRocket className="text-indigo-400 text-xs" />
            <span className="text-[10px] font-medium text-indigo-400">
              Portfolio
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-1">
            Projects
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              .
            </span>
          </h2>

          <p className="text-xs text-gray-400">
            <span className="text-white font-semibold">
              {filteredProjects.length}
            </span>{" "}
            projects built with modern tech
          </p>

          {/* Search */}
          <div className="max-w-sm mx-auto mt-4">
            <div
              className={`relative transition-all duration-300 ${isSearchFocused ? "scale-105" : ""}`}
            >
              <div className="relative flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-indigo-500/50 focus-within:border-indigo-500/50 focus-within:shadow-lg focus-within:shadow-indigo-500/10">
                <FaSearch className="absolute left-3 text-gray-500 text-xs" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTitleOrDescription(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full pl-8 pr-10 py-2.5 bg-transparent text-white placeholder-gray-500 focus:outline-none text-sm"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 text-gray-500 hover:text-white transition-colors text-xs"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid with items-stretch for uniform height while keeping compact design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                searchTerm={searchTerm}
              />
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <div className="text-3xl mb-2">🔍</div>
              <h3 className="text-lg font-bold text-white mb-1">
                No projects found
              </h3>
              <p className="text-xs text-gray-400">Try adjusting your search</p>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-2 max-w-2xl mx-auto">
          {[
            {
              label: "Projects",
              value: projectsData.length,
              icon: <FaCode className="text-indigo-400" />,
            },
            {
              label: "Tech Stack",
              value: "10+",
              icon: <FaReact className="text-cyan-400" />,
            },
            {
              label: "Featured",
              value: projectsData.filter((p) => p.featured).length,
              icon: <FaStar className="text-yellow-400" />,
            },
            {
              label: "Likes",
              value: projectsData.reduce((acc, p) => acc + p.likes, 0),
              icon: <FaHeart className="text-red-400" />,
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-2.5 bg-white/5 rounded-lg border border-white/5 hover:border-indigo-500/20 transition-all duration-300"
            >
              <div className="text-lg font-bold text-white">{stat.value}</div>
              <div className="text-[10px] text-gray-500 flex items-center justify-center gap-1">
                {stat.icon}
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
