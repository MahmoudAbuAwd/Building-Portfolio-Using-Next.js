"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      className="block sm:hidden fixed left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 origin-left z-50"
      style={{ 
        scaleX, 
        opacity: isVisible ? 1 : 0,
        top: '350px' // Position it under the CreativeHero (mobile height is 350px)
      }}
      transition={{ opacity: { duration: 0.3 } }}
    />
  )
}