import { useNavigate } from "react-router-dom";

const NoResults = () => {
  return (
    <div className="container no">
      <h3 className="sad">
        We couldn't find any pokemons matching your search! Try again?
      </h3>
    </div>
  );
};

export default NoResults;
