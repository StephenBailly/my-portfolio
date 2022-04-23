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
  { title: "UX/UI Designer", description: "Accessibility is the idea", imgUrl: images.about04}
]

const About = () => {
  return (
    <>
      <h2 className="head-text">I Know That <span>Good Development</span> <br /> means <span>Good Business</span></h2>

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