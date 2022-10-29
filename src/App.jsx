import React from "react"
import './App.css'

import Quiz from "../components/Quiz"




  
export default function App() {

  const [intro, setIntro] = React.useState(true);
  
  function handleIntro() {
    setIntro((old) => !old);
  }

  
  
  
  
  return (
    
    <main>
      {
        
            !intro
            ?
        <Quiz/>
    
    :
      <div id="header" > <h1 >Quizically</h1>
        <p>some kind of description</p>
      <button onClick={handleIntro} id="button">Start Quiz</button>
        
      </div>
     }
    </main>
    
    
  )
}
