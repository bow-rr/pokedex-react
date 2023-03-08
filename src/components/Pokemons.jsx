import React from "react";
import PokemonLogo from "../Pokemonball.svg";

function Pokemons(props) {
  return (
    <div>
      <img
        src={
          props.pokemon
            ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`
            : PokemonLogo
        }
        alt="pokemon"
        className="pokemon-pic"
      />
    </div>
  );
}

export default Pokemons;
