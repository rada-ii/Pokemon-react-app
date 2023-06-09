import React from "react";
import { getFavoritePokemons } from "../services/pokeApi";
import Card from "../components/Card";

const FavoritesPage = () => {
  const favoritePokemons = getFavoritePokemons();

  return (
    <div className="container mt-4 mb-5">
      <h1>Favorite Pokemons</h1>
      <div className="row">
        {favoritePokemons.map((pokemonName) => (
          <div className="col-md-4 mb-4" key={pokemonName}>
            <Card
              pokemon={{ name: pokemonName }}
              img={`https://pokeapi.co/media/sprites/pokemon/${pokemonName}.png`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
