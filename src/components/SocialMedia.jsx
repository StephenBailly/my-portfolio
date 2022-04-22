import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
        <a href="https://github.com/StephenBailly" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/stephen-bailly-601809105/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
    </div>
  )
}

export default SocialMedia