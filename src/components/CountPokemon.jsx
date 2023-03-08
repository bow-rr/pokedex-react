import React from "react";

function CountPokemon(props) {
  return (
    <div className="caught">
      <p>
        Caught <span className="count-color">{props.count}</span> Pokemon
      </p>
    </div>
  );
}

export default CountPokemon;
