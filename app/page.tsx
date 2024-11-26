'use client'
import Image from "next/image";
import Hero from "../components/home/Hero"
import About from "../components/home/About"
import Skills from "../components/home/Skills"
import Projects from "@/components/home/Projects";
export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Skills/>
      <Projects/>
    </main>
  );
}
