'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Compo1 from './Compo1'

const FooterMobile = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      className='fixed bottom-0 z-50 w-full'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Compo1 string={'CALL 718-218-7572'} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Compo1 string={'RESERVATIONS'} />
      </motion.div>
      <motion.div variants={itemVariants}>
        <Compo1 string={'EMAIL SIGNUP'} />
      </motion.div>
    </motion.div>
  )
}

export default FooterMobile
