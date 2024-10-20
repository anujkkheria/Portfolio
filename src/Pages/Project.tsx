import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Tours from '../assets/Tours-sample.jpg'
import { SwipeableDrawer } from '@mui/material'
import BDremainder from '../assets/BDremainder.jpg'
import ProjectAccordion from '../Components/ProjectAccordion'

const Puller = () => {
  return (
    <div className='w-8 h-2 rounded mx-auto my-2 border-2 bg-slate-400 '>
      {' '}
      -{' '}
    </div>
  )
}

const isMobile = window.screen.width < 640
const Project: React.FC = () => {
  const Projects = [
    {
      name: 'Tours',
      Catagory: 'Front-End',
      img: Tours,
      desc: '',
      links: 'https://sample-tours.netlify.app/',
      technologiesused: '',
    },
    {
      name: 'Birthday-Remainder',
      Catagory: 'Front-End',
      img: BDremainder,
      desc: '',
      link: 'https://anuj-birthday-reminder.netlify.app/',
      technologiesused: '',
    },
  ]
  const [isDrawerOpen, toggleDrawer] = useState(false)
  const [currProject, setCurrProject] = useState(Projects[0])

  return (
    <div className='m-10 flex flex-col sm:flex-row gap-5'>
      <div className='w-full h-full sm:w-1/2 flex flex-col gap-4'>
        <div className='w-full h-1/2'>
          <img src={currProject.img} alt='' className='w-15 h-15' />
        </div>
        <ProjectAccordion header={'Description'} detail={currProject.desc} />
        <ProjectAccordion
          header={'Technology Used'}
          detail={currProject.technologiesused}
        />
      </div>
      {isMobile && (
        <SwipeableDrawer
          onOpen={() => toggleDrawer(true)}
          onClose={() => toggleDrawer(false)}
          open={isDrawerOpen}
          swipeAreaWidth={56}
          anchor='bottom'
          keepMounted={true}
          PaperProps={{
            sx: {
              height: 'calc(50% - 56px)',
              overflow: 'visible',
            },
          }}
        >
          <div className='absolute -top-[60px] bg-white w-full border-2 visible right-0 left-0 border-t-2 rounded-t-lg'>
            <Puller />
            <h1 className='m-2 '>Projects Table </h1>
          </div>
          <div className='w-full h-full'>
            <motion.div
              className='w-full border border-y-2 border-b-black flex justify-around mb-4 py-3'
              initial={{ translateY: 100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <span className='w-10 text-center'>sno</span>
              <span className='w-20 text-center'>preview</span>
              <span className='w-20 text-center'>name</span>
              <span className='w-20 text-center'>Catagory</span>
            </motion.div>
            {Projects.map((project, i) => {
              return (
                <motion.div
                  className='w-full h-1/4 border border-y-2 border-y-black flex justify-around  items-center mb-4 py-3'
                  initial={{ translateY: 100, opacity: 0 }}
                  animate={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.5 }}
                  onClick={() => setCurrProject({ ...project })}
                >
                  <span className='w-10 text-center'>{i + 1}</span>
                  <span className='w-20 h-20 flex items-center'>
                    <img src={project.img} alt='' className='w-15 h-10' />
                  </span>
                  <span className='w-20 text-center'>{project.name}</span>
                  <span>{project.Catagory}</span>
                </motion.div>
              )
            })}
          </div>
        </SwipeableDrawer>
      )}
      <div className='w-1/2 h-full hidden sm:block'>
        <motion.div
          className='w-full border border-y-2 border-y-black flex justify-around mb-4 py-3'
          initial={{ translateY: 100, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <span>sno</span>
          <span>preview</span>
          <span>name</span>
          <span>Catagory</span>
        </motion.div>
        {Projects.map((project, i) => {
          return (
            <motion.div
              className='w-full h-1/4 border border-y-2 border-y-black flex justify-around  items-center mb-4 py-3'
              initial={{ translateY: 100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.5 }}
              onClick={() => setCurrProject({ ...project })}
            >
              <span>{i + 1}</span>
              <span className='w-20 h-20 flex items-center'>
                <img src={project.img} alt='' className='w-20 h-20' />
              </span>
              <span className='items-center w-20'>{project.name}</span>
              <span>{project.Catagory}</span>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Project
