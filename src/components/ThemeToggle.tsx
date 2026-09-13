"use client";

import React from "react";
import { useTheme } from "./ThemeContext";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  showLabel?: boolean;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  showLabel = false,
  className = "",
}) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? "Switch to Day Mode (Light)" : "Switch to Night Mode (Dark)"}
      title={isDark ? "Switch to Day Mode" : "Switch to Night Mode"}
      className={`inline-flex items-center gap-2 p-2 sm:px-3 sm:py-2 rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500 ${
        isDark
          ? "bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700 hover:text-amber-300"
          : "bg-slate-100 border-slate-200/90 text-slate-700 hover:bg-sky-50 hover:text-sky-700"
      } ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 shrink-0 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 shrink-0 transition-transform hover:-rotate-12 text-slate-600" />
      )}
      {showLabel && (
        <span className="text-xs font-semibold">
          {isDark ? "Day Mode" : "Night Mode"}
        </span>
      )}
    </button>
  );
};
