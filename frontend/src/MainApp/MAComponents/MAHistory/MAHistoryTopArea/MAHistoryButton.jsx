import React from "react";
import useSelectionStore from "./MASelectionStore";

function MAHistoryAddButton() {
    const {setSelectionStore} = useSelectionStore();

    function handleClick() {
        setSelectionStore('true');
        console.log("clicked")
    }

    return (
        <button id="MAHistoryAddButton" onClick={handleClick}>+</button>
    )
};

export default MAHistoryAddButton;