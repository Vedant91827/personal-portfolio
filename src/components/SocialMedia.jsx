import React from 'react';
import {BsTwitter, BsInstagram, BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

function SocialMedia() {
  return (
    <div className='app__social'>
        <div>
        <a href="https://www.linkedin.com/in/vedant-more-722a23201/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        </div>
        <div>
          <a href="https://www.instagram.com/the.unreal.vedant/" target="_blank" rel="noreferrer"><BsInstagram/></a>
        </div>
        <div>
          <a href="https://github.com/Vedant91827" target="_blank" rel="noreferrer"><FaGithub/></a>
        </div>
        <div>
        <a href="/https://twitter.com/Vedant3927" target="_blank" rel="noreferrer"><BsTwitter/></a>
        </div>
    </div>
  )
}

export default SocialMedia