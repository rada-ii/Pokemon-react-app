import React, { useEffect, useState } from "react";
import {
  getPokemonList,
  toggleFavoritePokemon,
  getFavoritePokemons,
  isPokemonFavorite,
} from "../services/pokeApi";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import SortInput from "../components/SortInput";
import Pagination from "../components/Pagination";
import NoResults from "./NoResults";
import ScrollButtons from "../components/ScrollButtons";

const LandingPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [favoritePokemons, setFavoritePokemons] = useState([]);

  useEffect(() => {
    fetchPokemonList(currentPage);
    setFavoritePokemons(getFavoritePokemons());
  }, [currentPage]);

  const fetchPokemonList = async (page) => {
    const limit = 24;
    // const offset = (page - 1) * limit;
    const response = await getPokemonList(864);
    setPokemonList(response.results);
    const totalPagesCount =
      displayedPokemonList.length > 0
        ? Math.round(displayedPokemonList.length / limit)
        : Math.round(response.results.length / limit);
    setTotalPages(36);
    console.log(response.results.length);
  };

  const handlePaginationClick = (page) => {
    if (page < 1 || page > totalPages) {
      return; // Ignore invalid page numbers
    }
    setCurrentPage(page);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(currentPage);
  };

  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(currentPage);
  };

  const handleFavoriteClick = (pokemonName) => {
    toggleFavoritePokemon(pokemonName);
    setFavoritePokemons(getFavoritePokemons());
  };

  const filterPokemonList = (list) => {
    let filteredList = list;

    if (searchQuery) {
      filteredList = list.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortOption === "name-asc") {
      filteredList.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "name-desc") {
      filteredList.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      filteredList.sort((a, b) => a.url.localeCompare(b.url));
    }

    return filteredList;
  };

  const displayedPokemonList = filterPokemonList(
    pokemonList.slice((currentPage - 1) * 24, currentPage * 24)
  );
  const showPagination =
    displayedPokemonList.length > 1 && totalPages > 1 && totalPages !== 1;

  return (
    <div className="container mt-4 mb-5 landing-page-container">
      <div className="row mb-3">
        <div className="col-md-6">
          <SearchBar
            value={searchQuery}
            onChange={handleSearchInputChange}
            onClear={() => setSearchQuery("")}
          />
        </div>
        <div className="col-md-6">
          <SortInput value={sortOption} onChange={handleSortOptionChange} />
        </div>
      </div>

      {displayedPokemonList.length > 0 ? (
        <div className="row">
          {displayedPokemonList.map((pokemon) => (
            <div
              className={`col-md-${
                displayedPokemonList.length === 1 ? "12 " : "4"
              } mb-4`}
              key={pokemon.name}
            >
              <Card
                pokemon={pokemon}
                isFavorite={isPokemonFavorite(pokemon.name)}
                onFavoriteClick={handleFavoriteClick}
                singleCard={displayedPokemonList.length === 1}
              />
            </div>
          ))}
        </div>
      ) : (
        <NoResults />
      )}

      {showPagination && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageClick={handlePaginationClick}
        />
      )}
      <ScrollButtons />
    </div>
  );
};

export default LandingPage;
