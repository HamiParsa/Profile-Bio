"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaArrowLeft, FaArrowRight, FaGlobe } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { MdMonitorHeart } from "react-icons/md";

// Project data with metadata: name, URL, images, and technologies used
const projectsData = [
  {
    name: "Fast Food Menu",
    url: "https://hamiparsa.github.io/Menu-Fast-Food/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Menu-Fast-Food/main/pic1.png",
      "https://github.com/HamiParsa/Menu-Fast-Food/raw/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Menu-Fast-Food/main/pic3.png",
      "https://github.com/HamiParsa/Menu-Fast-Food/raw/main/pic4.png",
      "https://github.com/HamiParsa/Menu-Fast-Food/raw/main/pic5.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Zustand",
        icon: <TbBrandRedux className="text-purple-600 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Movies",
    url: "https://imaginative-granita-28d88b.netlify.app/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Movie/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Movie/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Movie/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Movie/main/pic4.png",
      "https://raw.githubusercontent.com/HamiParsa/Movie/main/pic5.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Zustand",
        icon: <TbBrandRedux className="text-purple-600 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Game Zone",
    url: "https://68ed02f96988f880c055bca2--stellular-salamander-2f94ef.netlify.app/",
    images: [
      "https://github.com/HamiParsa/Game-Zone/raw/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Game-Zone/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Game-Zone/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Game-Zone/main/pic4.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Music Player",
    url: "https://hamiparsa.github.io/Music-Player/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Music-Player/main/pic1.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Kouman",
    url: "https://68f35fa594d264c6ff4b4366--brilliant-brioche-644fbd.netlify.app/",
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
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Zustand",
        icon: <TbBrandRedux className="text-purple-600 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Coffee Shop",
    url: "https://hamiparsa.github.io/Coffee-Shop/",
    images: [
      "https://github.com/HamiParsa/Coffee-Shop/raw/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Coffee-Shop/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Coffee-Shop/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Coffee-Shop/main/pic4.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Galaxy",
    url: "https://hamiparsa.github.io/Galaxy/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Galaxy/main/pic1.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Eminem",
    url: "https://hamiparsa.github.io/Eminem/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Eminem/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Eminem/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Eminem/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Eminem/main/pic4.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "TMNT",
    url: "https://hamiparsa.github.io/TMNT/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/TMNT/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/TMNT/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/TMNT/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/TMNT/main/pic4.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Hyper Net",
    url: "https://hamiparsa.github.io/Hyper-Net/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Hyper-Net/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Hyper-Net/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Hyper-Net/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Hyper-Net/main/pic4.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Code Space",
    url: "https://hamiparsa.github.io/Code-Space/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Code-Space/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Code-Space/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Code-Space/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Code-Space/main/pic4.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Apple Store",
    url: "https://glittering-cajeta-1c0bb2.netlify.app/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Apple-Store/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Apple-Store/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Apple-Store/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Apple-Store/main/pic4.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Phone Music Player",
    url: "https://hamiparsa.github.io/Phone-Music-Player/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Phone-Music-Player/main/pic1.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Anime Shop",
    url: "https://68d824c2fcc42fb40adc4396--spiffy-kringle-0e26e5.netlify.app/",
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
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Zustand",
        icon: <TbBrandRedux className="text-purple-600 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Js Compiler",
    url: "https://github.com/HamiParsa/Js-Compiler",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Js-Compiler/main/pic1.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Travel Mate",
    url: "https://hamiparsa.github.io/Travel-Mate/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Travel-Mate/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Travel-Mate/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Travel-Mate/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Travel-Mate/main/pic4.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Youtube",
    url: "https://68dd0ea5d5bc2569c7ec0a2c--lighthearted-tarsier-75bef8.netlify.app/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Youtube/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Youtube/main/pic2.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Task List",
    url: "https://hamiparsa.github.io/Task-List/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Task-List/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Task-List/main/pic2.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "My Restaurant",
    url: "https://hamiparsa.github.io/My-Restaurant/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/My-Restaurant/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/My-Restaurant/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/My-Restaurant/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/My-Restaurant/main/pic4.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Second Hand Shop",
    url: "https://68e275dd8eb29772d65fdb15--delightful-wisp-111a27.netlify.app/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Second-Hand-Shop/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Second-Hand-Shop/main/pic2.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Instagram",
    url: "https://hamiparsa.github.io/Instagram/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Instagram/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Instagram/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Instagram/main/pic3.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Iron Zone",
    url: "https://hamiparsa.github.io/Iron-Zone/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Iron-Zone/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Iron-Zone/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Iron-Zone/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Iron-Zone/main/pic4.png",
      "https://raw.githubusercontent.com/HamiParsa/Iron-Zone/main/pic5.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Luxury Beauty ",
    url: "https://hamiparsa.github.io/Luxury-Beauty/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Luxury-Beauty/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Luxury-Beauty/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Luxury-Beauty/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Luxury-Beauty/main/pic4.png",
      "https://raw.githubusercontent.com/HamiParsa/Luxury-Beauty/main/pic5.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Melody Hub",
    url: "https://hamiparsa.github.io/Melody-Hub/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Melody-Hub/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Melody-Hub/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Melody-Hub/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Melody-Hub/main/pic4.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "GTA San Andreas",
    url: "https://hamiparsa.github.io/Gta-SanAndreas/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Gta-SanAndreas/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Gta-SanAndreas/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Gta-SanAndreas/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Gta-SanAndreas/main/pic4.png",
      "https://raw.githubusercontent.com/HamiParsa/Gta-SanAndreas/main/pic5.png",
      "https://raw.githubusercontent.com/HamiParsa/Gta-SanAndreas/main/pic6.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Rockstar Games",
    url: "https://hamiparsa.github.io/Rockstar-Games/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Rockstar-Games/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Rockstar-Games/main/pic2.png",
      "https://raw.githubusercontent.com/HamiParsa/Rockstar-Games/main/pic3.png",
      "https://raw.githubusercontent.com/HamiParsa/Rockstar-Games/main/pic4.png",
      "https://raw.githubusercontent.com/HamiParsa/Rockstar-Games/main/pic5.png",
      "https://raw.githubusercontent.com/HamiParsa/Rockstar-Games/main/pic6.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Tesla",
    url: "https://hamiparsa.github.io/Tesla/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Tesla/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Tesla/main/pic2.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Art The Clown",
    url: "https://hamiparsa.github.io/Art-The-Clown/",
    images: ["https://github.com/HamiParsa/Art-The-Clown/raw/main/pic1.png"],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "My Messenger",
    url: "https://hamiparsa.github.io/My-Messenger/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/My-Messenger/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/My-Messenger/main/pic2.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "MamanPaz",
    url: "https://mamanpaz47.ir/",
    images: [
      "https://yourimageshare.com/ib/9q6Nc8J62T.png",
      "https://yourimageshare.com/ib/RGe9D01vKg.png",
      "https://yourimageshare.com/ib/t3SfNTD9HN.png",
      "https://yourimageshare.com/ib/tSPK7Bec0B.png",
      "https://yourimageshare.com/ib/haMSN0T1yD.png",
      "https://yourimageshare.com/ib/PCCTkmyMET.png",
      "https://yourimageshare.com/ib/kCRSvfc89Q.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Zustand",
        icon: <TbBrandRedux className="text-purple-600 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "NewYork",
    url: "https://hamiparsa.github.io/NewYork/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/NewYork/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/NewYork/main/pic2.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Sexy-Arena",
    url: "https://hamiparsa.github.io/Sexy-Arena/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Sexy-Arena/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Sexy-Arena/main/pic2.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Los Angeles",
    url: "https://hamiparsa.github.io/Los-Angeles/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Los-Angeles/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Los-Angeles/main/pic2.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Mia & Kourosh",
    url: "https://hamiparsa.github.io/Mia-Kourosh/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/Mia-Kourosh/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Mia-Kourosh/main/pic2.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "Keoxer",
    url: "https://hamiparsa.github.io/Keoxer/",
    images: [
      "https://github.com/HamiParsa/Keoxer/raw/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/Keoxer/main/pic2.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "React&Next",
    url: "https://hamiparsa.github.io/React-Next/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/React-Next/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/React-Next/main/pic2.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
  {
    name: "React&Next",
    url: "https://hamiparsa.github.io/React-Next/",
    images: [
      "https://raw.githubusercontent.com/HamiParsa/React-Next/main/pic1.png",
      "https://raw.githubusercontent.com/HamiParsa/React-Next/main/pic2.png",
    ],
    tech: [
      {
        name: "React",
        icon: <FaReact className="text-sky-400 text-2xl sm:text-3xl" />,
      },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-white text-2xl sm:text-3xl" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-500 text-2xl sm:text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-2xl sm:text-3xl" />,
      },
    ],
  },
];

// Component for individual project slider
function ProjectSlider({ project }) {
  const [current, setCurrent] = useState(0); // Current image index

  // Navigate to previous image with looping
  const prev = () =>
    setCurrent((i) => (i - 1 + project.images.length) % project.images.length);

  // Navigate to next image with looping
  const next = () => setCurrent((i) => (i + 1) % project.images.length);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
      {/* Left Panel: Project Title, Tech Stack, and View Link */}
      <div className="w-full lg:w-1/3 flex flex-col gap-4 sm:gap-6">
        {/* Project Name with Neon Gradient */}
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-x">
          {project.name}
        </h3>

        {/* Technologies Used */}
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {project.tech.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-900/30 backdrop-blur-md shadow-lg hover:scale-110 transition-all hover:shadow-pink-500/50"
            >
              {t.icon}
              <span className="text-sm sm:text-base">{t.name}</span>
            </div>
          ))}
        </div>

        {/* View Website Button */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:scale-105 hover:shadow-2xl transition-all font-semibold text-white text-sm sm:text-base"
        >
          <FaGlobe /> View Website
        </a>
      </div>

      {/* Right Panel: Image Slider */}
      <div className="w-full lg:w-2/3 relative rounded-2xl overflow-hidden shadow-2xl bg-black/40 backdrop-blur-md">
        <AnimatePresence initial={false} mode="wait">
          {/* Current Image with slide-in/out animation */}
          <motion.div
            key={current}
            className="relative w-full h-[240px] sm:h-[320px] lg:h-[480px] cursor-grab"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.4 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, info) => {
              if (info.offset.x < -100) next();
              if (info.offset.x > 100) prev();
            }}
          >
            <img
              src={project.images[current]}
              alt={`${project.name} screenshot ${current + 1}`}
              className="w-full h-full object-cover rounded-2xl pointer-events-none shadow-2xl"
            />
          </motion.div>
        </AnimatePresence>

        {/* Previous Button */}
        <button
          onClick={prev}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-black bg-white/70 hover:bg-pink-500/80 hover:text-white transition-all shadow-xl"
        >
          <FaArrowLeft />
        </button>

        {/* Next Button */}
        <button
          onClick={next}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-black bg-white/70 hover:bg-purple-500/80 hover:text-white transition-all shadow-xl"
        >
          <FaArrowRight />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
          {project.images.map((_, i) => (
            <div
              key={i}
              className={`transition-all duration-500 ${
                i === current
                  ? "w-5 sm:w-6 h-2 sm:h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-glow"
                  : "w-2 h-2 rounded-full bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Neon gradient animation for titles */
        @keyframes gradient-x {
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
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }

        /* Glow effect for active dot */
        .shadow-glow {
          box-shadow: 0 0 10px rgba(255, 0, 150, 0.6),
            0 0 20px rgba(255, 0, 200, 0.4);
        }
      `}</style>
    </div>
  );
}

// Main Component rendering all projects
export default function ProjectsShowcase() {
  return (
    <main
      id="projects"
      className="mt-[100px] min-h-screen p-4 sm:p-6 lg:p-8 space-y-12 sm:space-y-16 lg:space-y-20 text-white relative overflow-hidden"
    >
      {/* Neon Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute w-72 h-72 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000 top-60 right-20"></div>
        <div className="absolute w-80 h-80 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000 bottom-20 left-1/2 transform -translate-x-1/2"></div>
      </div>

      {/* Section Title with Neon Heart */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold flex justify-center items-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-x tracking-wider drop-shadow-[0_0_10px_rgb(236,72,153)]">
        Projects Made with Love
        <MdMonitorHeart className="ml-2 mt-1 text-red-400 animate-pulse text-3xl drop-shadow-lg" />
      </h2>

      {/* Render all projects with scroll animation */}
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16 lg:gap-20">
        {projectsData.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
            className="p-4 sm:p-6 lg:p-8 rounded-3xl backdrop-blur-md bg-gradient-to-r from-white/5 via-white/10 to-white/5 border border-white/10 shadow-xl transition-all duration-500"
          >
            <ProjectSlider project={p} />
          </motion.div>
        ))}

        <hr
          className="my-10 h-1 w-full border-0 rounded-full 
                bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 
                shadow-[0_0_15px_rgba(236,72,153,0.7),0_0_30px_rgba(236,72,153,0.5)]
                animate-pulse"
        />
      </div>

      {/* Neon Glow Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_0%,_transparent_70%)]"></div>
    </main>
  );
}
