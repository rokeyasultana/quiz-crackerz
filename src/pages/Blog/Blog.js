import React from 'react';
import "@lottiefiles/lottie-player";
import { Controls, Player } from '@lottiefiles/react-lottie-player';
const Blog = () => {
    return (
        <div>
          <div>
      <div className='mt-5'>
      <Player 
src='https://assets7.lottiefiles.com/private_files/lf30_gqwdpikn.json'
className="player"
loop
autoplay
style={{ height: '300px', width: '600px' }}
/>
<Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
       
      </div>
      
      <div className='justify-center justify-items-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-20 mb-35  gap-4  text-black '>
      <div >
      <div class="card  card-compact w-96 shadow-xl border-2 border-cyan-500">
  
  <div class="card-body">
    <h2 class="card-title">what is the purpose of react router</h2>
<p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. Let us create a simple application to React to understand how the React Router works.</p>
    
  </div>
</div>
      </div>
      <div>
      <div class="card  card-compact w-96 shadow-xl border-2 border-cyan-500">
  
  <div class="card-body">
    <h2 class="card-title">How does context api works</h2>
    <p>
    Context API is a React API that can solve a lot of problems that modern applications face related to state management and how they’re passing state to their components. Instead of installing a state management library in your project that will eventually cost your project performance and increase your bundle size, you can easily go with Context API and be fine with it.
</p>
    
  </div>
</div>
      </div>
      <div>
      <div class="card  card-compact w-96  shadow-xl border-2 border-cyan-500">
  
  <div class="card-body">
    <h2 class="card-title">What is useRef</h2>
    <p>The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
    
  </div>
</div>
      </div>
      
      </div>
      </div>
        </div>
    );
};

export default Blog;