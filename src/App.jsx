import "./styles.css";
import { useMemo, useState } from "react";
import { nanoid } from "nanoid";
import { clsx } from "clsx";


function Question({
  question: { question, correct_answer, incorrect_answers, selected },
  onSelect,
  showAnswer
}) {
  const options = useMemo(() => {
    return [...incorrect_answers, correct_answer].sort(
      () => Math.random() - 0.5
    );
  }, [correct_answer, incorrect_answers]);

  const getClasses = (answer) => {
    return clsx(
      { selected: selected === answer },
      showAnswer && {
        correct: answer === correct_answer,
        wrong: selected === answer && selected !== correct_answer
      }
    );
  };

  return (
    <div className="question--container">
      <h1>{question}</h1>
      {options.map((option) => (
        <button
          className={getClasses(option)}
          key={option}
          onClick={() => onSelect(option)}
          disabled={selected}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [start, setStart] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const getQuestionsFromApi = async () => {
    const res = await fetch(`https://opentdb.com/api.php?amount=5`);
    return await res.json();
  };

  const gameStart = async () => {
    const data = await getQuestionsFromApi();
    setQuestions(
      data.results.map((el) => ({
        ...el,
        id: nanoid()
      }))
    );
    setStart(true);
    setShowResult(false);
  };

  const checkResult = () => setShowResult(true);

  const selectAnswer = (id) => (selected) => {
    setQuestions((questions) =>
      questions.map((question) =>
        question.id === id
          ? {
              ...question,
              selected
            }
          : question
      )
    );
  };

  return (
    <div className="home--page">
      {start ? (
        <>
          {questions.map((question) => (
            <Question
              key={question.id}
              question={question}
              onSelect={selectAnswer(question.id)}
              showAnswer={showResult}
            />
          ))}
        </>
      ) : (
        <>
          <h1>Quizzical</h1>
          <p>some description if needed</p>
        </>
      )}

      <br />

      {start ? (
        showResult ? (
          <button className="result--button" onClick={gameStart}>
            Play again
          </button>
        ) : (
          <button className="result--button" onClick={checkResult}>
            Check the Answers
          </button>
        )
      ) : (
        <button className="start" onClick={gameStart}>
          Start quiz
        </button>
      )}
    </div>
  );
}
