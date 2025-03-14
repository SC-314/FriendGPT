import React from "react";
import HistoryListElement from "./HistoryListElement";
import useHistoryListStore from "./HistoryListStore";
import getAllChats from "../../../../server/getAllChats";
import useLSuserid from "../../../../LoginScreen/LSComponents/LSButtons/LSButtonsStore/LSuserid";

function MAHistoryList() {

    const {HistoryListStore, setHistoryListStore} = useHistoryListStore(); 
    const {LSuserid, setLSuserid} = useLSuserid();

    // getAllChats(LSuserid, setHistoryListStore)
    console.log("THIS IS THE LIST BEING USED", HistoryListStore)
    console.log("Keys:", HistoryListStore.map(e => e[3]));

    return (
        <div id="HistoryListContainer">
            {HistoryListStore.slice().reverse().map((element) => (
                <HistoryListElement 
                    id={element[3]} 
                    name={element[0]} 
                    personality={element[2]} 
                    key={element[3]} 
                />
            ))}
        </div>
    );
    
}

export default MAHistoryList;
