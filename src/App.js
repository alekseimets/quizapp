import React, { useState } from 'react';

export default function App() {
  const question = [
    {
      questionText: "Who is CEO of Tesla?",
      answerOption: [
        {anserText:"Jeff Bezzos", isCorrect: false},
        {anserText:"Bill Gates", isCorrect: false},
        {anserText:"Warren Buffett", isCorrect: false},
        {anserText:"Elon Musk", isCorrect: true}
      ],
    },
    {
      questionText: "Who founded javaScript?",
      answerOption: [
        {anserText:"Dennis Ritchie", isCorrect: false},
        {anserText:"Brandan Eich", isCorrect: true},
        {anserText:"Navneet Dalal", isCorrect: false},
        {anserText:"Guido van Rossum", isCorrect: false}
      ],
    },
    {
      questionText: "What year has it happened COVID-19?",
      answerOption: [
        {anserText:"2019s", isCorrect: false},
        {anserText:"2020s", isCorrect: true},
        {anserText:"1990s", isCorrect: false},
        {anserText:"1800s", isCorrect: false}
      ],
    },
    {
      questionText: "Have you driven 60 km per hour and how many kilometers have you driven?",
      answerOption: [
        {anserText:"120km", isCorrect: false},
        {anserText:"200km", isCorrect: false},
        {anserText:"90km", isCorrect: false},
        {anserText:"60km", isCorrect: true}
      ],
    },
  ]
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

