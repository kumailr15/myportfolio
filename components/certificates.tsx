"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink } from "lucide-react"

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certificatesData = [
    {
      title: "Data Structures and Algorithms",
      issuer: "GeeksforGeeks",
      date: "September 2024",
      link: "#",
      icon: <Award className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />,
    },
    {
      title: "Building Web Applications in PHP",
      issuer: "Coursera",
      date: "March 2024",
      link: "#",
      icon: <Award className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />,
    },
    {
      title: "HTML, CSS, and JavaScript for Web Developers",
      issuer: "Coursera",
      date: "May 2024",
      link: "#",
      icon: <Award className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />,
    },
  ]

  return (
    <section id="certificates" className="py-16 scroll-mt-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Certificates</h2>
          <div className="mt-2 h-1 w-20 bg-emerald-600 dark:bg-emerald-500 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificatesData.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-gray-200 dark:border-gray-700">
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mr-3">{certificate.icon}</div>
                    <CardTitle className="text-lg text-gray-900 dark:text-white">{certificate.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>{certificate.issuer}</span>
                    <span>{certificate.date}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-500 dark:text-emerald-500 dark:hover:bg-gray-800"
                  >
                    <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> View Certificate
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Certificates
