import React from 'react';

const QuizOption = ({option,handelQuiz,length}) => {

const number = length + 1

    return (
        <div>
             <button
           type="radio"
            onClick={() => handelQuiz(option)}
            className="flex border-2 border-cyan-500 p-3 sm:py-4 lg:py-6 w-80 mt-3 mb-5 mx-auto text-left"
          >
{number}. {option}
            </button>
        </div>
    );
};

export default QuizOption;