import React from "react";

function MAUserMsg(props) {
    return (
    <div id="MAUserMsgContainer">
        <div id="MAUserMsgBubble"><p>{props.msg}</p></div>
    </div>
    )
}

export default MAUserMsg;