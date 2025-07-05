import React, { useState } from "react"
import icon from "../assets/images/icon.png"

export default function NavbarBasic() {
  const [isToggleOpen, setIsToggleOpen] = useState(false)

  return (
    <header className="relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
      <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <nav
          aria-label="main navigation"
          className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
        >
          {/* Brand logo and name */}
          <a
            aria-label="ChikanDhaaga logo"
            aria-current="page"
            className="flex items-center gap-3 py-3 text-xl font-bold text-gray-700 lg:flex-1"
            href="/"
            // style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {/* Thread spool embroidery-inspired logo */}
            <img src={icon} alt="Icon" width="50px" height="50px" />
            ChikanDhaaga
          </a>

          {/* Mobile hamburger toggle */}
          <button
            className={`relative order-10 block h-10 w-10 self-center lg:hidden ${
              isToggleOpen
                ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                : ""
            }`}
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            aria-expanded={isToggleOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
              <span className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
              <span className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"></span>
              <span className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
            </div>
          </button>

          {/* Navigation Links */}
          {/* <ul
            role="menubar"
            aria-label="Select page"
            className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-transparent lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100 ${
              isToggleOpen ? "visible opacity-100 backdrop-blur-sm" : "invisible opacity-0"
            }`}
          >
            <li role="none" className="flex items-stretch">
              <a
                role="menuitem"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:outline-none lg:px-8"
                href="#"
              >
                Home
              </a>
            </li>
            <li role="none" className="flex items-stretch">
              <a
                role="menuitem"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:outline-none lg:px-8"
                href="#"
              >
                Features
              </a>
            </li>
            <li role="none" className="flex items-stretch">
              <a
                role="menuitem"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:outline-none lg:px-8"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li role="none" className="flex items-stretch">
              <a
                role="menuitem"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:outline-none lg:px-8"
                href="#"
              >
                About
              </a>
            </li>
          </ul> */}
        </nav>
      </div>
    </header>
  )
}
