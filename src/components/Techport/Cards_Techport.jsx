import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllTechportProjects } from "./GetProyects.services";


export default function CardsTechport ({projectId}) {
    // -------------- UseState Section --------------

    const [ projectsData, setProjectsData ] = useState("");
    

    // -------------- UseEffect Section --------------

    useEffect(() => {
        if (projectId) {
            try {
                getAllTechportProjects(projectId)
                    .then(resp => {
                        setProjectsData(resp.data.project);
                    })
            } catch (error) {
                console.log(error);
            }
        }
    }, [projectId])

    return (
        <div>
            <Link to={`/techport/${projectId}`}>
                <h3>
                    {projectsData &&
                        projectsData.title
                    }
                </h3>
            </Link>
        </div>
    )
}
