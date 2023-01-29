import React, { Component } from 'react';
import {NavigationDots , SocialMedia} from '../components';

//HOC : Higher order components to wrapp other component b/w them

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia/>
        <div className='app__wrapper app__flex'>
            <Component/> { /*this will be componect we pass */}
            <div className='copyright'>
                <p className='p-text'>© by Vedant More</p>
                <p className='p-text'>All rights reserved</p>
            </div>
        </div>
        <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap;