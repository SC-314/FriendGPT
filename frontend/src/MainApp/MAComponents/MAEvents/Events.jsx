import React from "react";
import MAEventsTitle from "./MAEventsTitle/MAEventsTitle";
import MAEventsList from "./MAEventsList/MAEventsList";

function Events() {
    return(
        <div id="MainEvents">
            <MAEventsTitle />
            <MAEventsList />
        </div>
    )
}

export default Events;