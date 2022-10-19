import React from "react"
import './App.css'
import QuizzicalApp from '../components/Quiz'


  
export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({})
    
    // 1. GET the data (fetch)
    // 2. Save the data to state
    
    React.useEffect(function() {
        
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [])
  
  return (
    <main>
      
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </main>
  )
}
