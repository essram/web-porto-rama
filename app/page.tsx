"use client";
import "./globals.css";
import "flowbite";
import About from "../components/about/page";
import Navbar from "../components/navbar/page";
import Skill from "../components/skill/page";
import Contact from "../components/contact/page";
import Footer from "../components/footer/page";
import TechStack from "../components/techStack/page"
export default function Home() {
  return (
    <div className="bg-gray-800 h-full text-gray-500">
      <Navbar />
      <About />
      <Skill />
      <TechStack/>
      <Contact />
      <Footer />
    </div>
  );
}
