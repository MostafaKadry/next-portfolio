"use client"

import { motion, Variants } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import projectsData from "@/data/projects.json"

const ProjectsSection = () => {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  }

  return (
    <section className="py-24 relative" id="projects">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work and personal projects
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {projectsData.fullStackProjects
            .filter((project) => project.featured)
            .map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover="hover"
                className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
                <motion.div 
                  className="relative aspect-video overflow-hidden"
                  variants={imageVariants}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">{project.description.substring(0, 100)}...</p>
                  </div>
                </motion.div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4 gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{project.title}</h3>
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
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection