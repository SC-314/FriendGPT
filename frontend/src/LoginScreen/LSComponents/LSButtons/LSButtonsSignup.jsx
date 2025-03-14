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
    fetch(`${import.meta.env.VITE_API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.text())  // Read response as text first
    .then(text => {
        console.log("Raw response:", text); // Check if it's valid JSON
        try {
            const data = JSON.parse(text);
            timedMessage(data[0]); // Adjust if the response structure differs
        } catch (error) {
            console.error("Error parsing JSON:", error);
            timedMessage("Signup failed: Invalid response");
        }
    })
    .catch(error => {
        console.error("Fetch error:", error);
        timedMessage("Signup failed: Network error");
    });
}



    return(
        <button id="LSButtonsSignup" onClick={handleClick}>{signupMessage}</button>
    )
};

export default LSButtonsSignup;
