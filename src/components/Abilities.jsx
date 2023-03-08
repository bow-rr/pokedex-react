import React from "react";

const Abilities = ({ pokemon }) => {
  if (!pokemon) {
    return null;
  }

  return (
    <div className="abilities">
      <h2>Abilities:</h2>
      <ul className="list">
        {pokemon.abilities.map((ability, index) => (
          <li className="items" key={`${ability.ability.name}-${index}`}>
            {ability.ability.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Abilities;
