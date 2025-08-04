// Example: src/App.jsx
import { SparklesIcon } from "@heroicons/react/24/solid";
// import Logo from "./components/Logo";
import AnimatedNavbar from "./components/AnimatedNavbar";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      {/* Navigation/Header */}
      <AnimatedNavbar />

      {/* Landing content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Whish
        </h1>
        <p className="text-md sm:text-xl mb-8 max-w-2xl leading-relaxed">
          A minimalist, elegant collaborative wishlist app for all your special
          moments.
        </p>
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
}
