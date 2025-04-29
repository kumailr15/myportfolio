"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import { motion } from "framer-motion"

const Hero = () => {
  const [typedText, setTypedText] = useState("")
  const fullText = "Computer Science Engineer"
  const typingSpeed = 100

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, typingSpeed)

      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-6 order-2 md:order-1"
        >
          <div>
            <h2 className="text-lg md:text-xl font-medium text-emerald-600 dark:text-emerald-500">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mt-2">
              Kumail Raza
            </h1>
            <div className="h-8 mt-3">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-lg">
            A passionate developer focused on creating efficient and elegant solutions. Currently studying at Lovely
            Professional University.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <a href="">My Story</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-500 dark:hover:bg-gray-800"
            >
              <a href="/Kumail_cv.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Resume
              </a>
            </Button>
          </div>

          <div className="flex space-x-4 pt-2">
            <a
              href="https://github.com/kumailr15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kumailraza28/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:kumailr15@gmail.com"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center order-1 md:order-2"
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-emerald-600/20 dark:bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-emerald-100 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl w-full h-full flex items-center justify-center">
              <img 
                src="/pic.jpg" 
                alt="Your Image"
                className="w-full h-full object-contain object-center rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
