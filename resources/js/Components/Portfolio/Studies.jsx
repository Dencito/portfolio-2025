import React from 'react'
import { motion } from 'framer-motion';
import { Head } from '@inertiajs/react';
import { Skills } from './Skills';

export const Studies = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 1 }}
      transition={{ duration: 0.6 }} id='about-me' className="scroll-div w-full lg:w-2/3 rounded-lg flex flex-col gap-5  p-5 py-10 bg-darkLite overflow-auto">
      <Head title="Estudios y Habilidades - Denar Padilla Gutierrez" />
      <h2 className='text-2xl font-normal text-white'>Habilidades <span className='text-pinkAccent'>tecnicas💻</span></h2>
      <Skills/>

    </motion.div>
  )
}
