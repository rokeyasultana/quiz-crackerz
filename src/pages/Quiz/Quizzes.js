import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';



const Quizzes = () => {
    const loaderData = useLoaderData();
   const quizzesData = loaderData.data; 
  
    return (
        <div data-aos="fade-up" data-aos-duration="1900"  className='grid place-items-center gap-3 mb-10 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 mt-10 '>
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