import {
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiJavascript,
  SiFigma,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";


export default function TechStackPage() {
  return (
    <div>
  {/* Tech Stack Section */}
  <section className="bg-gradient-to-br from-gray-900 to-gray-950 h-screen px-6 sm:px-10 md:px-20 lg:px-36 relative overflow-hidden flex flex-col justify-center">
    {/* Background Radial Glow */}
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent blur-3xl pointer-events-none" />

    <div>
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="uppercase text-sm tracking-widest text-blue-400 font-semibold">
          Tech Stack
        </h2>
        <h3 className="text-white text-4xl font-bold mt-2">
          Tools I Master Every Day
        </h3>
        <p className="text-gray-400 mt-2 text-sm">
          The powerful stack I use to build modern and scalable web applications
        </p>
      </div>

      {/* Icon Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-white text-4xl justify-center items-center">
        {[
          { icon: <SiHtml5 className="text-orange-500" />, label: "HTML5" },
          { icon: <SiCss3 className="text-blue-500" />, label: "CSS3" },
          { icon: <SiTailwindcss className="text-cyan-400" />, label: "Tailwind" },
          { icon: <SiReact className="text-blue-500" />, label: "React" },
          { icon: <SiNextdotjs className="text-white" />, label: "Next.js" },
          { icon: <SiJavascript className="text-yellow-400" />, label: "JavaScript" },
          { icon: <SiTypescript className="text-blue-400" />, label: "TypeScript" },
          { icon: <SiNodedotjs className="text-green-500" />, label: "Node.js" },
          { icon: <SiExpress className="text-gray-300" />, label: "Express" },
          { icon: <SiFigma className="text-pink-400" />, label: "Figma" },
        ].map(({ icon, label }, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:scale-105 hover:border-blue-500 transition-transform duration-300 shadow-md group"
          >
            <div className="mb-2 group-hover:scale-110 transition">
              {icon}
            </div>
            <span className="text-xs text-gray-300 mt-1">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>

  );
}
