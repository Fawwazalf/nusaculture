"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    correctAnswer: "Paris",
  },
];

const page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    new Array(questions.length).fill("")
  );
  const [score, setScore] = useState(null);
  const router = useRouter();

  const generateNumberColors = () => {
    const colors = new Array(questions.length).fill("#D6CEBA");
    for (let i = 0; i < currentQuestion; i++) {
      colors[i] = "#725035";
    }
    return colors;
  };

  const [numberColors, setNumberColors] = useState(generateNumberColors());

  useEffect(() => {
    setNumberColors(generateNumberColors());
  }, [currentQuestion]);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const userScore = calculateScore();
      console.log(userScore);
      setScore(userScore);

      router.push(`/quiz/results?score=${userScore}`);
    }
  };

  const handleAnswer = (answer) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestion] = answer;
    setUserAnswers(updatedUserAnswers);
  };

  const calculateScore = () => {
    let userScore = 0;

    userAnswers.forEach((userAnswer, index) => {
      if (userAnswer === questions[index].correctAnswer) {
        userScore += 20;
      }
    });

    return userScore;
  };

  return (
    <div className="bg-[#181818]">
      <Navigation/>
      <div className="w-full h-screen flex justify-center items-center pt-[30px]">
        <div className="mr-[100px]">
          <div className="flex flex-col items-center">
          {numberColors.map((color, index) => (
              <div key={index} className={`flex flex-col items-center mt-[10px]`}>
                <div className={`h-[55px] w-[8px] bg-[${color}]`}></div>
                {color === "#725035" ? (
                  <div className="w-[64px] h-[64px] bg-[#725035] rounded-full text-[22px] font-semibold text-[#D6CEBA] flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <g clip-path="url(#clip0_437_505)">-0p--p
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.728 6.81476C29.103 7.18981 29.3136 7.69843 29.3136 8.22876C29.3136 8.75908 29.103 9.2677 28.728 9.64275L13.7373 24.6334C13.5392 24.8316 13.304 24.9888 13.0452 25.096C12.7863 25.2032 12.5089 25.2584 12.2287 25.2584C11.9485 25.2584 11.671 25.2032 11.4122 25.096C11.1533 24.9888 10.9181 24.8316 10.72 24.6334L3.27201 17.1868C3.08099 17.0023 2.92863 16.7816 2.82381 16.5376C2.71899 16.2936 2.66382 16.0311 2.66151 15.7656C2.65921 15.5 2.70981 15.2366 2.81037 14.9908C2.91093 14.7451 3.05944 14.5217 3.24722 14.334C3.43501 14.1462 3.65831 13.9977 3.90411 13.8971C4.1499 13.7965 4.41326 13.7459 4.67882 13.7483C4.94438 13.7506 5.20682 13.8057 5.45082 13.9106C5.69483 14.0154 5.91552 14.1677 6.10001 14.3588L12.228 20.4868L25.8987 6.81476C26.0844 6.6289 26.305 6.48147 26.5477 6.38088C26.7904 6.28029 27.0506 6.22852 27.3134 6.22852C27.5761 6.22852 27.8363 6.28029 28.079 6.38088C28.3217 6.48147 28.5423 6.6289 28.728 6.81476Z" fill="#D6CEBA"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_437_505">
                          <rect width="32" height="32" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                ) : (
                  <div className={`h-[64px] w-[64px] bg-[${color}] rounded-full text-[22px] font-semibold text-[#725035] flex justify-center items-center`}>
                    {index + 1}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <div className="w-full flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="30"
              viewBox="0 0 26 30"
              fill="none"
            >
              <path
                d="M17.8592 8.25617C19.702 10.9646 22.3215 16.2087 20.7642 20.5319C20.198 19.0112 18.1632 16.8567 16.9626 15.9581C15.3055 14.7178 13.2376 13.9463 10.9667 14.1592C7.90802 14.4461 4.1676 14.2695 2.42926 11.8218C1.3498 10.3019 1.74315 8.06264 3.08168 6.21764C4.46196 4.31508 7.19721 3.41203 9.1164 3.49795C12.8283 3.66413 15.9775 5.49065 17.8592 8.25617Z"
                fill="#DCD7C9"
              />
              <path
                d="M16.7854 20.2854C17.9293 21.9665 19.5552 25.2216 18.5886 27.9051C18.2371 26.9611 16.9741 25.6238 16.2288 25.066C15.2003 24.2962 13.9167 23.8173 12.5071 23.9495C10.6085 24.1275 8.28681 24.0179 7.2078 22.4986C6.53777 21.5552 6.78193 20.1652 7.61277 19.02C8.46953 17.8391 10.1673 17.2785 11.3586 17.3319C13.6626 17.435 15.6174 18.5688 16.7854 20.2854Z"
                fill="#DCD7C9"
              />
            </svg>
            <div className="mx-[10px]">
              <p className="text-[40px] text-[#D6CEBA] font-semibold">
                PERTANYAAN
              </p>
              <div className="w-[225px] h-[3px] bg-[#725035] rounded-full mx-auto"></div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="30"
              viewBox="0 0 26 30"
              fill="none"
            >
              <path
                d="M17.8592 8.25617C19.702 10.9646 22.3215 16.2087 20.7642 20.5319C20.198 19.0112 18.1632 16.8567 16.9626 15.9581C15.3055 14.7178 13.2376 13.9463 10.9667 14.1592C7.90802 14.4461 4.1676 14.2695 2.42926 11.8218C1.3498 10.3019 1.74315 8.06264 3.08168 6.21764C4.46196 4.31508 7.19721 3.41203 9.1164 3.49795C12.8283 3.66413 15.9775 5.49065 17.8592 8.25617Z"
                fill="#DCD7C9"
              />
              <path
                d="M16.7854 20.2854C17.9293 21.9665 19.5552 25.2216 18.5886 27.9051C18.2371 26.9611 16.9741 25.6238 16.2288 25.066C15.2003 24.2962 13.9167 23.8173 12.5071 23.9495C10.6085 24.1275 8.28681 24.0179 7.2078 22.4986C6.53777 21.5552 6.78193 20.1652 7.61277 19.02C8.46953 17.8391 10.1673 17.2785 11.3586 17.3319C13.6626 17.435 15.6174 18.5688 16.7854 20.2854Z"
                fill="#DCD7C9"
              />
            </svg>
          </div>
          <p className="w-full text-white text-[22px] font-semibold mt-[50px] text-center">
            {questions[currentQuestion].question}
          </p>
          <div className="options-container flex flex-wrap w-[855px] justify-between mt-[50px]">
            {questions[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className={`option ${
                  userAnswers[currentQuestion] === option ? "selected " : ""
                } bg-[#DCD7C9] text-[20px] text-[#725035] w-[405px] h-[65px] rounded-[100px] flex justify-center items-center font-semibold mb-[25px] hover:bg-[#725035] hover:text-[#DCD7C9] focus:bg-[#725035] focus:text-[#DCD7C9] cursor-pointer`}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center mt-[30px]">
            <button
              className="bg-[#FFF9E9]/10 border-2 border-[#FFF9E9] text-white text-[18px] font-medium w-[230px] h-[50px] rounded-[100px] hover:border-[#725035]"
              onClick={handleNext}
            >
              {currentQuestion < questions.length - 1 ? "Selanjutnya" : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
