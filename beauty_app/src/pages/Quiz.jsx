import { useState } from "react";
import { QuizData } from "../quiz/quizData";
import Header from "../components/Header";

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (key) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestionIndex]: key,
    }));

    if (currentQuestionIndex < QuizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const calculateSkinType = () => {
    const answerCounts = { A: 0, B: 0, C: 0, D: 0 };

    Object.values(userAnswers).forEach((key) => {
      answerCounts[key]++;
    });

    const skinType = Object.keys(answerCounts).reduce((a, b) =>
      answerCounts[a] > answerCounts[b] ? a : b
    );

    const skinTypeLabels = {
      A: "Құрғақ тері",
      B: "Қалыпты тері",
      C: "Аралас тері",
      D: "Майлы тері",
    };

    return skinTypeLabels[skinType];
  };

  if (quizCompleted) {
    return (
      <>
      <Header/>
          <div className="w-full h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex flex-col justify-center items-center text-white absolute">
            <h2 className="text-3xl font-extrabold mb-6">Сіз аяқтадыңыз!</h2>
            <p className="text-2xl">
              Сіздің теріңіздің түрі:{" "}
              <span className="font-bold text-yellow-300">
                {calculateSkinType()}
              </span>
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-lg shadow-lg hover:bg-yellow-500 transition-all"
            >
              Қайта өту
            </button>
          </div>
      </>
     
    );
  }

  const currentQuestion = QuizData[currentQuestionIndex];

  return (
    <>
    <Header/>
    <div className="w-full h-screen rounded-md bg-gradient-to-br from-custom5 to-green-800 flex flex-col justify-center items-center text-white absolute">
      <div className="w-[90%] max-w-2xl bg-white rounded-lg shadow-lg p-6 text-center">
        <p className="text-2xl text-black font-semibold mb-8">{currentQuestion.question}</p>
        <div className="grid grid-cols-1 gap-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option.key)}
              className="bg-gray-200 text-gray-800 py-3 px-4 rounded-lg shadow-md hover:bg-gray-300 transition-all"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 text-gray-400">
        {currentQuestionIndex + 1} / {QuizData.length}
      </div>
    </div>
    </>
  );
}

export default Quiz;
