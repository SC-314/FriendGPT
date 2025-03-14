import React from "react";
import usePersonalityStore from "./AISelectionStore/SelectionPersonalityStore";

function SelectionText() {

    const {PersonalityStore, setPersonalityStore} = usePersonalityStore();

    function onChange(event) {
        setPersonalityStore(event.target.value)
    }

    return (
        <div id="SelectionText">
            <div id="SelectionTextTitle">
                Customise your AI friend here, write qualities and the personality you want your AI fried to have
            </div>
            <div id="SelectionTextArea">
                <textarea onChange={onChange}></textarea>
            </div>
        </div>
    )
};

export default SelectionText;