import React, { useState } from "react";

const Quiz = ({ questions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerChange = (questionId, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answer,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    return questions.reduce((score, question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        return score + 1;
      }
      return score;
    }, 0);
  };

  const handleSubmit = () => {
    const unansweredQuestions = questions.length - Object.keys(selectedAnswers).length;
    if (unansweredQuestions > 0) {
      setShowWarning(true);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-primary-50 rounded-lg shadow-lg shadow-primary-200">
      {!submitted ? (
        <>
          <div className="mb-4">
            <h2 className="text-lg font-semibold">{currentQuestion.text}</h2>
            <div className="flex flex-col mt-2">
              {currentQuestion.options.map((option) => (
                <label key={option} className="mb-2">
                  <input
                    type="radio"
                    name={currentQuestion.id}
                    value={option}
                    checked={selectedAnswers[currentQuestion.id] === option}
                    onChange={() =>
                      handleAnswerChange(currentQuestion.id, option)
                    }
                    disabled={submitted}
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="bg-primary-700 hover:bg-primary-600 transition text-white p-2 rounded"
            >
              Previous
            </button>
            {currentQuestionIndex === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="bg-primary-700 hover:bg-primary-600 transition text-white p-2 rounded"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="bg-primary-700 hover:bg-primary-600 transition text-white p-2 rounded"
              >
                Next
              </button>
            )}
          </div>
          {showWarning && (
            <div className="mt-4 text-red-600">
              You have {questions.length - Object.keys(selectedAnswers).length} unanswered{" "}
              {questions.length - Object.keys(selectedAnswers).length > 1 ? "questions" : "question"}.
            </div>
          )}
        </>
      ) : (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">
            Your Score: {calculateScore()} / {questions.length}
          </h2>
        </div>
      )}
    </div>
  );
};

export default Quiz;
