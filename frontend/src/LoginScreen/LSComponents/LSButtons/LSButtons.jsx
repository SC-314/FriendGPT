import React from "react";
import LSButtonsLogin from "./LSButtonsLogin";
import LSButtonsSignup from "./LSButtonsSignup";

function LSButtons() {
    return (
        <div id="LSButtons">
            <div id="LSButtonsHeader"></div>
            <div></div><div><LSButtonsLogin /></div><div></div>
            <div id="LSButtonsSep"></div>
            <div></div><div><LSButtonsSignup /></div><div></div><div></div>
            <div id="LSButtonsFooter"></div>
        </div>
    )
}

export default LSButtons;