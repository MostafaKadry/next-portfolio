"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Menu, X, Github, FileText, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div whileHover={{ scale: 1.05 }} className="text-xl font-bold text-gray-900 dark:text-white">
              MK
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                  />
                )}
              </Link>
            ))}

            {/* External Links */}
            <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-gray-200 dark:border-gray-700">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/MostafaKadry/MostafaKadry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://drive.google.com/file/d/13BJojw_r_rOz2CAd3Tfd6xDRwVZ-QrAC/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FileText size={20} />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0 }} className="md:hidden overflow-hidden">
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4 px-3 py-2">
              <a
                href="https://github.com/MostafaKadry/MostafaKadry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://drive.google.com/file/d/13BJojw_r_rOz2CAd3Tfd6xDRwVZ-QrAC/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300"
              >
                <FileText size={20} />
              </a>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-gray-700 dark:text-gray-300"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar
