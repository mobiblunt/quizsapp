import React from "react"


export default function Quiz(props) {

 
  
    return (
        <div id="second">
      <div>
        <h3 id="questions">{props.question}</h3>
               <div id="option">
                
               
                   <p onClick={props.handleClick} className="options" >{props.value}</p>
                 
                 
               
                 </div>
             <hr></hr>
        </div>
      
    </div>
    )
}