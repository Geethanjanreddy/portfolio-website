'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Palette, Rocket } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Modern Design',
      description: 'Creating beautiful UIs with Tailwind CSS and modern aesthetics'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Fast Performance',
      description: 'Building optimized applications with Next.js and React'
    }
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-50 dark:bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              I'm Geethanjanreddy, a <span className="text-primary">Junior Frontend Developer</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
              Graduated with a B.Tech in Computer Science and Engineering (AI & ML) from Kalasalingam University, Tamil Nadu. I'm passionate about creating 
              beautiful, user-friendly web applications that solve real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
              I specialize in React, Next.js, TypeScript, and Tailwind CSS. I love transforming ideas into 
              interactive, responsive websites with clean code and modern design principles.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              When I'm not coding, I'm learning new technologies, contributing to open source, or working 
              on personal projects to sharpen my skills.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              Let's Connect
            </motion.a>
          </motion.div>

          {/* Right side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white dark:bg-dark p-6 rounded-xl border border-gray-200 dark:border-primary/20 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover-lift"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-primary">{feature.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
