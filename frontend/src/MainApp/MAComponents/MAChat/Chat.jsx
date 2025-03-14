import React from "react";
import MAChatArea from "./MAMessages/MAChatArea.jsx";
import MAChatInput from "./MAMessages/MAChatInput.jsx";
import MAChatTitle from "./MAChatTitle/MAChatTitle.jsx";

function Chat() {

    return(
        <div id="MainChat">
            <MAChatTitle />
            <MAChatArea />
            <MAChatInput />
        </div>

    )
}

export default Chat;