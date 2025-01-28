import React, { useState } from 'react';
import './home.css';
import './fonts.css';

export default function Home() {

    return (
        <div id='home-root'>
            <div id='home-wrapper'>
                <img id='logo' src="images/iteration-1-images/logo.svg" alt="logo" />
                <span className='plain-text satisfy-regular'>KOD ACIKTIRIR</span>
                <span className='plain-text satisfy-regular'>PİZZA, DOYURUR</span>
                <button className='home-btn'>ACIKTIM</button>
            </div>
        </div>
    )
} 