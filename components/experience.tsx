"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, BookOpen } from "lucide-react"

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-16 scroll-mt-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Experience</h2>
          <div className="mt-2 h-1 w-20 bg-emerald-600 dark:bg-emerald-500 rounded"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="mb-8 overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="absolute top-0 left-0 w-2 h-full bg-emerald-600 dark:bg-emerald-500"></div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="mr-4 p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                    <Code2 className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">Core And Advance DSA</CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-400">GeeksforGeeks - a learning platform</p>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">May 2023 - July 2023</div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-emerald-600 dark:text-emerald-500">•</span>
                  <span>Worked on DSA Core concepts such as Arrays, LinkedList, Stack etc.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-emerald-600 dark:text-emerald-500">•</span>
                  <span>
                    Gained hands-on experience with Advanced DSA Algorithms like DFS, BFS, Kadane's Algorithm, Prim's
                    Algorithm.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-emerald-600 dark:text-emerald-500">•</span>
                  <span>Applied best practices in problem solving, version control using Git, and code reviews.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex justify-center my-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
              </div>
              <div className="mt-2 text-center">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Ready for New Opportunities</h3>
                <p className="text-gray-600 dark:text-gray-400">Looking for internships and collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
