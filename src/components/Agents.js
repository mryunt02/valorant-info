import React from "react";
export default function Agents(props) {
    let { data } = props;
    console.log(data)
    return (
        <div>
            {
                data.map((agents) => {
                    return (
                        <div key={agents.uuid}>
                            <div className="agent-container">
                                <img className="agent-portrait" src="agent_portrait.jpg" alt="Agent Portrait" />
                                <div className="agent-details">
                                    <div className="agent-name">Agent Name</div>
                                    <div className="agent-description">Agent description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>

                                    <div className="role-container">
                                        <img className="role-image" src="role_icon.jpg" alt="Role Icon" />
                                        <div>
                                            <div className="role-name">Role Name</div>
                                            <div className="role-description">Role description goes here.</div>
                                        </div>
                                    </div>

                                    <div className="abilities-container">
                                        <div className="ability-card">
                                            <div className="ability-name">Ability 1</div>
                                            <img className="ability-image" src="ability1_icon.jpg" alt="Ability 1 Icon" />
                                            <div className="ability-description">Ability 1 description goes here.</div>
                                        </div>

                                        <div className="ability-card">
                                            <div className="ability-name">Ability 2</div>
                                            <img className="ability-image" src="ability2_icon.jpg" alt="Ability 2 Icon" />
                                            <div className="ability-description">Ability 2 description goes here.</div>
                                        </div>

                                        <div className="ability-card">
                                            <div className="ability-name">Ultimate</div>
                                            <img className="ability-image" src="ultimate_icon.jpg" alt="Ultimate Icon" />
                                            <div className="ability-description">Ultimate description goes here.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    )

                })

            }
        </div>
    )

}