import React, { useEffect } from "react";
import getAllChats from "../../../../../server/getAllChats";
import getAllMessages from "../../../../../server/getAllMessages";
import useLSuserid from "../../../../LoginScreen/LSComponents/LSButtons/LSButtonsStore/LSuserid";
import useHistoryListStore from "./HistoryListStore";
import useMessageListStore from "../../MAChat/MAMessages/MessageListStore";
import useHistoryChatid from "./HistoryChatid";
import useNameStore from "../../AISelection/AISelectionStore/SelectionNameStore";
import usePersonalityStore from "../../AISelection/AISelectionStore/SelectionPersonalityStore";

function HistoryListElement(props) {
    
    const { setNameStore } = useNameStore();
    const { setPersonalityStore } = usePersonalityStore();
    
    const {LSuserid} = useLSuserid();
    const {HistoryListStore} = useHistoryListStore();
    const {setMessageListStore} = useMessageListStore();
    const {HistoryChatid, setHistoryChatid} = useHistoryChatid();

    function handleClick() {
        setHistoryChatid(props.id);
        console.log("HistoryChatid is ", HistoryChatid)
        setNameStore(props.name)
        setPersonalityStore(props.personality)
    }

    useEffect(() => {
        if (HistoryChatid) {
            getAllMessages(LSuserid, HistoryChatid, setMessageListStore);
            
        }
    }, [HistoryChatid])

    return (
        <div id="HistoryListElement" onClick={handleClick}>
            <div id ="HistoryListELementTitle">{props.name}</div>
            <div id="HistoryListElementText">{props.personality}</div>
        </div>
    )
}

export default HistoryListElement;
