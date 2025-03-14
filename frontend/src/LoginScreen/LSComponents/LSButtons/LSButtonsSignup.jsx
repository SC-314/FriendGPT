import React, { useState } from 'react';
import useUsernameStore from './LSButtonsStore/LSUsername';
import usePasswordStore from './LSButtonsStore/LSPassword';
import useLoggedIn from "../../LoginScreenStore";

function LSButtonsSignup() {

    const [signupMessage, setSignupMessage] = useState("signup")
    const { username } = useUsernameStore();
    const { password } = usePasswordStore();
    const { setLoggedIn} = useLoggedIn();

    function timedMessage(msg) {
        setSignupMessage(msg)
        setTimeout(() => {
            setSignupMessage("signup")
        }, 2000)
    }
    
    function handleClick() {
        fetch("http://localhost:3000/signup", {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username:username, password:password})
            })
            .then(res => res.text()).then(text => {
                const data = JSON.parse(text);
            timedMessage(data[0])
        })
    }


    return(
        <button id="LSButtonsSignup" onClick={handleClick}>{signupMessage}</button>
    )
};

export default LSButtonsSignup;
