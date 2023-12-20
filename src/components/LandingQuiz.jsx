import Image from "next/image";
import QuizDesc from "./QuizDesc";

const LandingQuiz = () => {
  return (
    <div className="h-screen w-full flex flex-col lg:flex-row justify-center items-center gap-[35px] lg:gap-[70px]">
      <Image
        src="/quizImg.png"
        width={438.96}
        height={458.78}
        quality={100}
        className="w-[80%] max-w-[350px] sm:min-w-[350px] sm:h-[368px] lg:min-w-[438.96px] lg:h-[458.78px]"
      />

      <div>
        <QuizDesc />
      </div>
    </div>
  );
};

export default LandingQuiz;
