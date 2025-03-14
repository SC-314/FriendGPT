import React, { useState } from "react";
import {create} from 'zustand';
import useUsernameStore from './LSButtonsStore/LSUsername';
import usePasswordStore from './LSButtonsStore/LSPassword';
import useLoggedIn from "../../LoginScreenStore";
import useLSuserid from "./LSButtonsStore/LSuserid";
import useMessageListStore from "../../../MainApp/MAComponents/MAChat/MAMessages/MessageListStore";
import getAllMessages from "../../../server/getAllMessages";
import getAllChats from "../../../server/getAllChats";
import useHistoryListStore from "../../../MainApp/MAComponents/MAHistory/MAHistoryList/HistoryListStore";

function LSButtonsLogin() {

    const [loginMessage, setLoginMessage] = useState("login")
    const { username } = useUsernameStore();
    const { password } = usePasswordStore();
    const { setLoggedIn } = useLoggedIn();
    const { setLSuserid } = useLSuserid();
    const { MessageListStore, setMessageListStore } = useMessageListStore();
    const { HistoryListSTore, setHistoryListStore } = useHistoryListStore();
    

    function timedMessage(msg) {
        setLoginMessage(msg)
        setTimeout(() => {
            setLoginMessage("login")
        }, 2000)
    }
    
    function handleClick() {
        fetch(`${import.meta.env.VITE_API_URL}/login`, {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username:username, password:password})
            })
            .then(res => res.text()).then(text => {
                const data = JSON.parse(text);

            if (data[0] == true) {
                setLoggedIn('true')
                setLSuserid(data[1])
                console.log(`primary key is: ${data[1]}`)
                // getAllMessages(data[1], 1, setMessageListStore)
                getAllChats(data[1], setHistoryListStore)
                
            } else {
                console.log(data[0])
                timedMessage("Invalid username or password!")
            }
        })
    }

    return(
        <button id="LSButtonsLogin" onClick={handleClick}>{loginMessage}</button>
    )
};

export default LSButtonsLogin;