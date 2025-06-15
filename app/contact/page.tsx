"use client"

import { useState } from "react"
import { motion, Variants, AnimatePresence } from "framer-motion"
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -3,
      transition: { duration: 0.2 }
    }
  }

  const formItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <main className="min-h-screen bg-background pt-24 pb-20 relative overflow-hidden">
      {/* Decorative background elements */}
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
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="rounded-xl p-6 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white`}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Email</p>
                    <a
                      href="mailto:mostafakadry806@gmail.com"
                      className="text-foreground hover:text-purple-400 transition-colors font-medium"
                    >
                      mostafakadry806@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white`}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Location</p>
                    <p className="text-foreground font-medium">Cairo, Egypt</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white`}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Phone & Whatsapp</p>
                    <a
                      href="tel:+201012345678"
                      className="text-foreground hover:text-purple-400 transition-colors font-medium"
                    >
                      +20 1009158274
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="rounded-xl p-6 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm shadow-lg"
            >
              <h2 className="text-2xl font-semibold text-foreground mb-6">Social Media</h2>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/MostafaKadry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/5 text-foreground hover:text-purple-400 transition-colors border border-white/10"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/mostafa-kadry-040440169/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/5 text-foreground hover:text-purple-400 transition-colors border border-white/10"
                >
                  <Linkedin size={24} />
                </motion.a>

              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="rounded-xl p-6 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm shadow-lg"
          >
            
            <p className="text-xs font-medium px-2 py-1 rounded bg-red-100 text-red-700 inline-flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-1.5 animate-pulse"></span>
              Temporarily disabled
            </p>
            <h2 className="text-2xl font-semibold text-foreground my-6">Send Me a Message</h2>

            <div className="space-y-5">
              <motion.div variants={formItemVariants} custom={0}>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all outline-none"
                />
              </motion.div>

              <motion.div variants={formItemVariants} custom={1}>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all outline-none"
                />
              </motion.div>

              <motion.div variants={formItemVariants} custom={2}>
                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all outline-none"
                />
              </motion.div>

              <motion.div variants={formItemVariants} custom={3}>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-all outline-none resize-none"
                ></textarea>
              </motion.div>

              <motion.div variants={formItemVariants} custom={4} className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${isSubmitting
                      ? "bg-purple-500/50 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl"
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </motion.div>

              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-500 text-sm"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-sm"
                  >
                    Something went wrong. Please try again later.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.form>
        </div>
      </div>
    </main>
  )
}

export default ContactPage