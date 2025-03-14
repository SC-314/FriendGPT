import React, { use } from "react";

async function getAllMessages(userid, chatid, setMessageListStore) {

    var finalresponse;
    await fetch(`${import.meta.env.VITE_API_URL}/getAllMessages`, {
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
