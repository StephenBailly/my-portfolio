import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import AppWrap from '../wrapper/AppWrap'
import MotionWrap from '../wrapper/MotionWrap'
import { images } from '../constants'
import "./Testimonials.scss"

const testimonials = [
  { name: "Nia Nacci", company: "Spotify", desc: "Stephen has the biggest cock I've ever seen", img: "https://www.trendycow.net/wp-content/uploads/2021/11/Nia-Nacci_2.jpg" },
  { name: "Frantzline Civil", company: "Amazon", desc: "Li gen yon gwo zozo", img: `${images.FC}` }
]

const brands = [
  { name: "Spotify", img: `${images.spotify}`},
  { name: "Amazon", img: `${images.amazon}`}
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  const feedback = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={feedback.img} alt={feedback.name} />
            <div className="app__testimonial-content">
              <p className="p-text">{feedback.desc}</p>
              <div>
                <h4 className="bold-text">{feedback.name}</h4>
                <h5 className="p-text">{feedback.company}</h5>
              </div>
            </div>
          </div>
          <div className='app__testimonial-btns app__flex'>
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>
            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <img src={brand.img} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Testimonials, 'app__testimonial'),
  'testimonials',
  "app__primarybg"
);