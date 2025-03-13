import React from "react";
import usePasswordStore from "./LSButtons/LSButtonsStore/LSPassword";

function LSPassword() {

    const {setPassword} = usePasswordStore();

    function handleChange(event) {
        setPassword(event.target.value)
    }

    return (
        <div id="LSPassword">
            <div id="LSPasswordHeader"></div>
            <div></div><div id="LSPasswordMain">Password</div><div></div>
            <div></div><div id="LSPasswordSec">
                <input id="LSPasswordInput" placeholder="Password..." onChange={handleChange}></input>
            </div><div></div>
            <div></div>
        </div>
        )
}

export default LSPassword;