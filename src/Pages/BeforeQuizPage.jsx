import React from 'react';
import { useNavigate } from 'react-router-dom';

const BeforeQuizPage = () => {
  const navigate = useNavigate();

  const quizzes = [
    { id: 1, title: "React Basics" },
    { id: 2, title: "State and Props" },
    { id: 3, title: "React Hooks" },
    { id: 4, title: "Component Lifecycle" },
    { id: 5, title: "React Router" },
    { id: 6, title: "Advanced React Patterns" },
    // Add more quizzes as needed
  ];

  const handleQuizSelect = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Select a Quiz</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quizzes.map((quiz) => (
          <button
            key={quiz.id}
            onClick={() => handleQuizSelect(quiz.id)}
            className="bg-primary-700 text-white p-4 rounded-lg shadow-lg hover:bg-primary-600 transition"
          >
            {quiz.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BeforeQuizPage;
