import React from 'react';
import { Link } from 'react-router-dom';
import { faArrowAltCircleRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Quiz = ({data}) => {
    const {id, name,logo,total} = data;
    return (
        <div>
         <div   class="card w-64 bg-cyan-500 shadow-xl">
  <figure><img className='mt-5' style={{height:"200px"}} src={logo} alt="logo" /></figure>
  <div class="card-body">
    <h2 class="text-center text-xl">{name}</h2>
    <p class="text-center text-xl">Total: {total}</p>
    <div class="card-actions justify-center">
    <Link to={`../quizDetails/${id}`}> <button class="btn btn-outline">Get Start <FontAwesomeIcon icon={faArrowAltCircleRight}  />
    </button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Quiz;