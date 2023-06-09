import React from "react";

function About() {
  return (
    <div className="container about">
      <h1 className="about-title">About</h1>
      <p>
        The objective of this project is to create a web application using
        React.js that interacts with the PokeAPI (https://pokeapi.co/). The
        application will consist of two pages: the Landing Page, which displays
        a grid of Pokémon cards, and the Pokemon Info Page, which shows detailed
        information about a specific Pokémon. The project should display the
        first 864 Pokémon characters across 36 pages, with 24 Pokémon cards on
        each page. The pagination should always display three buttons, with the
        active button being in the center except on the first and last pages.
        Additionally, the project should include features such as search
        functionality, the ability to mark favorite Pokémon, and persistent data
        storage using Local Storage. The final project should be hosted on
        GitHub as a public repository.
        <hr />
        Pages:
        <hr />
        1. Landing Page: - Displays a grid of Pokémon cards, each representing a
        Pokémon. - Each page should contain 24 Pokémon cards. - Implement
        pagination to navigate between pages. - The pagination should always
        display three buttons, with the active button being in the center except
        on the first and last pages. <hr />
        2. Pokemon Info Page: - Displays detailed information about a specific
        Pokémon. - Information should include the Pokémon's name, abilities,
        types, and any other relevant details. Features: 1. Search
        Functionality: - Implement a search bar that allows users to search for
        Pokémon by name. - Include three search options: A-Z, Z-A, and default
        preset. - A-Z: Sorts Pokémon by name in ascending order. - Z-A: Sorts
        Pokémon by name in descending order. - Default: Resets the search to the
        default order. 2. Favorite Pokémon: - Allow users to mark their favorite
        Pokémon by clicking a like button.
        <hr />- Implement persistent data storage using Local Storage to store
        the user's favorite Pokémon. - The favorite Pokémon should persist even
        after the user refreshes the page. Technologies: 1. React.js: Use
        React.js as the primary JavaScript framework for building the
        application. 2. Axios / Fetch: Utilize Axios or fetch for making HTTP
        requests to the PokeAPI. 3. React Router: Use React Router for handling
        routing between pages. 4. Local Storage: Implement Local Storage to
        store and retrieve the user's favorite Pokémon. 5. Styling Framework:
        Bootstrap, for enhanced styling and layout consistency.
      </p>
    </div>
  );
}

export default About;
