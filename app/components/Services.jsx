import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"

const Services = () => {
  return (
    <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
    id='services' className='w-full py-10 px-[12%] scroll-mt-20'>
         <motion.h4 
            initial={{y:-20,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{ delay:0.3, duration:0.5}}
         className='text-center font-ovo text-lg mb-2'>What I Offer</motion.h4>
        <motion.h2
            initial={{y:-20,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{ delay:0.5, duration:0.5}}
        className='text-5xl font-ovo text-center'>My Services</motion.h2>
        <motion.p 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{ delay:0.7, duration:0.5}}
        className='text-center mx-auto mt-5 mb-12 font-ovo max-w-2xl'>I am a frontend developer from Nigeria, with 4+ years of experience in multiple tech establishments.</motion.p>
        <motion.div
          initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{ delay:0.9, duration:0.6}}
            className="grid grid-cols-auto gap-6 my-10">
            {serviceData.map((service, index)=>(
                <motion.div
                    whileHover={{scale:1.05}}
                key={index} className='border border-gray-500 px-8 py-12 rounded-lg 
                hover:shadow-offset-dark cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500
                dark:hover:bg-dark-hover dark:hover:shadow-white'>
                    <Image src={service.icon} className='w-10' alt='icon'/>
                    <h3 className='text-lg text-gray-700 my-4 dark:text-white'>{service.title}</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{service.description}</p>
                    <a href={service.link} className='flex items-center gap-2 mt-5 text-sm'>
                        Read More... <Image src={assets.right_arrow} alt='Arrow Right' className='w-4' />
                    </a>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services