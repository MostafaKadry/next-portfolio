"use client"

import { useState } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"
import { ExternalLink, Star } from "lucide-react"
import projectsData from "@/data/projects.json"
import Image from "next/image"

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  }

  const imageVariants: Variants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  }

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
  ]

  const allProjects = [...projectsData.fullStackProjects, ...projectsData.frontendProjects]

  const filteredProjects = allProjects.filter((project) => {
    if (activeFilter === "all") return true
    return project.type === activeFilter
  })

  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
            My Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my work, from full-stack applications to frontend projects
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "bg-white/5 text-muted-foreground hover:text-foreground border border-white/10 hover:border-white/20"
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                whileHover="hover"
                className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <motion.div 
                  className="relative aspect-video overflow-hidden"
                  variants={imageVariants}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">{project.description.substring(0, 100)}...</p>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      <Star size={14} />
                      <span>Featured</span>
                    </div>
                  )}
                </motion.div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{project.title}</h3>
                      <p className="text-muted-foreground text-sm capitalize">{project.type}</p>
                    </div>
                    <span className="text-2xl p-2 rounded-lg bg-white/5">{project.icon}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-5 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-foreground border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
              
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-foreground hover:text-pink-400 transition-colors group"
                    >
                      <span className="text-sm group-hover:underline">Live Demo</span>
                      <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  )
}

export default ProjectsPage