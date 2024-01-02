import React from 'react';// Eğer sayfalar arası geçiş yapacaksanız react-router-dom'u ekleyin
import valorant from '../images/valorant.png';
import homepagered from "../images/homepage-red.png";
import agentsred from "../images/agents-red.png";
import weaponsred from "../images/weapons-red.png";
import mapsred from "../images/maps-red.png";
import '../index.css';

export default function Header() {
    return (
        <>
            <section className='top-nav'>
                <div><img src={valorant} className='valorantimage' alt='x' /></div>
                <input id="menu-toggle" type="checkbox" />
                <label class='menu-button-container' for="menu-toggle">
                    <div class='menu-button'></div> </label>
                <ul className='menu'>
                    <li><a className='my-a' href='/'><img src={homepagered} className='pages-img' alt='x' /></a></li>
                    <li><a className='my-a' href='/agents'><img src={agentsred} className='pages-agents' alt='x' /></a></li>
                    <li><a className='my-a' href='/weapons'><img src={weaponsred} className='pages-img' alt='x' /></a></li>
                    <li><a className='my-a' href='/maps'><img src={mapsred} className='pages-map' alt='x' /></a></li>

                </ul>
            </section>
        </>
    );
};