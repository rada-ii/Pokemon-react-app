// export const toggleFavoritePokemon = (pokemonName) => {
//   let favorites = getFavoritePokemons();
//   if (isPokemonFavorite(pokemonName)) {
//     favorites = favorites.filter((name) => name !== pokemonName);
//   } else {
//     favorites.push(pokemonName);
//   }
//   localStorage.setItem("favoritePokemons", JSON.stringify(favorites));
// };

// export const getFavoritePokemons = () => {
//   const favorites = localStorage.getItem("favoritePokemons");
//   if (favorites) {
//     return JSON.parse(favorites);
//   }
//   return [];
// };

// export const getFavoritePokemons = () => {
//   const favorites = localStorage.getItem("favoritePokemons");
//   if (favorites) {
//     return JSON.parse(favorites).map((pokemonName) => ({ name: pokemonName }));
//   }
//   return [];
// };

// export const isPokemonFavorite = (pokemonName) => {
//   const favorites = getFavoritePokemons();
//   return favorites.includes(pokemonName);
// };

export const toggleFavoritePokemon = (pokemonName) => {
  let favorites = getFavoritePokemons();
  if (isPokemonFavorite(pokemonName)) {
    favorites = favorites.filter((pokemon) => pokemon.name !== pokemonName);
  } else {
    favorites.push({ name: pokemonName });
  }
  localStorage.setItem("favoritePokemons", JSON.stringify(favorites));
};

export const getFavoritePokemons = () => {
  const favorites = localStorage.getItem("favoritePokemons");
  if (favorites) {
    return JSON.parse(favorites).map((pokemon) => ({
      name: pokemon.name,
      img: `https://pokeapi.co/api/v2/pokemon/${pokemon.name}/sprites/front_default`,
    }));
  }
  return [];
};

export const isPokemonFavorite = (pokemonName) => {
  const favorites = getFavoritePokemons();
  return favorites.some((pokemon) => pokemon.name === pokemonName);
};
