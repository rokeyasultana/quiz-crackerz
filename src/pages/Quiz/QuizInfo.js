import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faEye} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QuizOption from './QuizOption';


const QuizInfo = ({quiz,length}) => {

    let quantity = length + 1;

    const handelQuiz = (option) => {

        if(quiz.correctAnswer === option){
          toast.success('Correct Answer');

        }

        else{
            toast.error('Wrong Answer');
        }
    }

    const quizVisibility = () => {

        toast.info(quiz.correctAnswer);

    }

    return (
        <div  className='card  w-96 border-2 border-cyan-500 shadow-xl'>
          <h1>Quiz No:{quantity} {quiz.question.slice(3,-4)} </h1>
        
        <div>
    <div>
   
    </div>
        </div>

<div  >
{quiz.options.map((option, length) => (
        <QuizOption
          option={option}
          handelQuiz={ handelQuiz}
          length={length}
        ></QuizOption>
      ))}
</div>

<div>

<span>Show correct answer : <small onClick={()=> quizVisibility()}>   
        <FontAwesomeIcon icon={faEye} color='red' />
        </small></span> 
          
</div>
<ToastContainer />
        </div>
    );
};

export default QuizInfo;