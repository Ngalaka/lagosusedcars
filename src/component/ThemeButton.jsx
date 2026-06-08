"use client";
import { MdDarkMode } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa6";



import { useTheme } from "@/context/ThemeContext";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="border px-4 py-2 rounded"
    >
      {theme === "light"
        ? <span><MdDarkMode /></span>
        : <span><FaRegLightbulb /></span>}
    </button>
  );
}