import React, { useEffect, useState } from "react";
import CardsTechport from "./Cards_Techport";
import { getAllTechportId } from "./GetProyects.services";
import { useForm } from "react-hook-form";

export default function MainTechport () {
    // -------------- UseState Section --------------

    const [ TechportGeneralData, setTechportGeneralData ] = useState([]);
    const [ limitNumber, setlimitNumber ] = useState(0);
    const [ offsetNumber, setOffsetNumber ] = useState(4);


    // -------------- UseEffect Section --------------

    useEffect(() => {
        try {
            getAllTechportId()
                .then(resp => {
                    setTechportGeneralData(resp.projects.slice(limitNumber,offsetNumber));
                });
        } catch (error) {
            console.log(error);
        }
    },[offsetNumber, limitNumber])

    // -------------- UseForm Section --------------

    const { handleSubmit, register } = useForm();

    const handleProjectsOptions = (data) => {
        setOffsetNumber(data.options_numbers);
    }    

    return (
        <div>
            <form onSubmit={handleSubmit(handleProjectsOptions)}>
                <select {...register("options_numbers")} >
                    <option>4</option>
                    <option>8</option>
                    <option>16</option>
                    <option>32</option>
                </select>
                <button>
                    View More
                </button>
            </form>

            <div>
                {TechportGeneralData && 
                    TechportGeneralData.map((element, i) => {
                        return (
                            <CardsTechport projectId={element.projectId} key={`${element.projectId}_${i}`} />
                        );
                    })
                }
            </div>
            
        </div>
    )
}
