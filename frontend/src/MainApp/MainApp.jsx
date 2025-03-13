import React from "react";
import History from "./MAComponents/MAHistory/History";
import Chat from "./MAComponents/MAChat/Chat";
import Events from "./MAComponents/MAEvents/Events";
import useSelectionStore from "./MAComponents/MAHistory/MAHistoryTopArea/MASelectionStore";
import AISelection from "./MAComponents/AISelection/AISelection";

function MainApp() {
    const {SelectionStore, setSelectionStore} = useSelectionStore();
    
    if (SelectionStore == 'false') {
        return (
        <div id="MainAppContainer">
            <div id="HistoryContainer"><History /></div>
            <div id="ChatContainer"><Chat /></div>
            {/* <div id="EventsContainer"><Events /></div> */}
        </div>
        )
    } else {
        console.log("OKOKO")
        return (
            <div id="OuterMost">
                <div id="MainAppContainer">
                    <div id="HistoryContainer"><History /></div>
                    <div id="ChatContainer"><Chat /></div>
                    {/* <div id="EventsContainer"><Events /></div> */}
                </div>
                <AISelection />
            
            </div>

            )
    }

}

export default MainApp;