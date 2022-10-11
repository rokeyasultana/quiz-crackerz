import React from 'react';
import "@lottiefiles/lottie-player";
import { Controls, Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import Blog from '../Blog/Blog';
import Quizzes from '../Quiz/Quizzes';

const Home = () => {
    return (
        <div>
            <section>
            <div className='mt-5'>
  
    <div data-aos="zoom-in-up" data-aos-duration="1500">
      <h1 className="text-5xl text-center font-bold text-left">Web Development <span className='text-cyan-600'>Quizzes</span> & Trivia</h1>
  </div>

  <div className='grid lg:grid-cols-2  sm:grid-cols-1 md:grid-cols-2 place-content-center'>
  <div className='mt-10'>
   <Player 
src='https://assets3.lottiefiles.com/private_files/lf30_66Pk1L.json'
className="player"
loop
autoplay
style={{ height: '500px', width: '400px' }}
/>
<Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
   </div>
<div>

  <div data-aos="fade-up" data-aos-duration="1900" className='mt-20 mr-20 ml-20'>
   <p  className='text-left '>The internet connects everyone nowadays and web development is a huge part of our society. <br></br>If you want to be well-known throughout the world then you should probably develop your own website or a web page. Our trivia on web development has questions about every aspect concerning web development nowadays and will test your knowledge on the matter. Can you face all these questions?</p>
    <br></br>
    <p className='text-left mt-5'>Check out these samples before you start: The LAMP solution stack consists of four services but what are their respective names? Which type of side coding is s executed and stored on a local client (in a web browser)? Which type of side coding is not available to a client and is executed on a web server which generates the appropriate XHTML which is then sent to the client? Become a success on the web and reach the top spot.</p>
   </div>
    </div>
  </div>
</div>
            </section>
<Quizzes></Quizzes>
        
        </div>
    );
};

export default Home;