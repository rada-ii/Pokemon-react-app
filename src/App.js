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

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Use setTimeout to simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
              <Route path="*" element={<NoResults />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
