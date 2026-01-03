'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/app/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-14 h-14 rounded-full flex items-center justify-center bg-dark-100 dark:bg-dark-100 bg-gray-200 border border-primary/20 hover:border-primary/50 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {/* Sun Icon (Light Mode) */}
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'light' ? 1 : 0,
          rotate: theme === 'light' ? 0 : 180,
          opacity: theme === 'light' ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Sun className="w-6 h-6 text-primary" />
      </motion.div>

      {/* Moon Icon (Dark Mode) */}
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'dark' ? 1 : 0,
          rotate: theme === 'dark' ? 0 : -180,
          opacity: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <Moon className="w-6 h-6 text-primary" />
      </motion.div>
    </motion.button>
  )
}
