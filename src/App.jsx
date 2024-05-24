// import Navbar from "./Components/Navbar";
// import TextManipulator from "./Components/TextManipulator";
// import Home from "./Components/Home";
// import Aboutus from './Components/Aboutus'
// import Contact from './Components/Contact'
// import { RouterProvider, createBrowserRouter } from "react-router-dom";

// function App() {
//   const router=createBrowserRouter([
//     {
//       path:"/",
//       element:<> <Navbar/> <TextManipulator/> </>
//     },
//     {
//       path:"/aboutus",
//       element:<> <Navbar/> <Aboutus/> </>
//     },
//     {
//       path:"/Home",
//       element:<> <Navbar/> <Home/> </>
//     },
//     {
//       path:"/Contact",
//       element:<> <Navbar/> <Contact/> </>
//     },

//   ])

//   return (
//     <RouterProvider router={router} className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
//         <App/>
//     </RouterProvider>

//   );
// }

// export default App;

import { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import TextManipulator from "./Components/TextManipulator";
import Home from "./Components/Home";
import Aboutus from "./Components/Aboutus";
import Contact from "./Components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <TextManipulator />
        </>
      ),
    },
    {
      path: "/aboutus",
      element: (
        <>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Aboutus />
        </>
      ),
    },
    {
      path: "/Home",
      element: (
        <>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Home />
        </>
      ),
    },
    {
      path: "/Contact",
      element: (
        <>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Contact />
        </>
      ),
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
