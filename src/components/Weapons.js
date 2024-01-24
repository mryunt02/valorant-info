import React, { useEffect } from "react";
import '../weapons.css';
import AOS from "aos";
import 'aos/dist/aos.css';
export default function Weapons(props) {
    let { weapons } = props;
    useEffect(() => {
        AOS.init({ duration: 1200 });

    }, []);

    return (
        <div>
            <h1 className='weapons-h1' style={{ fontSize: '40px', justifyContent: 'center', display: 'flex' }} ><span>// </span>WEAPONS</h1>
            {
                weapons.map((weapon) => {
                    return (
                        <div>
                            <div key={weapon.uuid} className="weapon-first-div">
                                <div className="biggest-div" data-aos="zoom-in" >
                                    <div>

                                        <img src={weapon.displayIcon} className="weapon-icon" />
                                        <h1 className='weapons-h1' style={{ textAlign: 'center' }}>{weapon.displayName}</h1>
                                    </div>
                                    <div className="big-div">
                                        <div className="my-table-div">
                                            <div className="little-div">
                                                <table style={{
                                                    color: '#45a763',
                                                    borderWidth: '2px'
                                                }}>
                                                    <th className="th">Fire Rate</th>
                                                    <tr>
                                                        <td className="td-table">{weapon.weaponStats?.fireRate}</td>

                                                    </tr>
                                                    <div className="burhan-div">
                                                        <div className="burhan-iki" style={{ "width": `${weapon.weaponStats?.fireRate * 100 / 16}%` }}></div>
                                                    </div>
                                                    <div className='sec-div' style={{ display: "flex", justifyContent: 'center', color: '#797373', fontWeight: 'bold' }}>RDS/SEC</div>

                                                </table>
                                                <table style={{
                                                    color: '#45a763',
                                                    borderWidth: '2px'
                                                }}>
                                                    <th className="th">Equip Speed</th>
                                                    <tr>
                                                        <td className="td-table">{weapon.weaponStats?.equipTimeSeconds}</td>
                                                    </tr>

                                                    <div className="burhan-div">
                                                        <div className="burhan-iki" style={{ "width": `${100 * 0.75 / weapon.weaponStats?.equipTimeSeconds}%` }}></div>
                                                    </div>
                                                    <div className='sec-div' style={{ display: "flex", justifyContent: 'center', color: '#797373', fontWeight: 'bold' }}>SEC</div>

                                                </table>
                                            </div>
                                            <div className="little-div">
                                                <table style={{
                                                    color: '#45a763',
                                                    borderWidth: '2px'
                                                }}>
                                                    <th className="th">Reload Speed</th>
                                                    <tr>
                                                        <td className="td-table">{weapon.weaponStats?.reloadTimeSeconds}</td>
                                                    </tr>

                                                    <div className="burhan-div">
                                                        <div className="burhan-iki" style={{ "width": `${100 * 1.5 / weapon.weaponStats?.reloadTimeSeconds}%` }}></div>
                                                    </div>
                                                    <div className='sec-div' style={{ display: "flex", justifyContent: 'center', color: '#797373', fontWeight: 'bold' }}>SEC</div>

                                                </table>
                                                <table style={{
                                                    color: '#45a763',
                                                    borderWidth: '2px'
                                                }}>
                                                    <th className="th">Magazine</th>
                                                    <tr>
                                                        <td className="td-table">{weapon.weaponStats?.magazineSize}</td>
                                                    </tr>

                                                    <div className="burhan-div">
                                                        <div className="burhan-iki" style={{ "width": `${weapon.weaponStats?.magazineSize / 1}%` }}></div>
                                                    </div>
                                                    <div className='sec-div' style={{ display: "flex", justifyContent: 'center', color: '#797373', fontWeight: 'bold' }}>/100</div>

                                                </table>
                                            </div>



                                        </div>




                                        <div className="range-div">
                                            {

                                                weapon.weaponStats?.damageRanges?.map((damages) => {
                                                    return (

                                                        <div className="table-div">
                                                            <table style={{
                                                                color: '#45a763',
                                                                borderWidth: '2px'
                                                            }}>
                                                                <th className="th">Range: {damages.rangeStartMeters}-{damages.rangeEndMeters}</th>
                                                                <tr>
                                                                    <td className="table-tdler">Head Damage:</td>
                                                                    <td className="table-tdler">{damages.headDamage}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="table-tdler">Body Damage:</td>
                                                                    <td className="table-tdler">{damages.bodyDamage}</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="table-tdler">Leg Damage:</td>
                                                                    <td className="table-tdler">{damages.legDamage}</td>
                                                                </tr>

                                                            </table>
                                                        </div>


                                                    )


                                                })

                                            }
                                        </div>

                                    </div>

                                </div>
                            </div> <br /><br />
                            <hr style={{ height: 1 }} />
                        </div>
                    )

                })

            }



        </div>

    )
}