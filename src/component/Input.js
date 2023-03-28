import React from "react";

export function Input() {
    return(
        <div className="input-container">
            <label> Enter your comment <br/>
            <textarea className="input" type="text" placeholder="type something..." />
            </label>
          
        </div>
    )
}