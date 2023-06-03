import React from "react";

import { Pokecard } from "../components";

const Pokedex = ({ deck, isWinner, score }) => {
  return (
    <div>
      <h1 className="text-center text-3xl text-[grey]">POKEDEX</h1>
      <div className="flex flex-wrap justify-center gap-24 mt-6">
        {deck.map((pokemon, index) => (
          <Pokecard key={index} index={index} {...pokemon} />
        ))}
      </div>
      <h2 className="text-center py-2 font-bold">Total experience: {score}</h2>
      <h2 className="text-center text-[red] font-bold">
        {isWinner ? "THIS HAND WINS" : ""}
      </h2>
    </div>
  );
};

export default Pokedex;
