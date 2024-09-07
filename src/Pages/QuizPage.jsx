import React from "react";
import Quiz from "../Components/Quiz";

const QuizPage = () => {
  const questions = [
    {
      id: "q1",
      text: "What is a React fragment?",
      options: [
        "A way to group multiple elements without adding an extra node to the DOM",
        "A part of the React library for animations",
        "A method for managing global state",
        "A tool for optimizing performance",
      ],
      correctAnswer:
        "A way to group multiple elements without adding an extra node to the DOM",
    },
    {
      id: "q2",
      text: "What is React Router used for?",
      options: [
        "To manage navigation between different views in a React application",
        "To handle global state management",
        "To perform animations",
        "To apply CSS styles",
      ],
      correctAnswer:
        "To manage navigation between different views in a React application",
    },
    {
      id: "q3",
      text: "What does the useRef hook in React do?",
      options: [
        "Creates a mutable object that persists across renders",
        "Triggers re-renders when the referenced value changes",
        "Manages state in functional components",
        "Applies styles to elements",
      ],
      correctAnswer: "Creates a mutable object that persists across renders",
    },
    {
      id: "q4",
      text: "What is a React component?",
      options: [
        "A function or class that returns a piece of UI",
        "A CSS style",
        "A JavaScript variable",
        "An HTML element",
      ],
      correctAnswer: "A function or class that returns a piece of UI",
    },
    {
      id: "q5",
      text: "What is JSX in React?",
      options: [
        "A JavaScript syntax extension that looks similar to XML or HTML",
        "A CSS preprocessor",
        "A type of JavaScript variable",
        "A React component",
      ],
      correctAnswer:
        "A JavaScript syntax extension that looks similar to XML or HTML",
    },
    {
      id: "q6",
      text: "What is the purpose of the 'key' prop in React?",
      options: [
        "To uniquely identify elements in a list",
        "To style an element",
        "To pass data to the component",
        "To trigger an event",
      ],
      correctAnswer: "To uniquely identify elements in a list",
    },
    {
      id: "q7",
      text: "What is the purpose of the useState hook in React?",
      options: [
        "To manage state in functional components",
        "To handle routing in React",
        "To apply styles",
        "To create a new component",
      ],
      correctAnswer: "To manage state in functional components",
    },
    {
      id: "q8",
      text: "Which of the following is NOT a lifecycle method in React?",
      options: [
        "componentWillMount",
        "componentDidUpdate",
        "componentWillReceiveProps",
        "componentWillUnmount",
      ],
      correctAnswer: "componentWillReceiveProps",
    },
    {
      id: "q9",
      text: "What is the virtual DOM in React?",
      options: [
        "A lightweight copy of the actual DOM",
        "A tool to manage state",
        "A JavaScript library for UI development",
        "An actual copy of the browser DOM",
      ],
      correctAnswer: "A lightweight copy of the actual DOM",
    },
    {
      id: "q10",
      text: "What does 'lifting state up' in React mean?",
      options: [
        "Moving state to a common ancestor to share it between components",
        "Storing state in local storage",
        "Using the useState hook",
        "Passing state down to a child component",
      ],
      correctAnswer:
        "Moving state to a common ancestor to share it between components",
    },
    {
      id: "q11",
      text: "What is the purpose of the useEffect hook in React?",
      options: [
        "To perform side effects in functional components",
        "To handle component state",
        "To apply styles to components",
        "To manage global state",
      ],
      correctAnswer: "To perform side effects in functional components",
    },
    {
      id: "q12",
      text: "Which method is used to update state in a React class component?",
      options: ["setState", "useState", "updateState", "changeState"],
      correctAnswer: "setState",
    },
    {
      id: "q13",
      text: "What is the difference between state and props in React?",
      options: [
        "State is mutable, props are immutable",
        "Props are mutable, state is immutable",
        "Both state and props are mutable",
        "State is for class components, props are for functional components",
      ],
      correctAnswer: "State is mutable, props are immutable",
    },
    {
      id: "q14",
      text: "What does React.StrictMode do?",
      options: [
        "Helps to identify potential problems in an application",
        "Strictly enforces types in JavaScript",
        "Makes the application faster",
        "Prevents components from rendering",
      ],
      correctAnswer: "Helps to identify potential problems in an application",
    },
    {
      id: "q15",
      text: "What is the significance of the render method in React?",
      options: [
        "It defines the UI of a component",
        "It sets the initial state of the component",
        "It triggers an update in the component",
        "It adds event listeners to the component",
      ],
      correctAnswer: "It defines the UI of a component",
    },
  ];

  return (
    <div>
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold p-6">WelCome To Quiz</h1>
        <Quiz questions={questions} />
      </div>
    </div>
  );
};

export default QuizPage;
