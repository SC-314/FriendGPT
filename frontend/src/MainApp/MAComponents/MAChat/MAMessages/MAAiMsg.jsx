import React from "react";

function MAAiMsg(props) {
    return (
    <div id="MAAiMsgContainer">
        <div id="MAAiMsgBubble"><p>{props.msg}</p></div>
    </div>
    )
}

export default MAAiMsg;