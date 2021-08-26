import React from "react";
import { Link } from "react-router-dom";
// import Space from "./AssetsForUtilities/spaceship.png"
import "./Utilities.styles.css"; 

export default function NavBar () {

    return (
        <div className="nav_bar">
                
            <div className="nav_bar-image_section">
          
            </div>

            <div className="nav_bar-options_section">

                
                    <div className="nav_bar-options_section-box">
                        <div className="nav_bar-options_section-box-image">
                            {/* <img src={Space} alt="" /> */}
                        </div>
                        <div className="nav_bar-options_section-box-text">
                            <Link to="/techport">
                                <h3>
                                    TECHPORT
                                </h3>
                            </Link>
                        </div>
                    </div>

                <div className="nav_bar-options_section-box" >
                    <Link to="/apod">
                        <h3>
                            APOD
                        </h3>
                    </Link>
                </div>

                <div className="nav_bar-options_section-box">
2
                </div>

                <div className="nav_bar-options_section-box">
2
                </div>

                <div className="nav_bar-options_section-box">
2
                </div>

            </div>

        </div>
    )
}
