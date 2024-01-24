import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../homepage.css'
import AOS from 'aos'
import videoBg from '../images/valorantvideo.mp4';
import gekko from '../images/displayicongekko.png';
import jett from "../images/displayiconjett.png";
import sheriff from '../images/displayiconsheriff.png';
import vandal from '../images/displayiconvandal.png';


function Homepage(props) {
    let { data } = props
    useEffect(() => {
        AOS.init({ duration: 2000 })

    }, [])
    return (
        <>
            <div className='burhan'>
                <video src={videoBg} autoPlay loop muted />
                <div className='content'>
                    <Link to={'/agents'} style={{ textDecoration: 'none', color: 'white', display: 'flex', flexDirection: 'row' }} >
                        <h1 className='homepage-h1'><span>//</span>AGENTS</h1>
                        <img src={jett} style={{ width: '80px' }} className='homepage-images'></img>
                        <img src={gekko} style={{ width: '80px' }} className='homepage-images'></img>
                    </Link>
                    <Link to={'/weapons'} style={{ textDecoration: 'none', color: 'white', display: 'flex', flexDirection: 'row' }}>
                        <h1 className='homepage-h1'><span>//</span>WEAPONS</h1>
                        <img src={sheriff} style={{ width: '200px' }} className='homepage-images'></img>


                    </Link>
                </div>

            </div>


        </>)
}

export default Homepage;