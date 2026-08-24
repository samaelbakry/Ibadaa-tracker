import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineBookOpen,
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineMenuAlt2,
  HiOutlineX,
} from "react-icons/hi";
import { useTheme } from "../hooks/useTheme";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { path: "/home", label: "Home", arabicLabel: "الرئيسية", icon: HiOutlineHome },
    { path: "/quran", label: "Holy Quran", arabicLabel: "القرآن الكريم", icon: HiOutlineBookOpen },
    { path: "/morningadhkar", label: "Morning Adhkar", arabicLabel: "أذكار الصباح", icon: HiOutlineSun },
    { path: "/eveningadhkar", label: "Evening Adhkar", arabicLabel: "أذكار المساء", icon: HiOutlineMoon },
  ];

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          type="button"
          onClick={toggleSidebar}
          aria-label="Toggle Navigation Menu"
          className="p-3 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-amber-500/20 dark:border-slate-800 text-amber-900 dark:text-amber-200 shadow-lg active:scale-95 transition-all"
        >
          {isOpen ? <HiOutlineX className="text-2xl" /> : <HiOutlineMenuAlt2 className="text-2xl" />}
        </button>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-xs lg:hidden transition-opacity"
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-72 p-5 bg-white/70 dark:bg-slate-900/80 backdrop-blur-2xl border-r border-amber-500/10 dark:border-slate-800 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        }`}
      >
        <div className="space-y-6">
          <div className="flex items-center gap-3 px-3 py-2 border-b border-amber-500/10 dark:border-slate-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20 dark:border-amber-400/20 flex items-center justify-center text-amber-700 dark:text-amber-300 font-serif font-bold text-xl">
             I
            </div>
            <div>
              <h2 className="font-serif font-bold text-lg text-amber-950 dark:text-amber-100 leading-tight">
               Ibadaa
              </h2>
              <span className="text-[11px] font-medium text-amber-800/60 dark:text-slate-400">
                Quran & Adhkar
              </span>
            </div>
          </div>

          <nav className="space-y-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-2xl font-medium transition-all duration-200 group ${
                      isActive
                        ? "bg-amber-500/15 dark:bg-amber-400/15 text-amber-900 dark:text-amber-200 font-bold border border-amber-500/20 dark:border-amber-400/20 shadow-xs"
                        : "text-amber-900/70 dark:text-slate-400 hover:bg-amber-500/5 dark:hover:bg-slate-800/60 hover:text-amber-900 dark:hover:text-amber-200"
                    }`
                  }
                >
                  <div className="flex items-center gap-3">
                    <Icon className="text-xl shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{link.label}</span>
                  </div>
                  <span className="font-serif text-xs opacity-75">{link.arabicLabel}</span>
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="pt-4 border-t border-amber-500/10 dark:border-slate-800">
          <button
            type="button"
            onClick={toggleTheme}
            className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-amber-500/5 dark:bg-slate-800/50 border border-amber-500/10 dark:border-slate-700/50 text-amber-900 dark:text-amber-200 hover:bg-amber-500/10 dark:hover:bg-slate-800 transition-all cursor-pointer"
          >
            <span className="text-xs font-semibold">Theme Mode</span>
            <div className="flex items-center gap-2">
              <span className="text-xs capitalize font-mono text-amber-800/60 dark:text-slate-400">
                {theme}
              </span>
              {theme === "dark" ? (
                <HiOutlineSun className="text-lg text-amber-400" />
              ) : (
                <HiOutlineMoon className="text-lg text-amber-700" />
              )}
            </div>
          </button>
        </div>
      </aside>
    </>
  );
}