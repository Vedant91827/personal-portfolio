import React from 'react'
import {motion} from "framer-motion";

import {images} from '../../constants'

import {AppWrap} from '../../Wrapper';

import "./Header.scss";

const scaleVariants ={
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}

function Header() {
  return (
    <div  className='app__header app__flex'>

      <motion.div
        whileInView={{x: [-100,0], opacity:[0,1]}}
        transition={{duration: 0.5}}
        className="app__header-info"
      >
      <div className='app__header-badge'>

        <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{marginLeft: 20}}>
            <p className='p-text'>Hello I am</p>
            <h1 className='head-text'>Vedant</h1>
            </div>
        </div>


        <div className='tag-cmp app_flex'>
        <p className='p-text'>Full Stack Web Developer</p>
        <p className='p-text'>And Engineering Student</p>
        </div>

      </div>
      </motion.div>

      <motion.div
        whileInView={{opacity:[0,1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className="app__header-img"
        >
        <img id='gray' src={images.profile} alt="profile_bg" />  
        <motion.img
          whileInView={{opacity:[0,1]}}
          transition={{duration: 1, ease: "easeInOut"}}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        >
        </motion.img>
      </motion.div>
    
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {/* Here add floating bubbles with various icons */}
        {[images.react,images.node, images.git].map((circle,index)=>
          (<div className='circle-cmp app__flex' key={'circle-'+{index}}>
            <img src={circle} alt="circle" />
          </div>)
        )}
        
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');
//you see first parameter in AppWrap was component and second was idName