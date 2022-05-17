import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { images } from '../constants';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
        <a href="https://github.com/StephenBailly" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/stephen-bailly-601809105/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
        <div>
            <a href="https://www.malt.fr/profile/stephenbailly" target="_blank" rel="noreferrer"><img src={images.maltLogo} alt="email" /></a>
        </div>
    </div>
  )
}

export default SocialMedia