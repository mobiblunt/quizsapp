import React from "react"
import './App.css'
import Quiz from '../components/Quiz'
import { nanoid } from 'nanoid'


const gitHubUrl = "https://opentdb.com/api.php?amount=5&type=multiple";
  
export default function App() {
  const [starWarsData, setStarWarsData] = React.useState()
  


  let QuestionsArray = []
  let quizElements = []

  const getGitHubUserWithFetch = async () => {
  const response = await fetch(gitHubUrl)
  const jsonData = await response.json()
  apiToState(jsonData)
  }

  function apiToState(obj) {
    const results = obj.results;

    const arrOrder = results.map((questionSet) => ({
      id: nanoid(),
      question: questionSet.question,
      correct: false,
    }));
    console.log('arrOrder - ' + arrOrder);
    setStarWarsData(arrOrder);
  }

  

  function getQuizzes() {
    if(QuestionsArray) {
      quizElements = QuestionsArray.map(quiz => <Quiz ques={quiz.question} />)
       console.log(quizElements)
      
    }
    
  }
  
  
    
    React.useEffect(function() {
        
        getGitHubUserWithFetch();
        
           console.log(starWarsData) 
    
    },[])




  
  
  
  return (
    
    <main>
      {
        
            starWarsData
            ?
    <div id="second">
      <div>

        {
         starWarsData.map((obj) => {
           return (
             <>
           <h3 id="questions">{obj.question}</h3>
             <hr></hr></>
         )})  
            
          }



        
      
      
      
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
