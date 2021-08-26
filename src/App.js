import React from "react";
import NavBar from "./components/Utilities/NavBar";
import Routes from "./Routes";
import "./App.css";

export default function App () {

    return (
        <div className="container">
            
            <NavBar />

            <Routes />
            
        </div>
    )
}
