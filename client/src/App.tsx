import React from "react";
import AnimatedNavbar from "./components/AnimatedNavbar";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const words = [
  { text: "A" },
  { text: "minimalist," },
  { text: "elegant" },
  { text: "collaborative" },
  { text: "wishlist" },
  { text: "app" },
  { text: "for" },
  { text: "all" },
  { text: "your" },
  { text: "special" },
  { text: "moments.", className: "text-purple-500" },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      {/* Navigation/Header */}
      <AnimatedNavbar />

      {/* Landing content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Whish
        </h1>
        {/* <p className="text-md sm:text-xl mb-8 max-w-2xl leading-relaxed"> */}
        <div></div>
        <TypewriterEffectSmooth words={words} />
        {/* </p> */}
        <button
          className="bg-gray-900 text-white px-9 py-3 rounded-full font-semibold shadow-sm hover:bg-gray-800 transition mb-4 fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Get Started
        </button>
      </main>

      {/* Footer */}
      <footer className="w-full px-8 py-6 border-t border-gray-200 text-gray-400 text-center text-sm font-light">
        © {new Date().getFullYear()} Whish. jupitersOrbeet Corporation. All
        rights reserved.
      </footer>
    </div>
  );
};

export default App;
