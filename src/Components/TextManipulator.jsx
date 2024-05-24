import { useState } from 'react';

const TextManipulator = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const convertToUpperCase = () => {
    setOutputText(inputText.toUpperCase());
  };

  const convertToLowerCase = () => {
    setOutputText(inputText.toLowerCase());
  };

  const clearText = () => {
    setInputText('');
    setOutputText('');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
    alert('Text copied to clipboard!');
  };

  const removeExtraSpaces = () => {
    const formattedText = inputText.replace(/\s+/g, ' ');
    setInputText(formattedText);
  };

  return (
    <div className="max-w-md mx-auto p-4">
        <h1 className='text-2xl font-bold text-center'>TextUtis - Word Counter, Charecter Counter, Remove Extra Space
</h1>
      <div className="flex mb-4 gap-3">
        
        <textarea
          className="w-2/3 h-40 border rounded-md resize-none p-2 mr-2"
          placeholder="Enter text..."
          value={inputText}
          onChange={handleInputChange}
        ></textarea>
        <div className="flex flex-col justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mb-2 focus:outline-none"
            onClick={convertToUpperCase}
          >
            Upper Case
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mb-2 focus:outline-none"
            onClick={convertToLowerCase}
          >
            Lower Case
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mb-2 focus:outline-none"
            onClick={clearText}
          >
            Clear Text
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md`}
            onClick={copyToClipboard}
    
          >
            Copy to Clipboard
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mb-2 focus:outline-none"
            onClick={removeExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <textarea
        className="w-2/3 h-40 border rounded-md resize-none p-2"
        placeholder="Output text..."
        value={outputText}
       
      ></textarea>
    </div>
  );
};

export default TextManipulator;
