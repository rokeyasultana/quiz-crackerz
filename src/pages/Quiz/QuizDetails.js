import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizInfo from './QuizInfo';

const QuizDetails = () => {

    const quiz = useLoaderData().data;
 

    const quizQuestion = quiz.questions;
   

    return (

        <div>
            <h2 className='text-5xl mt-5 text-cyan-500 font-bold'>Quiz of {quiz.name}</h2>

            <div className='mt-10 justify-center justify-items-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 '> 
            {quizQuestion.map((quiz, length) => (
            <QuizInfo
              key = {quiz.id}
              length ={length}
              quiz={quiz}
            ></QuizInfo>
          ))}
            </div>
        </div>
    );
};

export default QuizDetails;