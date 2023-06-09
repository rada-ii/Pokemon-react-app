import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getFavoritePokemons } from "../services/pokeApi";
import Card from "../components/Card";

const FavoritesPage = () => {
  const { pokemonName } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState([]);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const favoritePokemons = getFavoritePokemons();
        const promises = favoritePokemons.map(async (name) => {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${name}`
          );
          const { sprites } = response.data;
          console.log(sprites);
          const img = sprites.front_default;
          console.log(img);
          return {
            name: response.data.name,
            img: img,
          };
        });
        const details = await Promise.all(promises);
        setPokemonDetails(details);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    };

    fetchPokemonDetails();
  }, []);

  const favoritePokemons = getFavoritePokemons();

  return (
    <div className="container mt-4 mb-5">
      <h1>Favorite Pokemons</h1>
      <div className="row">
        {pokemonDetails.map((pokemon, img) => {
          if (favoritePokemons.includes(pokemon.name)) {
            return (
              <div className="col-md-4 mb-4" key={pokemon.name}>
                <Card pokemon={pokemon} img={img} />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default FavoritesPage;
