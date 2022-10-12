import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';



const Quizzes = () => {
    const loaderData = useLoaderData();
   const quizzesData = loaderData.data; 
    // console.log(quizzesData);
    return (
        <div className='grid h-screen place-items-center gap-3 mb-10 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 mt-10 '>
{
    quizzesData.map(data =>(
        <Quiz
        key={data.id}
        data ={data}
        >

        </Quiz>
    ))
}
      

       </div>
    );
};

export default Quizzes;