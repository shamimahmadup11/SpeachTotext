import React from 'react';
import Dictaphone from './Dictaphone';
import clipboard_icon from './assets/clipboard_icon.png';

function App() {
  return (
    <div className='w-[80%] flex flex-col items-center gap-6'>
      <h1 className='text-5xl font-semibold text-center tracking-wider'>Speech to Text Converter</h1>
      <h2 className='text-lg text-center tracking-wider text-[rgb(96,101,123)]'>A React hook that converts speech from the microphone to text and makes it available to your React components.</h2>
      
      <div className='w-[800px] relative h-[400px] rounded-2xl shadow-2xl'>
        <img src={clipboard_icon} height={50} width={50} className='absolute right-0 top-0 hover:cursor-pointer' alt="" />
        <div id="displayBox" className='flex justify-center capitalize text-[24px]  items-center h-[340px]'>
          {/* Display the transcript here */}
        </div>

        <div id="buttonBox" className='h-[60px] px-8 flex justify-between items-center pb-8'>
          {/* Render the Dictaphone component */}
          <Dictaphone />
        </div>
      </div>
    </div>
  );
}

export default App;
