import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

const PokemonDetailsPage = () => {
  const { pokemonName } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
    abilities: [],
    weight: "",
  });

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(
          `${POKEAPI_BASE_URL}/pokemon/${pokemonName}`
        );

        const data = response.data;
        const details = {
          name: pokemonName,
          species: data.species.name,
          img: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padId(
            data.id
          )}.png`,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          type: data.types[0].type.name,
          abilities: data.abilities.map((ability) => ability.ability.name),
          weight: data.weight,
        };

        setPokemonDetails(details);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    };

    fetchPokemonDetails();
  }, [pokemonName]);

  const padId = (id) => {
    const paddedId = String(id).padStart(3, "0");
    return paddedId;
  };

  if (!pokemonDetails.name) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-8 d-flex justify-content-center align-items-center">
      <div className="card single">
        <div className="card-body">
          <h5 className="card-title">{pokemonDetails.name}</h5>

          <img
            src={pokemonDetails.img}
            alt={pokemonDetails.name}
            className="card-img-top"
          />
          <div className="card-text">
            <strong>Species:</strong> {pokemonDetails.species}
          </div>

          <div className="card-text">
            <strong>HP:</strong> {pokemonDetails.hp}
          </div>

          <div className="card-text">
            <strong>Attack:</strong> {pokemonDetails.attack}
          </div>

          <div className="card-text">
            <strong>Defense:</strong> {pokemonDetails.defense}
          </div>

          <div className="card-text">
            <strong>Type:</strong> {pokemonDetails.type}
          </div>

          <div className="card-text">
            <strong>Abilities:</strong> {pokemonDetails.abilities.join(", ")}
          </div>

          <div className="card-text">
            <strong>Weight:</strong> {pokemonDetails.weight} kg
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsPage;
