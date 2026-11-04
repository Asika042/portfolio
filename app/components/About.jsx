import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}

    id='About' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h4 
           initial={{opacity:0, y:-20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.5, delay:0.3}}
        className='text-center font-ovo text-lg mb-2'>Introduction</motion.h4>
        <motion.h2
            initial={{opacity:0, y:-20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.5, delay:0.3}}
        className='text-5xl font-ovo text-center'>About Me</motion.h2>
        <motion.div
             initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.8}}
        className='flex w-full flex-col lg:flex-row my-20 gap-20 items-stretch'>
            <motion.div
             initial={{opacity:0, scale:0.9}}
            whileInView={{opacity:1, scale:1}}
            transition={{duration:0.6}}
            className='w-64 rounded-3xl sm:w-80 max-w-none'>
                <Image src={ assets.user_image} alt='user image' className='w-full h-full object-cover rounded-3xl' />
            </motion.div>
            <motion.div 
             initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6, delay:0.8}}
            className='flex-1'>
    <p className='font-ovo max-w-2xl mb-10'>
  Hi, I'm Chukwumaije, a full-stack developer passionate about building
  practical, user-friendly web applications with Next.js, TypeScript, and
  Node.js. I've built projects like a car rental platform, a hospital
  appointment system, a grocery delivery website, and a show booking
  platform, each one helping me sharpen my skills in authentication, file
  uploads, and database-driven features. I'm eager to grow, learn from a
  team, and turn real-world problems into clean, reliable software.
</p>
<motion.ul 
     initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.8, delay:1}}
className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
    {infoList.map((item, index)=>(
        <motion.li 
        whileInView={{scale:1.05}}
        key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
         hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-offset-dark
          dark:border-white dark:hover:shadow-white dark:hover:bg-dark-hover/50'>
            <Image src={ isDarkMode?item.iconDark : item.icon} alt={item.title} className='w-7 mt-3' />
            <h3 className='my-4 text-gray-700 font-semibold dark:text-white'>{item.title}</h3>
            <p className='text-sm text-gray-600 dark:text-white/80'>{item.description}</p>
        </motion.li>
    ))}
</motion.ul>

    <motion.h4
            initial={{y:20,opacity:0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.5, delay:1.3}}
            className='my-6 font-ovo text-gray-700 dark:text-white/80'>Tools I Use</motion.h4>
        <motion.ul
            initial={{opacity:0}}
            whileInView={{ opacity:1}}
            transition={{duration:0.6, delay:1.5}}
            className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index)=>(
                <motion.li 
                whileHover={{scale:1.1}}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square
                border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 
                duration-50' key={index}>
                    <Image src={tool} alt='Tool' className=' w-5 sm:w-7' />
                </motion.li>
            ))}
        </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About