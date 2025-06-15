"use client"

import { motion, Variants } from "framer-motion"
import { Mail, MapPin, Phone, MessageCircle, Linkedin, Github, Send, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const ContactSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 0.5
      },
    },
    hover: {
      y: -3,
      transition: { duration: 0.2 }
    }
  }

  const contactMethods = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Me",
      value: "mostafakadry806@gmail.com",
      href: "mailto:mostafakadry806@gmail.com",
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Cairo, Egypt",
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Me",
      value: "+20 1009158274",
      href: "tel:+201009158274",
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/MostafaKadry",
      color: "hover:bg-gray-800"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mostafa-kadry-040440169/",
      color: "hover:bg-blue-600"
    }
  ]

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
            >
              Let's Connect
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
            >
              Whether you have a project in mind or just want to chat about tech, I'm always open to interesting conversations.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="bg-background border border-muted rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`${method.color} w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4`}>
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1">{method.title}</h3>
                {method.href ? (
                  <a 
                    href={method.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{method.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} w-12 h-12 rounded-full bg-muted flex items-center justify-center text-foreground transition-colors`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <Link href="/contact">
              <Button 
                size="lg" 
                className="group px-8 py-6 text-lg font-medium"
              >
                <span className="mr-3">Send a Message</span>
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-rotate-12" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection