import { useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";

function Dropdown({ label, children }) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center px-5 py-2 rounded-md font-medium text-gray-900 hover:bg-gray-100 transition focus:outline-none"
        aria-haspopup="true"
        aria-expanded={open}
        tabIndex={0}
      >
        {label}
        <svg
          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`absolute left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out z-50
        ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        role="menu"
        tabIndex={-1}
      >
        {children}
      </div>
    </li>
  );
}

export default function AnimatedNavbar() {
  return (
    <header className="bg-white w-full border-b border-gray-100 shadow-sm">
      <div className="mx-auto flex items-center justify-between px-10 py-5">
        {/* Brand - left */}
        <div className="flex items-center space-x-3 select-none">
          <SparklesIcon className="h-8 w-8 text-[#00B67A]" aria-hidden="true" />
          <span className="text-3xl font-extrabold tracking-tight text-gray-900">
            Whish
          </span>
        </div>
        {/* Menu - right */}
        <nav>
          <ul className="flex space-x-6 items-center font-semibold text-gray-900">
            <Dropdown label="Features">
              <ul className="grid grid-cols-1 gap-4">
                <li>
                  <span className="block font-semibold mb-1">
                    Collaborative Wishlists
                  </span>
                  <p className="text-sm text-gray-600">
                    Share with friends & family
                  </p>
                </li>
                <li>
                  <span className="block font-semibold mb-1">
                    Easy Claiming
                  </span>
                  <p className="text-sm text-gray-600">
                    Prevent duplicate gifts
                  </p>
                </li>
                <li>
                  <span className="block font-semibold mb-1">
                    Apple-inspired Design
                  </span>
                  <p className="text-sm text-gray-600">Minimal, modern UI</p>
                </li>
              </ul>
            </Dropdown>
            <Dropdown label="About">
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-[#00B67A] transition"
                  >
                    The Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-800 hover:text-[#00B67A] transition"
                  >
                    Our Story
                  </a>
                </li>
              </ul>
            </Dropdown>
            <li>
              <a
                href="#"
                className="px-5 py-2 rounded-md hover:bg-gray-100 transition font-semibold"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-6 py-2 rounded-full bg-gray-900 text-white font-semibold hover:bg-gray-800 transition"
              >
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
