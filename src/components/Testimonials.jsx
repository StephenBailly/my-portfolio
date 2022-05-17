import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import AppWrap from '../wrapper/AppWrap'
import MotionWrap from '../wrapper/MotionWrap'
import { images } from '../constants'
import "./Testimonials.scss"

const testimonials = []
  // { name: "Dzung Le", company: "Spered", desc: "", img: "" },
  // { name: "Agathe Le Bouëdec", company: "Elfenn Cosmétiques", desc: "", img: "" }
  


const brands = [
  { name: "Spered", img: `${images.spered}`},
  { name: "Elfenn Cosmétiques", img: `${images.elfennLogo}`}
  
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