import React from "react";
import useIsGirlStore from "./AISelectionStore/SelectionGenderStore";
import useNameStore from "./AISelectionStore/SelectionNameStore";
import usePersonalityStore from "./AISelectionStore/SelectionPersonalityStore";
import useLSuserid from "../../../LoginScreen/LSComponents/LSButtons/LSButtonsStore/LSuserid";
import getAllChats from "../../../server/getAllChats";
import useHistoryListStore from "../MAHistory/MAHistoryList/HistoryListStore";
import useSelectionStore from "../MAHistory/MAHistoryTopArea/MASelectionStore";
import getAllMessages from "../../../server/getAllMessages";

function SelectionCreate() {

    const {setHistoryListStore} = useHistoryListStore();
    const {IsGirlStore, setIsGirlStore} = useIsGirlStore();
    const {NameStore, setNameStore} = useNameStore();
    const {PersonalityStore, setPersonality} = usePersonalityStore();
    const {LSuserid, setLSuserid} = useLSuserid();
    const { setSelectionStore } = useSelectionStore();

    function handleClick() {
        fetch(`${import.meta.env.VITE_API_URL}/addToChats`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({AiIsGirl:IsGirlStore, ainame: NameStore, aipersonality: PersonalityStore, userid: LSuserid})
        })
        .then(res => res.text()).then(text => {
            const data = JSON.parse(text);
            
            getAllChats(LSuserid, setHistoryListStore);
            setSelectionStore('false');
        })
    }

    return(
        <div id="SelectionCreate"><button onClick={handleClick}>Create</button></div>
    )
};

export default SelectionCreate;