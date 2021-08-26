import React, { useEffect, useState } from "react";
import {GetApodImage} from "./GetApodImage.services";

export default function MainApod () {
    //  ---------  UseState Section  ---------

    const [ imageData, setImageData ] = useState([]);


    //  ---------  UseEffect Section  --------- 

    useEffect(() => {
        try {
            GetApodImage()
                .then(resp => {
                    console.log(resp.data);
                    setImageData(resp.data);
                })
        } catch (error) {
            console.log(error)
        }
    }, [])



    return (
        <div>
            <h1>
                
            </h1>

            <h2>
                {imageData.title}
            </h2>

            <h3>
                {imageData.copyright}
            </h3>

            <p>
                {imageData.explanation}
            </p>

            <img src={imageData.hdurl} alt="" />



        </div>
    )
}
