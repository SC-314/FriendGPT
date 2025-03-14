import React, { useState, useEffect, useRef } from "react";
import MAAiMsg from "./MAAiMsg";
import MAUserMsg from "./MAUserMsg";
import useLSuserid from "../../../../LoginScreen/LSComponents/LSButtons/LSButtonsStore/LSuserid";
import useMessageListStore from "./MessageListStore";

function MAChatArea() {

    const {LSuserid} = useLSuserid();
    const [messageList, setMessageList] = useState([]);
    const { MessageListStore, setMessageListStore } = useMessageListStore();
    const listRef = useRef(null);

    useEffect(() => { 
        listRef.current?.lastElementChild?.scrollIntoView()
    }, [MessageListStore]);
    


    return(
    <div id="MAChatArea">
        <ul ref={listRef}>
        {MessageListStore.map((element) => (
            (element[1] == 'true') ? <MAUserMsg key={element[2]} msg={element[0]} /> : <MAAiMsg key={element[2]} msg={element[0]} />
        ))}
        </ul>
        </ div>
    )
}

export default MAChatArea;