const Aboutus = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-lg mb-4">
            Welcome to <span className="font-bold text-indigo-600 dark:text-indigo-400">textUtils</span>, your go-to application for all your text conversion needs. Whether you are a student, a professional, or just someone who frequently works with text, textUtils provides a comprehensive suite of tools designed to make your life easier.
          </p>
          <p className="text-lg mb-4">
            Our mission is to offer a simple, user-friendly platform that allows you to perform various text manipulations with ease. From converting text to uppercase, lowercase, or capitalizing it, to more advanced features like text formatting and analysis, textUtils is here to help.
          </p>
          <p className="text-lg mb-4">
            At textUtils, we believe in the power of simplicity and efficiency. Our intuitive interface ensures that you can quickly and easily access the tools you need without any hassle. We are constantly updating and improving our features based on user feedback to ensure that we meet the evolving needs of our users.
          </p>
          <p className="text-lg mb-4">
            Thank you for choosing textUtils. We hope our app helps you in your daily tasks and enhances your productivity. If you have any questions, suggestions, or feedback, please feel free to reach out to us.
          </p>
          <p className="text-lg font-semibold text-center text-indigo-600 dark:text-indigo-400">
            Happy Text Manipulating!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
