import React from "react"
import './App.css'



  
export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({})



const QuestionsArray = []
  
     
    
    React.useEffect(function() {
        
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => setStarWarsData(data))
      QuestionsArray = starWarsData.results
    }, [])
  
  return (
    
    <main>
      {
            QuestionsArray.length > 0 
            ?
    <div id="questions">
      <h1>In which country was the caesar salad invented?</h1>
    </div>
    :
      <div id="header" > <h1 >Quizically</h1>
        <p>some kind of description</p>
      <button id="button">Start Quiz</button></div>
     }
    </main>
    
  )
}
