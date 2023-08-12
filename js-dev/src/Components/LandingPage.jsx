import React from 'react';
import { Link } from 'react-router-dom';
import Particle from './Particle';

const LandingPage = () => {
  return (
 <div>
 <Particle>
  
 </Particle>
     <div className='flex justify-center items-end min-h-screen pb-2 bg-slate-300'>
    <div className='landing-container font-rubik px-2'>
      {/* heading text */}
     <div className='texts '>
      <h1 className='text-2xl  font-bold'>Welcome to PopX</h1>
      <p className='text-base font-medium opacity-60
       pr-20 pt-2 pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
     </div>

{/* two button */}


     <div className='buttons grid grid-cols-1 gap-2'>
<Link to="/signup" className='bg-purple-600 text-gray-100 text-base font-medium p-2 rounded-md text-center'><button >Create Account</button></Link>
<Link to="/login" className='bg-purple-400 text-gray-800 
text-base font-medium bg-opacity-40
p-2 rounded-md text-center'><button >Already Registered? Login</button></Link>
     </div>
    </div>
    </div>
 </div>
  );
};

export default LandingPage;