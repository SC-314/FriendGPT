import React from "react";
import useUsernameStore from "./LSButtons/LSButtonsStore/LSUsername";

function LSUsername() {

    const { setUsername} = useUsernameStore();

    const handleChange = (event) => {
        setUsername(event.target.value)
    }

    return (

        <div id="LSUsername">
            <div id="LSUsernameHeader"></div>
            <div></div><div id="LSUsernameMain">Username</div><div></div>
            <div></div><div id="LSUsernameSec">
                <input id="LSUsernameInput" placeholder="Username..." onChange={handleChange}></input>
            </div><div></div>
            <div></div>

        </div>
        )
}

export default LSUsername;