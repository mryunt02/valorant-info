import React, { useState } from 'react'
import vbackground from '../Agents-videos/valoback.mp4'
import jett from '../images/displayiconjett.png';
import breach from '../images/breach.png';
import gekko from '../images/gekko.png';
import fade from "../images/fade.png";
import deadlock from "../images/deadlock.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
function Jett(props) {
    let { data, value } = props
    return (
        <div style={{ background: '#959595' }}>
            <video src={vbackground} autoPlay loop muted className='background'></video>
            <div>

                {data.map((agents) => {
                    if (agents.displayName === value)

                        return (<>
                            <div className='content'>
                                <div style={{ marginTop: '-250px' }}>
                                    <h3>// Choose An Agent</h3>
                                    <Link to={"/jett"} relative='route'><img src={jett} className='agent-little-images' style={{ width: '50px', display: 'flex', flexGrow: 'row' }}></img></Link>
                                    <Link to={"/agents"}><img src={gekko} className='agent-little-images' style={{ width: '50px', display: 'flex', flexGrow: 'row' }}></img></Link>
                                    <Link to={"/breach"}><img src={breach} className='agent-little-images' style={{ width: '50px', display: 'flex', flexGrow: 'row' }}></img></Link>
                                    <Link to={"/fade"}><img src={fade} className='agent-little-images' style={{ width: '50px', display: 'flex', flexGrow: 'row' }}></img></Link>
                                    <Link to={"/dlock"}><img src={deadlock} className='agent-little-images' style={{ width: '50px', display: 'flex', flexGrow: 'row' }}></img></Link>




                                </div>

                                <img src={agents.fullPortrait} className='agent-big-images' style={{ width: '900px' }}></img>



                                <div>
                                    <h1 style={{ fontSize: '40px' }}>{agents.displayName}</h1>
                                    <div className='role-div' style={{ display: 'flex', flexDirection: 'row', marginTop: '-30px' }}>
                                        <h2 style={{ display: 'flex', fontSize: '25px', marginLeft: '4px' }}>{agents.role?.displayName}</h2>
                                        <img src={agents.role?.displayIcon} style={{ width: '35px', height: '35px', alignSelf: 'center', marginLeft: '10px' }}></img>
                                    </div>

                                    <p style={{ width: '200px' }}>{agents.description}</p>
                                </div>
                                <div>
                                </div>



                            </div>

                            <div style={{ marginTop: '200px', marginRight: '30px' }}>
                                <h1 style={{ display: 'flex', justifyContent: 'center' }}>// SPECIAL ABILITIES</h1>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    {

                                        agents.abilities.map((ability) => {
                                            return (
                                                <>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>

                                                        <img src={ability.displayIcon} style={{ width: "100px" }} />
                                                        <h2 style={{}}>{ability.displayName}</h2>
                                                    </div>
                                                </>
                                            )

                                        })

                                    }
                                </div>
                            </div>
                        </>
                        )



                })}





            </div>

        </div>
    )
}

export default Jett;