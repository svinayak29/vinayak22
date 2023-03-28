
import React from "react"
import './Cardprofile.css'

export function Cardprofile(props){

    return(<div className="main-container">
         
           <div className="card-container">
                <div className="image-container">
                <img src={props.user.image} alt ="profile-pic" />
                </div>
                <h1>{props.user.name}</h1>
                <h3>{props.user.designation}</h3>
                <p>{props.user.description}</p>
            </div>
        </div>
    )
}