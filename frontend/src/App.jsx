import React from "react";
import ReactDOM from "react-dom";
import LoginScreen from "./LoginScreen/LoginScreen.jsx";
import useLoggedIn from "./LoginScreen/LoginScreenStore.js";
import MainApp from "./MainApp/MainApp.jsx";

function App() {

    const {LoggedIn} = useLoggedIn();

    if (LoggedIn == 'false') {
        return (
            <LoginScreen />
        )
    } else {
        return (
            <MainApp />
        )
    }
}

export default App;