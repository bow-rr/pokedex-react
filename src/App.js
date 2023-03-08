import React, { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Button from "./components/Button";
import Pokemons from "./components/Pokemons";
import Abilities from "./components/Abilities";
import CountPokemon from "./components/CountPokemon";
import PokemonName from "./components/PokemonName";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [count, setCount] = useState(0);

  const handleButtonClick = async () => {
    try {
       const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
       const data = await response.json();
       const randomPokemon = Math.floor(Math.random() * data.count) + 1;
       const pokemonResponse = await fetch(
         `https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
       );
       const pokemonData = await pokemonResponse.json();
       setPokemon(pokemonData);
       setCount((oldCount) => oldCount + 1);
    } catch (error) {
      console.log(error)
    }
   
  };

  return (
    <div className="app">
      <Heading />
      <div className="case">
        <div className="top">
          <div className="top-bar"></div>
        </div>
        <div className="screen">
          <div className="dot"></div>
          <div className="inner-screen">
            <div className="pokemon-container">
              <PokemonName name={pokemon?.name} />
              <Pokemons pokemon={pokemon} />
              <Abilities pokemon={pokemon} />
              <CountPokemon count={count} />
            </div>
          </div>
        </div>

        <div className="control">
          <div className="d-pad">
            <div className="analog"></div>
            <div className="analog2"></div>
          </div>
          <Button onClick={handleButtonClick} />
          <p className="button-text">catch pokemon</p>
          <div className="starts"></div>
          <div className="bars"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
