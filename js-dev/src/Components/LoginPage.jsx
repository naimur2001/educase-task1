import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
   <div>
 <div className='flex justify-center items-center  pb-2'>
    <div className='landing-container font-rubik px-2'>
      {/* heading text */}
     <div className='texts '>
      <h1 className='text-2xl  font-bold pr-32 '>Signing to your PopX account</h1>
      <p className='text-base font-medium opacity-60
       pr-20 pt-2 pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
     </div>
     {/* input field */}
<form className='flex flex-col gap-4 mb-4'>
<div className='fromfield flex flex-col relative'>
  <label className='label'>
    <span className='absolute font-medium -top-3 left-4 bg-gray-100 text-purple-500'>Email Address</span>
  </label>
  <input className='p-3 border-2 border-gray-300 outline-none rounded-md bg-gray-100' type="email" name='email' placeholder='Enter email address' />
</div>
  {/* input field */}
<div className='fromfield flex flex-col relative'>
  <label className='label'>
    <span className='absolute font-medium -top-3 left-4 bg-gray-100 text-purple-500'>Password</span>
  </label>
  <input className='p-3 border-2 border-gray-300 outline-none rounded-md bg-gray-100' type="password" name='password' placeholder='Enter password' />
</div>
</form>
  {/* button */}
     <div className='buttons grid grid-cols-1 gap-2'>

<Link to="/login" className='bg-purple-400 text-gray-800 
text-base font-medium bg-opacity-40
p-2 rounded-md text-center'><button >Login</button></Link>
     </div>
    </div>
    </div>
   </div>
  );
};

export default LoginPage;
