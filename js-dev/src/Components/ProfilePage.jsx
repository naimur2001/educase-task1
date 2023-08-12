import React from 'react';

const ProfilePage = () => {
  return (
    <div className='flex justify-center items-center  pb-2'>
  <div className='texts '>
      <h1 className='text-2xl  font-bold pr-32 '>Account Settings</h1>
     <div className=' flex flex-col  bg-slate-100 border-2  '>
     <div className='flex justify-start items-center  '>
        <div className='relative p-4'>
          <img className='w-20 h-20 rounded-full' src="https://educase.io/wp-content/uploads/2022/05/1594317847944.webp" alt="Alok" />
          <span className='absolute bottom-6 left-20'><svg xmlns="http://www.w3.org/2000/svg" fill="purple" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
</svg>
</span>
        </div>
        <div>
          <h1 className='font-medium text-lg'>Alok Doe</h1>
          <p className='font-medium text-gray-500'>Alok@educase.com</p>
      
        </div>

      </div>
      <div className='max-w-md'>
      <p className='p-4 text-xs font-medium text-gray-500'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
      </div>
     </div>
     
     </div>
     
    </div>
  );
};

export default ProfilePage;