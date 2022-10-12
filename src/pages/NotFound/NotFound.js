import React from 'react';
import "@lottiefiles/lottie-player";
import { Controls, Player } from '@lottiefiles/react-lottie-player';
const NotFound = () => {
    return (
        <div >
<div>
    <h2 className='text-5xl mt-10 text-cyan-500'>Opps!!! Page Not Found</h2>
</div>
<div className='mt-10'>
   <Player 
src='https://assets9.lottiefiles.com/packages/lf20_830fdC.json'
className="player"
loop
autoplay
style={{ height: '600px', width: '600px' }}
/>
<Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
   </div>
        </div>
    );
};

export default NotFound;