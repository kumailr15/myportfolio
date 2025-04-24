"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Globe, Braces } from "lucide-react"

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />,
      skills: [
        { name: "C++", level: 85 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 90 },
        { name: "PHP", level: 85 },
      ],
    },
    {
      name: "Web Technologies",
      icon: <Globe className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "React JS", level: 85 },
        { name: "Bootstrap", level: 90 },
      ],
    },
    {
      name: "Backend & Databases",
      icon: <Database className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />,
      skills: [
        { name: "Node JS", level: 80 },
        { name: "Express", level: 75 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 85 },
      ],
    },
    {
      name: "Other Skills",
      icon: <Braces className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />,
      skills: [
        { name: "Data Structures", level: 90 },
        { name: "Algorithms", level: 85 },
        { name: "Problem-Solving", level: 90 },
        { name: "Git & GitHub", level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 scroll-mt-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Technical Skills</h2>
          <div className="mt-2 h-1 w-20 bg-emerald-600 dark:bg-emerald-500 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mr-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-emerald-600 dark:text-emerald-500">{skill.level}%</span>
                    </div>
                    <Progress
                      value={skill.level}
                      className="h-2"
                      indicatorClassName="bg-emerald-600 dark:bg-emerald-500"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills
