"use client"

import { motion } from "framer-motion"
import { Heart, Code, Coffee, ArrowUp } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <footer className="relative bg-gradient-to-b from-gray-50/50 to-gray-100 dark:from-gray-900/50 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 100 }}
          className=" flex flex-col items-center"
        >
          {/* Back to top button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="absolute top-4 right-4 mb-6 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="text-gray-600 dark:text-gray-300" />
          </motion.button>

          {/* Main footer content */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
            <div className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1.5">
              <Code size={16} className="text-purple-500" />
              <span>Built with</span>
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatDelay: 3 
                }}
                className="inline-flex"
              >
                <Heart size={16} className="text-red-500 fill-red-500/20" />
              </motion.span>
              <span>using Next.js & Tailwind CSS</span>
            </div>

            <div className="hidden md:block w-px h-5 bg-gray-300 dark:bg-gray-700"></div>

            <div className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
              <Coffee size={16} className="text-amber-500" />
              <span>Fueled by countless cups of coffee</span>
            </div>
          </div>

          {/* Copyright and links */}
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-500 flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span>&copy; {currentYear} Mostafa Kadry. All rights reserved.</span>
            <div className="hidden sm:block w-px h-4 bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex items-center gap-4">
              <Link 
                href="/privacy" 
                className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer