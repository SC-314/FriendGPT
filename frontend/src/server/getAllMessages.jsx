import React, { use } from "react";
import useMessageListStore from "../src/MainApp/MAComponents/MAChat/MAMessages/MessageListStore";

async function getAllMessages(userid, chatid, setMessageListStore) {

    var finalresponse;
    await fetch("http://localhost:3000/getAllMessages", {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({userid: userid, chatid: chatid})
    })
    .then(res => res.json()).then(data => {
        finalresponse = data.rows.map((element) => {
            return ([element.msg, element.isuser, element.msgid])
        })
        setMessageListStore(finalresponse)
        
    })

    console.log(finalresponse);
    
    return finalresponse;
}

export default getAllMessages;