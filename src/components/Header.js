import React from "react";
import { Link } from "react-router-dom";
import RefreshIcon from "@mui/icons-material/Refresh";
// import FavoritesPage from "./components/FavoritesPage";
// import App from "../App";

const Header = () => {
  return (
    <header className="bg-primary text-white p-3 header">
      <div className="container header">
        <h1 className="mr-auto ">
          <Link to="/">
            <img
              src={process.env.PUBLIC_URL + "/logo1.png"}
              alt="Logo"
              className="logo"
            />
          </Link>
        </h1>
        <nav>
          <a href="/" className="text-white mx-2">
            Home
          </a>
          <Link to="/about" className="text-white mx-2">
            About
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="text-white mx-2 icon"
          >
            <RefreshIcon style={{ fontSize: 45 }} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
