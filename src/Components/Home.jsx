const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4">
      <div className="max-w-6xl w-full text-center py-12">
        <h1 className="text-5xl font-bold mb-8">Welcome to textUtils</h1>
        <p className="text-xl mb-8">
          Your ultimate text manipulation tool. Easily convert, analyze, and format your text with our intuitive and powerful application.
        </p>
        <div className="flex flex-wrap justify-center mb-12">
          <div className="m-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-72">
            <h2 className="text-2xl font-bold mb-4">Convert Text</h2>
            <p className="text-lg">
              Quickly convert your text to uppercase, lowercase, or capitalize each word with ease.
            </p>
          </div>
          <div className="m-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-72">
            <h2 className="text-2xl font-bold mb-4">Analyze Text</h2>
            <p className="text-lg">
              Get insights into your text with word count, character count, and more.
            </p>
          </div>
          <div className="m-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-72">
            <h2 className="text-2xl font-bold mb-4">Format Text</h2>
            <p className="text-lg">
              Format your text beautifully with various styling options.
            </p>
          </div>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md text-lg">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;
