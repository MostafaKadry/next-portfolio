"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  url: string
  icon: string
  image: string
  technologies: string[]
  type: "fullstack" | "frontend"
  featured: boolean
}

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="text-2xl">{project.icon}</span>
        </div>
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">Featured</span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-gray-500 dark:text-gray-400">+{project.technologies.length - 3} more</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">{project.type} Project</span>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <span>Visit</span>
            <ExternalLink size={14} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
