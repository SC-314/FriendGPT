import React from "react";
import useChatInput from "./MAChatInput.js";
import useLSuserid from "../../../../LoginScreen/LSComponents/LSButtons/LSButtonsStore/LSuserid.js";
import useMessageListStore from "./MessageListStore.js";
import useHistoryChatid from "../../MAHistory/MAHistoryList/HistoryChatid.js";
import useIsGirlStore from "../../AISelection/AISelectionStore/SelectionGenderStore.js";
import useNameStore from "../../AISelection/AISelectionStore/SelectionNameStore.js";
import usePersonalityStore from "../../AISelection/AISelectionStore/SelectionPersonalityStore.js";
import useUsernameStore from "../../../../LoginScreen/LSComponents/LSButtons/LSButtonsStore/LSUsername.js"

function MAChatInput() {

    const {setChatInput, chatInput} = useChatInput();
    const {LSuserid} = useLSuserid();
    const {setMessageListStore, MessageListStore} = useMessageListStore();
    const {HistoryChatid} = useHistoryChatid();

    const {IsGirlStore, setIsGirlStore} = useIsGirlStore();
    const {NameStore, setNameStore} = useNameStore();
    const {PersonalityStore, setPersonalityStore} = usePersonalityStore();

    const { username } = useUsernameStore();


    function handleChange(event) {
        setChatInput(event.target.value);
    }

    function handleKeyDown(event) {
        console.log(HistoryChatid)
        
        var full;
        const keyInfo = [];
        if (event.key == 'Enter') {
            console.log("enter pressed")
            console.log("HistoryChatid is ", HistoryChatid)
            event.preventDefault();
            fetch(`${import.meta.env.VITE_API_URL}/userMsg`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({userid:LSuserid, chatid:HistoryChatid, message:chatInput})
            }).then(res => res.text()).then(text => {
                const data = JSON.parse(text);

                full = data[1].rows.map((element) =>{

                    return [element.msg, element.isuser, element.msgid];
                })
                setMessageListStore(full);
                // console.log(MessageListStore);

                fetch(`${import.meta.env.VITE_API_URL}/AIresponse`, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({userid:LSuserid, chatid:HistoryChatid, message:full,
                        aiisgirl:IsGirlStore, ainame:NameStore, aipersonality:PersonalityStore,
                    username:username})
                }).then(res => res.text()).then(text => {
                    const data = JSON.parse(text);
                    
                    const finalresponse = data.rows.map((element) => {
                        return ([element.msg, element.isuser, element.msgid])
                    })
                    console.log(finalresponse);
                    setMessageListStore(finalresponse)
                })

            })

            setChatInput("");
        }
    }



    return(
        <div id="MAChatInputContainer">
            <div id="MATextArea"><textarea onChange={handleChange} onKeyDown={handleKeyDown} value={chatInput}></textarea></div>
        </div>
    )
};

export default MAChatInput;
