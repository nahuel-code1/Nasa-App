import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAllTechportProjects } from "./GetProyects.services";

export default function ProjectInfo () {
    const params = useParams();
    const projectId = params.id;

    const [ projectInfo, setProjectInfo ] = useState("");


    useEffect(() => {
        if (projectId) {
            try {
                getAllTechportProjects(projectId)
                    .then(resp => {
                        console.log("Datos para mostrar", resp.data.project);
                        setProjectInfo(resp.data.project);
                    })
            } catch (error) {
                console.log(error)
            }
        }
    }, [projectId])

    return (
        <div>
            a
        </div>
    )
}
