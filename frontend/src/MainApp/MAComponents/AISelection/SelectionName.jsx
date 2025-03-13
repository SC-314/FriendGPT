import React from "react";
import useNameStore from "./AISelectionStore/SelectionNameStore";

function SelectionName() {

    const {NameStore, setNameStore} = useNameStore();
    function handleChange(event) {
        setNameStore(event.target.value)
        console.log(NameStore)
    }

    return (
        <div id="SelectionName">
            <div id="SelectionNameTitle">Choose the name</div>
            <div id="SelectionNameText"><textarea onChange={handleChange}></textarea></div>
        </div>
    )
};

export default SelectionName;