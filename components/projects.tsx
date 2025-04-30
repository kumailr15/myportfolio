"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "Student Record Management System",
      description: "A comprehensive system for managing student information, grades, attendance, and personal details.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      points: [
        "Developed a Student Record Management System using PHP and MySQL, enabling efficient management of student information, including grades, attendance, and personal details.",
        "Implemented secure authentication and authorization, ensuring access control for different user roles (admin, teacher, student), improving data security and user experience.",
        "Integrated advanced querying capabilities to retrieve and update student records quickly, reducing administrative workload and enhancing system efficiency by 40%.",
      ],
      github: "https://github.com/kumailr15/student-record-ms",
      period: "Sept 2024 - Oct 2024",
      image: "/srms.jpg",
    },
    {
      title: "Operating System Scheduler",
      description: "A simulation tool for visualizing CPU scheduling algorithms for educational purposes.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      points: [
        "Developed a CPU scheduling algorithm simulation resulting in a 70% improvement in visualizing task scheduling efficiency for educational purposes compared to static code examples.",
        "Enhanced the user interface using HTML5 and CSS3, creating a dynamic and responsive design that led to a 50% increase in user engagement during demos.",
        "Optimized JavaScript performance to handle real-time scheduling simulations, achieving a 30% reduction in processing time for large datasets, allowing the tool to simulate up to 100 processes without lag.",
      ],
      github: "https://github.com/kumailr15/Scheduling_algo_simulator",
      live: "https://algorithm-simulation.vercel.app/", 
      period: "June 2024 - July 2024",
      image: "/algo.jpg",
    },
  ]

  return (
    <section id="projects" className="py-16 scroll-mt-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Projects</h2>
          <div className="mt-2 h-1 w-20 bg-emerald-600 dark:bg-emerald-500 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border-gray-200 dark:border-gray-700">
             

                 <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  /> 
                  <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs px-2 py-1 m-2 rounded">
                    {project.period}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    {project.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-emerald-600 dark:text-emerald-500">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.live && (
                      <Button
                        asChild
                        size="sm"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-500 dark:hover:bg-emerald-600"
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-500 dark:hover:bg-gray-800"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
