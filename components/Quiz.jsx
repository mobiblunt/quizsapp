import React from "react"

export default function Quiz(props) {
    return (
        <div id="second">
      <div>
      <h3 id="questions">{props.ques}</h3>
      <div id="option">
        <p className="options">{props.options}</p>
        
      </div>
      <hr></hr>
        </div>
      
    </div>
    )
}