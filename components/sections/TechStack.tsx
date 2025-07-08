"use client"

import { motion, Variants } from "framer-motion"
import { Code, Database, Server, GitBranch, Cpu, Layers } from "lucide-react"

const TechStack = () => {
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
      transition: { duration: 0.2 }
    }
  }

  const techItemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.05,
      }
    })
  }

  const techCategories = [
    {
      title: "ERP System",
      icon: <Server size={20} />,
      technologies: ["ERPNext", "Frappe"],
      color: "from-purple-600 to-blue-500",
      bgColor: "bg-gradient-to-br from-purple-600/10 to-blue-500/10",
    },
    {
      title: "Frontend",
      icon: <Code size={20} />,
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Bootsrap", "Material UI", "HTML5", "CSS3", "JS"],
      color: "from-pink-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-pink-500/10 to-purple-600/10",
    },
    {
      title: "Backend",
      icon: <Server size={20} />,
      technologies: ["Python", "Django","Flask","DRF", "Node.js", "Express", "Socket.io"],
      color: "from-purple-600 to-blue-500",
      bgColor: "bg-gradient-to-br from-purple-600/10 to-blue-500/10",
    },
    {
      title: "Database",
      icon: <Database size={20} />,
      technologies: ["MongoDB", "PostgreSQL", "Redis", "Mongoose", "MariaDB", "SQLite"],
      color: "from-blue-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-emerald-500/10",
    },
    {
      title: "DevOps & Tools",
      icon: <GitBranch size={20} />,
      technologies: ["Linux Bash Scripting","Git", "Docker", "Vercel", "Django-Celery"],
      color: "from-emerald-500 to-amber-500",
      bgColor: "bg-gradient-to-br from-emerald-500/10 to-amber-500/10",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden mt-24" id="tech-stack">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Cpu className="w-6 h-6 text-purple-500" />
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Tech Stack
            </h2>
            <Layers className="w-6 h-6 text-pink-500" />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {techCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover="hover"
              className={`rounded-xl p-6 border border-white/10 ${category.bgColor} backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mb-4 shadow-md`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, i) => (
                  <motion.div
                    key={tech}
                    custom={i}
                    variants={techItemVariants}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 text-foreground border border-white/10 backdrop-blur-sm"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack