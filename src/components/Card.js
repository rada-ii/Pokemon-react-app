import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  toggleFavoritePokemon,
  getFavoritePokemons,
  isPokemonFavorite,
} from "../services/pokeApi";

const Card = ({ pokemon }) => {
  const [favoritePokemons, setFavoritePokemons] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [pokemonImage, setPokemonImage] = useState("");

  useEffect(() => {
    const favorites = getFavoritePokemons();
    setFavoritePokemons(favorites);
    setIsFavorite(isPokemonFavorite(pokemon.name));
  }, [pokemon.name]);

  useEffect(() => {
    // Fetch and set the Pokémon image
    const fetchPokemonImage = async () => {
      if (pokemon.url) {
        const paddedIndex = pokemon.url.split("/")[6];
        const index = String(paddedIndex).padStart(3, "0");
        const imageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${index}.png`;
        setPokemonImage(imageUrl);
      }
    };

    fetchPokemonImage();
  }, [pokemon.url]);

  const handleFavoriteClick = (pokemonName) => {
    toggleFavoritePokemon(pokemonName);
    setIsFavorite(!isFavorite);
    setFavoritePokemons((prevFavorites) => {
      if (prevFavorites.includes(pokemonName)) {
        return prevFavorites.filter((name) => name !== pokemonName);
      } else {
        return [...prevFavorites, pokemonName];
      }
    });
  };

  return (
    <div className="card">
      <div className="card-header">
        {isFavorite && (
          <span className="heart" role="img" aria-label="heart">
            ❤️
          </span>
        )}
      </div>
      <h5 className="card-title">{pokemon.name}</h5>
      <div className="card-image">
        {pokemonImage ? (
          <img
            src={pokemonImage}
            alt={pokemon.name}
            className="pokemon-image"
          />
        ) : (
          <div className="loading">Loading image...</div>
        )}
      </div>
      <div className="card-body"></div>
      <div className="card-footer">
        <button
          className={`btn ${isFavorite ? "btn-remove" : "btn-add"}`}
          onClick={() => handleFavoriteClick(pokemon.name)}
        >
          {isFavorite ? "Remove Favorite" : "Add Favorite"}
        </button>
        <Link to={`/pokemon/${pokemon.name}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
