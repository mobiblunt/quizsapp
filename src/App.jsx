import React from "react"
import './App.css'
import { nanoid } from 'nanoid'


const gitHubUrl = "https://opentdb.com/api.php?amount=5&type=multiple";
  
export default function App() {
  const [starWarsData, setStarWarsData] = React.useState()
  const [intro, setIntro] = React.useState(true);
  const [active, setActive] = React.useState(false);


  let QuestionsArray = []
  let quizElements = []

  const getGitHubUserWithFetch = async () => {
  const response = await fetch(gitHubUrl)
  const jsonData = await response.json()
  apiToState(jsonData)
  }

  function handleIntro() {
    setIntro((old) => !old);
  }

  const handleClick = () => {
    setActive(!active);
  };


  function apiToState(obj) {
    const results = obj.results;

    const arrOrder = results.map((questionSet) => ({
      id: nanoid(),
      question: questionSet.question,
      ansArr: getAnsArr(
        questionSet.correct_answer,
        questionSet.incorrect_answers
      ),
      correct: false,
    }));
    console.log('arrOrder - ' + arrOrder);
    setStarWarsData(arrOrder);
  }

  
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  

  function getAnsArr(correct, incorrect) {
    const arrScram = [
      {
        value: correct,
        selected: false,
        correct: true,
        id: nanoid(),
      },
    ];

    for (let i = 0; i < incorrect.length; i++) {
      arrScram.push({
        value: incorrect[i],
        selected: false,
        correct: false,
        id: nanoid(),
      });
    }
    return shuffle(arrScram);
  }

  
  
    
    React.useEffect(function() {
        
        getGitHubUserWithFetch();
        
           console.log(starWarsData) 
    
    },[])




  
  
  
  return (
    
    <main>
      {
        
            !intro
            ?
    <div id="second">
      <div>

        {
         starWarsData.map((obj) => {
           return (
             <>
           <h3 id="questions">{obj.question}</h3>
               <div id="option">
                 {obj.ansArr.map((obj) => {
               return (
                   <p key={obj.id} onClick={handleClick} className="options" style={{ backgroundColor: active ? "black" : "white" }}>{obj.value}</p>
                 
                 )})}
               
                 </div>
             <hr></hr></>
         )})  
            
          }



        
      
      
      
        </div>
      
    </div>
    :
      <div id="header" > <h1 >Quizically</h1>
        <p>some kind of description</p>
      <button onClick={handleIntro} id="button">Start Quiz</button>
        
      </div>
     }
    </main>
    
    
  )
}
