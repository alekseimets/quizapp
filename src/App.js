import React, { useState } from 'react';

export default function App() {
  const question = [
    {
      questionText: "Who is CEO of Tesla?",
      answerOption: [
        {anwserText:"Jeff Bezzos", isCorrect: false},
        {anwserText:"Bill Gates", isCorrect: false},
        {anwserText:"Warren Buffett", isCorrect: false},
        {anwserText:"Elon Musk", isCorrect: true}
      ],
    },
    {
      questionText: "Who founded javaScript?",
      answerOption: [
        {anwserText:"Dennis Ritchie", isCorrect: false},
        {anwserText:"Brandan Eich", isCorrect: true},
        {anwserText:"Navneet Dalal", isCorrect: false},
        {anwserText:"Guido van Rossum", isCorrect: false}
      ],
    },
    {
      questionText: "What year has it happened COVID-19?",
      answerOption: [
        {anwserText:"2019s", isCorrect: false},
        {anwserText:"2020s", isCorrect: true},
        {anwserText:"1990s", isCorrect: false},
        {anwserText:"1800s", isCorrect: false}
      ],
    },
    {
      questionText: "Have you driven 60 km per hour and how many kilometers have you driven?",
      answerOption: [
        {anwserText:"120km", isCorrect: false},
        {anwserText:"200km", isCorrect: false},
        {anwserText:"90km", isCorrect: false},
        {anwserText:"60km", isCorrect: true}
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect===true){
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < question.length){
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="App">
       {showScore  ? (
         <div className="score-section">You scored {score} out of {question.length}</div>
       ): (
        <> 
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{question.length};
          </div>
          <div className="question-text">{question[currentQuestion].questionText}</div>
        </div>
        <div className="answer-section">
          {question[currentQuestion].answerOption.map((answerOption, index) => (<button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.anwserText}</button>))}
        </div>
        </>
        )}
    </div>
  );
}

