import React from 'react';// Eğer sayfalar arası geçiş yapacaksanız react-router-dom'u ekleyin
import valorant from '../images/valorant.png';
import homepagered from "../images/homepage-red.png";
import agentsred from "../images/agents-red.png";
import weaponsred from "../images/weapons-red.png";
import { Link } from 'react-router-dom';
import '../index.css';
import Agents from './Agents';
import Headroom from 'react-headroom';

export default function Header() {
    return (
        <>
            <Headroom>
                <header className='top-nav'>
                    <div><img src={valorant} className='valorantimage' alt='x' /></div>
                    <input id="menu-toggle" type="checkbox" />
                    <label class='menu-button-container' for="menu-toggle">
                        <div class='menu-button'></div> </label>
                    <ul className='menu'>
                        <li><a className='my-a' href='/'></a></li>
                        <li><Link to={'/'}><img src={homepagered} className='pages-img' alt='x' /></Link></li>
                        <li><Link to={'/agents'}><img src={agentsred} className='pages-agents' alt='x' /></Link></li>
                        <li><Link to={'/weapons'}><img src={weaponsred} className='pages-img' alt='x' /></Link></li>


                    </ul>
                </header>
            </Headroom>

        </>
    );
};