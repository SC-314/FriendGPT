import React from "react";
import MAHistoryTopArea from "./MAHistoryTopArea/MAHistoryTop";
import MAHistoryList from "./MAHistoryList/MAHistoryList";

function History() {
    return(
        <div id="MainHistory">
            <MAHistoryTopArea />
            <MAHistoryList />
        </div>
    )
}

export default History;