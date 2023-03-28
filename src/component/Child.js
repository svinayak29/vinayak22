import React from "react";

export function Child({changeName}){

    return(
        <>
        
        <h1>Child</h1>
        <button onClick={() => changeName("Shidhi")}>click</button>

        </>
    )
}