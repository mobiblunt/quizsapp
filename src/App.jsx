import React from "react"
import './App.css'
import Quiz from '../components/Quiz'


const gitHubUrl = "https://opentdb.com/api.php?amount=5&type=multiple";
  
export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({})
  


  let QuestionsArray = []
  let quizElements = []

  const getGitHubUserWithFetch = async () => {
  const response = await fetch(gitHubUrl)
  const jsonData = await response.json()
  setStarWarsData(jsonData)
  }

  function getQuizzes() {
    if(QuestionsArray) {
      quizElements = QuestionsArray.map(quiz => <Quiz ques={quiz.question} />)
       console.log(quizElements)
      
    }
    
  }
  
  
    
    React.useEffect(function() {
        
        getGitHubUserWithFetch();
        
            
    
    },[])




  
  
  
  return (
    
    <main>
      {
        
            starWarsData 
            ?
    <div id="second">
      <div>


        
            <h3 id="questions">{starWarsData.response_code}</h3>
            
          



        
      
      
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
