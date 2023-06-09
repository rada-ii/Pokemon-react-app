export const toggleFavoritePokemon = (pokemonName) => {
  let favorites = getFavoritePokemons();
  if (isPokemonFavorite(pokemonName)) {
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
