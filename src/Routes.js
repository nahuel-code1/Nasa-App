import React from "react";
import { Switch, Route } from "react-router-dom";
import MainTechport from "./components/Techport/Main_Techport";
import Home from "./components/Main_Page/Home";
import ProjectInfo from "./components/Techport/Project_Info";
import MainApod from "./components/Apod/Main_Apod";

export default function Routes () {

    return (
        <div>
            <Switch>

                <Route path="/apod">
                    <MainApod />
                </Route>

                <Route path="/techport/:id">
                    <ProjectInfo />
                </Route>

                <Route path="/techport">
                    <MainTechport />
                </Route>

                <Route path="/">
                    <Home />
                </Route>

            </Switch>
        </div>
    )
}
