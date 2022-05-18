import React from 'react'
import { motion } from 'framer-motion'
import AppWrap from '../wrapper/AppWrap'
import MotionWrap from '../wrapper/MotionWrap'
import { images } from '../constants'
import "./About.scss"

const abouts = [
  { title: "Web Development", description: "Learnt it from Wild Code School", imgUrl: images.about01},
  { title: "Frontend Development", description: "React.js / CSS / Javascript", imgUrl: images.about02},
  { title: "Backend Development", description: "Node.js / Express / MySQL", imgUrl: images.about03},
  // { title: "UX/UI Designer", description: "Accessibility is the idea", imgUrl: images.about04}
]

const About = () => {
  return (
    <>
      <h2 className="head-text">About <span>Me</span></h2><br/>
        <p className='p-text'>Long time interested in computers and tech, I finally took the jump to learn how to develop website following an intense training on Javascript, React.js and Node.js</p><br/>
        <p className='p-text'>I am ready to get new opportunities to build and learn more using my new coding skills, and all the ones I developped as a former Customer Success Manager in different industries, including Tech.</p><br/>
        <p className='p-text'>My main focus these days is building accessible, minimalist, animated products as well as improving my Backend Skills.</p>

      <div className="app__profiles">
        {abouts.map((about, index) =>(
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__whitebg"
);