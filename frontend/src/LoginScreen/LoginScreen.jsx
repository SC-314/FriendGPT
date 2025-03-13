import React from "react";
import LSButtons from "./LSComponents/LSButtons/LSButtons";
import LSUsername from "./LSComponents/LSUsername";
import LSPassword from "./LSComponents/LSPassword";
import LSTitle from "./LSComponents/LSTitle";

function LoginScreen() {
    return (

        <div id="LoginScreenBackground">
            <div id="LoginScreenContainer">

                <LSTitle />

                <LSUsername />

                <LSPassword />

                <LSButtons />

            </div>
        </div>
    )
}

export default LoginScreen;