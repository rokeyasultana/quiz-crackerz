import React from 'react';


const Quiz = ({data}) => {
    const { name,logo,total} = data;
    return (
        <div>
         <div class="card w-96 bg-cyan-600 shadow-xl">
  <figure><img className='mt-5' style={{height:"200px"}} src={logo} alt="logo" /></figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p class="card-title">Total: {total}</p>
    <div class="card-actions justify-center">
      <button class="btn btn-outline">Get Start</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Quiz;