import React, { useRef, useState } from 'react';
import { images } from '../constants'
import AppWrap from '../wrapper/AppWrap'
import MotionWrap from '../wrapper/MotionWrap'
import emailjs from 'emailjs-com';
import "./Footer.scss"

export const Footer = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_i0g918q', 'template_lkk2e7u', form.current, 'user_EAD6PCPyiRjSkQ2LSqquB')
      .then((result) => {
        console.log(result.text);
        setLoading(false);
        setIsFormSubmitted(true);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <h2 className="head-text">Take a Coffee & Chat With Me</h2>

      <div className='app__footer-cards'>
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:stephen.bailly@gmail.com" className='p-text'>contact@stephenbailly.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +33 749840477" className='p-text'>Call Me</a>
        </div>
      </div>
      {!isFormSubmitted ?
        // <form ref={form} onSubmit={sendEmail}>
          <form className="app__footer-form app__flex" ref={form}>
            <div className="app__flex">
              <input type="text" className="p-text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} />
            </div>
            <div className="app__flex">
              <input type="email" className="p-text" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
            </div>
            <div>
              <textarea className='p-text' placeholder='Your Message' value={message} name='message' onChange={handleChangeInput} />
            </div>
            <button type="button" className='p-text' onClick={sendEmail}>{loading ? 'Sending' : 'Send Message'}</button>
          </form> 
        : <div><h3 className='head-text'>Thank you for getting in touch!</h3></div>}
    </>
  );
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)