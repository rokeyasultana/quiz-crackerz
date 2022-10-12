import React from 'react';

const QuizOption = ({option,handelQuiz,length}) => {

const number = length + 1

    return (
        <div className='text-left mt-2 ml-3'>
<input onClick={() => handelQuiz(option)} type="radio" name="radio-4" class="radio radio-accent" /> {number}. {option}
        </div>
    );
};

export default QuizOption;