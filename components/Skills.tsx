'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiFlask,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiVercel,
  SiFigma,
  SiFramer
} from 'react-icons/si'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000', darkColor: '#ffffff' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Flask', icon: SiFlask, color: '#000000', darkColor: '#ffffff' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, color: '#181717', darkColor: '#ffffff' },
    { name: 'Vercel', icon: SiVercel, color: '#000000', darkColor: '#ffffff' },
    { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50 dark:bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="bg-white dark:bg-dark p-6 rounded-xl border border-gray-200 dark:border-primary/20 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center group hover-lift"
            >
              <div className="dark:hidden">
                <skill.icon
                  className="w-12 h-12 mb-3 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,5,88,0.5)]"
                  style={{ color: skill.color }}
                />
              </div>
              <div className="hidden dark:block">
                <skill.icon
                  className="w-12 h-12 mb-3 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,5,88,0.5)]"
                  style={{ color: skill.darkColor || skill.color }}
                />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-dark p-8 rounded-xl border border-gray-200 dark:border-primary/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Always Learning</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              I'm constantly expanding my skillset and staying up-to-date with the latest web development 
              technologies. Currently focusing on advanced React patterns, Next.js optimization, and 
              exploring backend development with Python and Flask.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
