"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-16 scroll-mt-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-emerald-600 dark:bg-emerald-500 rounded"></div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 max-w-3xl mx-auto">
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I'm Kumail Raza, a Computer Science Engineering student at Lovely Professional University with a passion for
            web development and data structures & algorithms. I'm currently focused on building responsive web
            applications and improving my problem-solving skills.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
            With experience in PHP, JavaScript, and various web technologies, I enjoy creating efficient solutions to
            complex problems. My training in DSA from GeeksforGeeks has strengthened my analytical thinking and coding
            practices.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mt-4">
            I'm constantly learning and expanding my skillset to stay current with industry trends and best practices.
            I'm particularly interested in full-stack development and creating user-friendly applications.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
              <p className="text-gray-600 dark:text-gray-400">Meerut, Uttar Pradesh, India</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">kumailr15@gmail.com</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
              <p className="text-gray-600 dark:text-gray-400">+91 9219751786</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white">Study</h3>
              <p className="text-gray-600 dark:text-gray-400">Lovely Professional University</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
