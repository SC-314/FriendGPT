import React from "react";
import useIsGirlStore from "./AISelectionStore/SelectionGenderStore";

function SelectionGender() {

    const {IsGirlStore, setIsGirlStore} = useIsGirlStore();

    function handleGirlClick() {
        setIsGirlStore(true)
    }
    
    function handleBoyClick() {
        setIsGirlStore(false)
    }


    return (
        <div id="SelectionGender">
            <div id="SelectionGenderTitle">Click on which gender you want</div>
            <div id="SelectionGenderButton">
                <div id="SelectionGenderDualButton">
                    <button id="DualButtonGirl" onClick={handleGirlClick} className={"IsGirl"+IsGirlStore}>girl</button>
                    <button id="DualButtonBoy" onClick={handleBoyClick} className={"IsGirl"+!IsGirlStore}>boy</button>
                </div>
                </div>
        </div>
    )
};

export default SelectionGender;