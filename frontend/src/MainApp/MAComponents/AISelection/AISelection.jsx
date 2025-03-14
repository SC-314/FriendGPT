import React from "react";
import SelectionTitle from "./SelectionTitle";
import SelectionName from "./SelectionName";
import SelectionGender from "./SelectionGender";
import SelectionText from "./SelectionText";
import SelectionCreate from "./SelectionCreate";

function AISelection() {
    return(
        <div id="AISelectionContainer">
            <div id="AISelectionGrid">
                <div id="SelectionTitleContainer"><SelectionTitle /></div>
                <div id="SelectionNameContainer"><SelectionName /></div>
                <div id="SelectionGenderContainer"><SelectionGender /></div>
                <div id="SelectionTextContainer"><SelectionText /></div>
                <div id="SelectionCreateContainer"><SelectionCreate /></div>
            </div>

        </div>
    )
};

export default AISelection;