import { motion } from 'framer-motion'
import ReactTooltip from "react-tooltip";
import AppWrap from '../wrapper/AppWrap'
import { images } from '../constants'
import MotionWrap from '../wrapper/MotionWrap';
import "./Skills.scss"

const skills = [
  { name: "React.js", bgColor: "#edf2f8", icon: images.react },
  { name: "Javascript", bgColor: "#edf2f8", icon: images.javascript },
  { name: "Node.js", bgColor: "#edf2f8", icon: images.node },
  { name: "CSS", bgColor: "#edf2f8", icon: images.css },
  { name: "SASS", bgColor: "#edf2f8", icon: images.sass },
  { name: "Git", bgColor: "#edf2f8", icon: images.git }
]

const experience = [
  { year: "2022", name: "Full stack Developer", company: "Elfenn Cosmétiques", description: "Full e-commerce website for a new cosmetic brand" },
  { year: "2022", name: "Front-end Developer", company: "Spered", description: "Business website for Compliance and Operation Advisor"}
]

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experience.map((work) => (
            <motion.div
              className="app__skills-exp-item"
              key={work.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{work.year}</p>
              </div>
              <motion.div
                className='app__skills-exp-works'>
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={work.name}
                    key={work.name}
                  >
                    <h4 className="bold-text">{work.name}</h4>
                    <p className='p-text'>{work.company}</p>
                  </motion.div>
                  <ReactTooltip
                    id={work.name}
                    effect="solid"
                    arrowColor='#fff'
                    className='skills-tooltip'
                  >
                    {work.description}
                  </ReactTooltip>
                </>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  "app__whitebg"
);