import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2";

export const getPokemonList = async (limit, offset) => {
  try {
    const response = await axios.get(`${baseUrl}/pokemon`, {
      params: {
        limit,
        offset,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error while fetching Pokemon list:", error);
    throw error;
  }
};

export const getPokemonDetails = async (pokemonName) => {
  try {
    const response = await axios.get(`${baseUrl}/pokemon/${pokemonName}`);
    return response.data;
  } catch (error) {
    console.error(
      `Error while fetching Pokemon details for ${pokemonName}:`,
      error
    );
    throw error;
  }
};

export const toggleFavoritePokemon = (pokemonName) => {
  let favorites = getFavoritePokemons();
  if (favorites.includes(pokemonName)) {
    favorites = favorites.filter((name) => name !== pokemonName);
  } else {
    favorites.push(pokemonName);
  }
  localStorage.setItem("favoritePokemons", JSON.stringify(favorites));
};

export const getFavoritePokemons = () => {
  const favorites = localStorage.getItem("favoritePokemons");
  if (favorites) {
    return JSON.parse(favorites);
  }
  return [];
};

export const isPokemonFavorite = (pokemonName) => {
  const favorites = getFavoritePokemons();
  return favorites.includes(pokemonName);
};
