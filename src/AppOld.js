import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState([]);
  const [disable, setDisable] = useState(false);
  const [showNext, setShowNext] = useState(false);

  const nextPrevHandler = (text) => {
    if (text === "next" && currentQuestion !== 3) {
      setCurrentQuestion(currentQuestion + 1);
    }
    if (text === "prev" && currentQuestion !== 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswerOptionClick = (answerOption) => {
    let { isCorrect, answerText } = answerOption;
    setAnswer((previousState) => [...previousState, answerText]);
    console.log(answer);
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setDisable(true);
    }
  };

  const reviewHandler = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setShowNext(true);
  };
  return (
    <>
      {showNext ? (
        <div className="prevnext-section">
          <button
            onClick={() => {
              nextPrevHandler("prev");
            }}
            className="next"
          >
            Previous
          </button>
          <button
            onClick={() => {
              nextPrevHandler("next");
            }}
            className="next"
          >
            Next
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="app">
        {showScore ? (
          <>
            <div className="score-section">
              <button className="review" onClick={reviewHandler}>
                Review
              </button>
              <h3>
                You scored {score} out of {questions.length}
              </h3>
            </div>
          </>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  disabled={disable}
                  onClick={() => handleAnswerOptionClick(answerOption)}
                  className={
                    showNext
                      ? answer[currentQuestion] === answerOption.answerText &&
                        !answerOption.isCorrect
                        ? "incorrect"
                        : answerOption.isCorrect
                        ? "correct"
                        : ""
                      : ""
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
