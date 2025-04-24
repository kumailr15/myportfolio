"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, School } from "lucide-react"

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const educationData = [
    {
      institution: "Lovely Professional University",
      degree: "Computer Science and Engineering",
      period: "2023 - 2026",
      location: "Jalandhar, Punjab",
      grade: "CGPA: 8.10",
      icon: <GraduationCap className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />,
    },
    {
      institution: "Meerut Public School",
      degree: "12th with Science",
      period: "2019 - 2020",
      location: "Meerut, Uttar Pradesh",
      grade: "Percentage: 97%",
      icon: <School className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />,
    },
    {
      institution: "Meerut Public School",
      degree: "10th with Science",
      period: "2017 - 2018",
      location: "Meerut, Uttar Pradesh",
      grade: "Percentage: 88%",
      icon: <School className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />,
    },
  ]

  return (
    <section id="education" className="py-16 scroll-mt-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Education</h2>
          <div className="mt-2 h-1 w-20 bg-emerald-600 dark:bg-emerald-500 rounded"></div>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-emerald-200 dark:bg-emerald-900/50"></div>

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} mb-12`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-4 border-emerald-600 dark:border-emerald-500 z-10"></div>

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-0 md:pr-12" : "md:pl-12 md:pr-0"} pl-12`}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mr-3">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.institution}</h3>
                  </div>

                  <p className="text-emerald-600 dark:text-emerald-500 font-medium mb-2">{item.degree}</p>

                  <div className="flex flex-wrap justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>{item.period}</span>
                    <span>{item.location}</span>
                  </div>

                  <div className="mt-3 inline-block bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 px-3 py-1 rounded-full text-sm">
                    {item.grade}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Education
