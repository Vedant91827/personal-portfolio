import React,{useState} from 'react'
import "./Footer.scss";

import {images} from "../../constants"
import{ AppWrap , MotionWrap } from "../../Wrapper";
import { client } from "../../client";

const Footer = () => {
  const [formData, setFormData] = useState({name: "", email: "" ,message: ""});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message} =formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;

    setFormData({ ...formData, [name]: value});
  }

  const handleSubmit = () =>{
    setLoading(true);

    const contact = {
      _type: 'contact',
      // Destructured so no need to use formData.name of formData.email
      name: name,
      email: email,
      message: message
    }

    // Sanity to send data
    client.create(contact)
    .then(()=>{
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }



  return (
    <>
      <h2 className='head-text'> Contact Me </h2>
      <div className='app__footer-cards'>
        <div className='app__card'>
            <img src={images.email} alt="email" />
            <a href="mailto:vedant3927@gmail.com" className='p-text'>vedant3927@gmail.com</a>
        </div>
        <div className='app__card'>
            <img src={images.mobile} alt="email" />
            <a href="tel :vedant3927@gmail.com" className='p-text'>Mobile No</a>
        </div>
        <div className='app__card'>
            <img src={images.resume} alt="resume" />
            <a href="https://drive.google.com/drive/folders/1CI60Wqq0PTA7-WPZMoyzclyzwfsgXcI0?usp=sharing" target="_blank" rel="noreferrer" className='p-text' >Resume</a>
        </div>
      </div>

      {!isFormSubmitted ? 

      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input type="text" className='p-text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} required/>
        </div>
        <div className='app__flex'>
          <input type="text" className='p-text' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} required/>
        </div>
        <div >
            <textarea className='p-text' placeholder='Your Message' value={message} name="message" onChange={handleChangeInput} required/>
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading? "Sending ..." : "Send Message"}</button>
      </div>
      : <div>
          <h3 className='head-text'>Thank You for Getting in Touch</h3>
      </div>

      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)