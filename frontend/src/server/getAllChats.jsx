import React from "react";


async function getAllChats(userid, setHistoryListStore) {

    var finalresponse;
    await fetch("http://localhost:3000/getAllChats", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ userid: userid})
    })
    .then(res => res.json()).then(data => {
        console.log(data.rows)
        finalresponse = data.rows.map((element) => {
            return ([element.ainame, element.aiisgirl, element.aipersonality, element.chatid])
        })

        setHistoryListStore(finalresponse);
    })
};

export default getAllChats;