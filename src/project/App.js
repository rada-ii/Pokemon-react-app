import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage ";
import About from "./components/About";
import NoResults from "./pages/NoResults";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FavoritesPage from "./components/FavoritesPage";

// The import statements are used to import necessary modules and components for the application. In this code, React, useEffect, useState, BrowserRouter, Route, Routes, and various custom components are imported. The CSS files for Bootstrap and the App component are also imported.

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  // This line defines a functional component called App. It uses the useState hook to declare a state variable isLoading and a function setIsLoading to update its value. The initial value of isLoading is true.
  useEffect(() => {
    // Use setTimeout to simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  //This block of code uses the useEffect hook to perform side effects in the component. In this case, it simulates a loading screen by setting isLoading to false after a delay of 2000 milliseconds (2 seconds). The useEffect hook is invoked only once (as the dependency array [] is empty), equivalent to componentDidMount in class components.
  return (
    <Router>
      <div className="App">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route
                path="/pokemon/:pokemonName"
                element={<PokemonDetailsPage />}
              />
              <Route path="/about" element={<About />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="*" element={<NoResults />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};
// This is the main part of the App component. It contains the JSX (HTML-like syntax) code that defines the structure of the application.
// <Router> is a wrapper component from React Router that enables routing functionality in the application.
// The component is enclosed in a <div> element with a class name of "App".
// Inside the <div>, there's a conditional rendering logic based on the isLoading state variable.
// If isLoading is true, it renders the <LoadingScreen /> component.
// If isLoading is false, it renders the main content of the application, which includes:
// The <Header /> component.
// The <Routes> component, which acts as a container for multiple <Route> components.
// <Route> components are used to define the routes and their corresponding components.
// The path prop specifies the URL path for a specific route.
// The element prop defines the component to render when the route matches the current URL.
// For example, if the current URL is "/", it renders the <LandingPage /> component.
// The <PokemonDetailsPage />, <About />, <FavoritesPage />, and <NoResults /> components are also associated with their respective routes.
// The <Footer /> component.

export default App;
// This line exports the App component as the default export, allowing it to be imported and used in other parts of the application.

// useState:

// The line const [isLoading, setIsLoading] = useState(true); declares a state variable called isLoading and its corresponding setter function setIsLoading. The initial value of isLoading is set to true.
// The useState hook is a built-in hook in React that allows functional components to manage state. It returns an array with two elements: the current state value and a function to update the state.
// useEffect:

// The block of code starting with useEffect(() => { and ending with }, []); is an example of using the useEffect hook.
// The useEffect hook is used to perform side effects in a functional component. It runs after the component renders and re-renders.
// In this code, the useEffect hook is used to simulate a loading screen. It sets isLoading to false after a delay of 2000 milliseconds (2 seconds).
// The empty dependency array [] as the second argument to useEffect ensures that the effect runs only once, similar to the componentDidMount lifecycle method in class components.
// React Router:

// The line import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; imports the necessary components from the React Router library.
// The <Router> component is used as a wrapper around the entire application, enabling routing functionality.
// Inside the <Router> component, the <Routes> component is used as a container for multiple <Route> components.
// Each <Route> component defines a route and the corresponding component to render when that route is matched.
// For example, <Route path="/" element={<LandingPage />} /> specifies that when the URL path is "/", the <LandingPage /> component should be rendered.
// The other <Route> components define routes for displaying the Pokemon details page, about page, favorites page, and handling any other undefined routes (<NoResults /> component).
// Overall, this code demonstrates how to use useState to manage a loading state, useEffect to perform side effects, and React Router to handle routing and rendering of different components based on the URL path.
