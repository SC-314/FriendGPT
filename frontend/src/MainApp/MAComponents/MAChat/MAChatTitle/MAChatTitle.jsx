import React, { useEffect } from "react";
import useIsGirlStore from "../../AISelection/AISelectionStore/SelectionGenderStore";
import useNameStore from "../../AISelection/AISelectionStore/SelectionNameStore";
import usePersonalityStore from "../../AISelection/AISelectionStore/SelectionPersonalityStore";

function MAChatTitle() {

    const { IsGirl } = useIsGirlStore();
    const { NameStore} = useNameStore();
    const { PersonalityStore } = usePersonalityStore();

    useEffect(() => {
        console.log(NameStore)
    }, [NameStore])

    // useIsGirlStore
    // useNameStore
    // usePersonalityStore
    return (
        <div id="ChatTitleContainer">
            <div id="ChatTitle">{NameStore}</div>
            <div id="ChatDesc">{PersonalityStore}</div>
        </div>
    )
}

export default MAChatTitle