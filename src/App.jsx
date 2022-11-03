import React from "react"
import './App.css'
import { nanoid } from 'nanoid'
import Quiz from "../components/Quiz"


const gitHubUrl = "https://opentdb.com/api.php?amount=5&type=multiple";






  
export default function App() {

  const [intro, setIntro] = React.useState(true);

   const [starWarsData, setStarWarsData] = React.useState()
  
  const [active, setActive] = React.useState(false);


  let QuestionsArray = []
  let quizElements = []

  const getGitHubUserWithFetch = async () => {
  const response = await fetch(gitHubUrl)
  const jsonData = await response.json()
  apiToState(jsonData)
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
        
           
    
    },[])


const getAns =   starWarsData && starWarsData.map((obj) => {
           return (

             obj.ansArr.map((obj) => {
               return (
                   <p onClick={handleClick} className="options" style={{ backgroundColor: active ? "black" : "white" }}>{obj.value}</p>
                 
                 )})

             )})
             

const getObj = starWarsData && starWarsData.map((obj) => {
           return (
             

    <Quiz value={getAns}  key={obj.id} question={obj.question} handleClick={() => handleClick()} /> 
         )})  
  

  
  function handleIntro() {
    setIntro((old) => !old);
  }

  
  
  
  
  return (
    
    <main>
      {
        
            !intro
            ?
        getObj
    
    :
      <div id="header" > <h1 >Quizically</h1>
        <p>some kind of description</p>
      <button onClick={handleIntro} id="button">Start Quiz</button>
        
      </div>
     }
    </main>
    
    
  )
}
