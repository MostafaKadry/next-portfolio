"use client"

import { motion, Variants } from "framer-motion"
import { ArrowDown, Github, FileText, Mail } from "lucide-react"
import Link from "next/link"

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-background pt-16 relative overflow-hidden"
      style={{ position: 'relative' }}
    >
      <img
        src="/hero-bg.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          {/* Profile Image Placeholder */}
          <motion.div
            variants={itemVariants}
            className="relative mx-auto w-32 h-32 rounded-full bg-gradient-to-r from-[#ff0080] to-[#7928ca] flex items-center justify-center text-white text-4xl font-bold shadow-xl overflow-hidden"
          >
            <img
              src="/mostafa-kadry.png"
              alt="Mostafa Kadry"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
              Mostafa{" "}
              <span className="bg-gradient-to-r from-[#ff0080] to-[#7928ca] bg-clip-text text-transparent">Kadry</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">Full Stack Developer</h2>
            <h3 className="text-lg text-muted-foreground font-medium">Python | ERPNext | Django | React</h3>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I build modern web applications with a focus on user experience and clean code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#ff0080] to-[#7928ca] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <FileText size={20} />
              <span>View Projects</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 text-foreground px-6 py-3 rounded-lg font-medium hover:bg-white/20 dark:hover:bg-black/20 transition-colors"
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </Link>
            <a
              href="https://github.com/MostafaKadry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 text-foreground px-6 py-3 rounded-lg font-medium hover:bg-white/20 dark:hover:bg-black/20 transition-colors"

            >
              <Github size={24} />
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
