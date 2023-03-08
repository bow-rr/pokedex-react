import React from "react";

function PokemonName({ name }) {
  return (
    <div>
      <h1 className="pokemon-name">{name}</h1>
    </div>
  );
}

PokemonName.defaultProps = {
  name: "Pokemon",
};

export default PokemonName;
