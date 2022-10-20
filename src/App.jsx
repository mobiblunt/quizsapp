import React from "react"
import './App.css'
import Quiz from '../components/Quiz'



  
export default function App() {
  const [starWarsData, setStarWarsData] = React.useState([])


  let QuestionsArray = []
  let quizElements = []

  function getQuizzes() {
    if(QuestionsArray) {
      quizElements = QuestionsArray.map(quiz => <Quiz ques={quiz.question} />)
       console.log(quizElements)
      
    }
    
  }
  
  
    
    React.useEffect(function() {
        
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => setStarWarsData(data))
       
           console.log(starWarsData)
        
            
    
    },[])




  
  
  
  return (
    
    <main>
      {
        
            starWarsData 
            ?
    <div id="second">
      <div>


        {starWarsDatareasu.map((userObj) => (
            <h3 id="questions">{userObj.question}</h3>
            
          ))}



        
      
      
      <hr></hr>
        </div>
      
    </div>
    :
      <div id="header" > <h1 >Quizically</h1>
        <p>some kind of description</p>
      <button id="button">Start Quiz</button>
        
      </div>
     }
    </main>
    
  )
}
