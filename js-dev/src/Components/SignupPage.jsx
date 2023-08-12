import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div>
    <div className='flex justify-center items-center  pb-2'>
    <div className='landing-container font-rubik px-2'>
        {/* heading text */}
     <div className='texts '>
      <h1 className='text-2xl  font-bold pr-32 '>Create your PopX account</h1>
 
     </div>
     {/* input field */}
<form className='flex flex-col gap-8 my-5'>
<div className='fromfield flex flex-col relative'>
  <label className='label'>
    <span className='absolute font-medium  -top-3 left-4 bg-gray-100 text-purple-600'>Full Name<sup className='text-red-500 text-sm'>*</sup> </span>
  </label>
  <input className='p-3 border-2 border-gray-300 outline-none rounded-md bg-gray-100' type="text" name='name' placeholder='Enter full name' />
</div>
  {/* input field */}
<div className='fromfield flex flex-col relative'>
  <label className='label'>
    <span className='absolute font-medium  -top-3 left-4 bg-gray-100 text-purple-600'>Phone Number<sup className='text-red-500 text-sm'>*</sup> </span>
  </label>
  <input className='p-3 border-2 border-gray-300 outline-none rounded-md bg-gray-100' type="text" name='nambur' placeholder='Enter phone number' />
</div>
  {/* input field */}
<div className='fromfield flex flex-col relative'>
  <label className='label'>
    <span className='absolute font-medium  -top-3 left-4 bg-gray-100 text-purple-600'>Email Address<sup className='text-red-500 text-sm'>*</sup> </span>
  </label>
  <input className='p-3 border-2 border-gray-300 outline-none rounded-md bg-gray-100' type="email" name='email' placeholder='Enter email address' />
</div>
  {/* input field */}
<div className='fromfield flex flex-col relative'>
  <label className='label'>
    <span className='absolute font-medium  -top-3 left-4 bg-gray-100 text-purple-600'>Password<sup className='text-red-500 text-sm'>*</sup></span>
  </label>
  <input className='p-3 border-2 border-gray-300 outline-none rounded-md bg-gray-100' type="password" name='password' placeholder='Enter password' />
</div>
  {/* input field */}
<div className='fromfield flex flex-col relative'>
  <label className='label'>
    <span className='absolute font-medium  -top-3 left-4 bg-gray-100 text-purple-600'>Company Name<sup className='text-red-500 text-sm'>*</sup></span>
  </label>
  <input className='p-3 border-2 border-gray-300 outline-none rounded-md bg-gray-100' type="text" name='company' placeholder='Enter company name' />
</div>
  {/* input field */}
<div className='fromfield flex flex-col relative'>
  <label className='label'>
    <span className='font-medium bg-gray-100 '>Are you and Agency?<sup className='text-red-500 text-sm'>*</sup></span>
  </label>
  <div className='flex gap-6 '>
  <label>
        <input  
          type="radio" name="choice" value="yes"/>
        Yes
      </label>
  <label>
        <input
          type="radio" name="choice" value="no"/>
        No
      </label>
  </div>
  
</div>
</form>

 
    </div>
    </div>

  {/*button*/}
    <div className='buttons grid grid-cols-1 gap-2 fixed bottom-0 left-0 w-full px-2 pb-5 place-items-center'>

<Link to="/profile" className='bg-purple-600 text-white 
text-base font-medium 
p-2 rounded-md text-center inline-block lg:w-96 w-80 '>
  <button>Create Account</button>
</Link>

</div>






    </div>
  );
};

export default SignupPage;