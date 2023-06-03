import React from "react";

import { Pokedex } from "../components";

import { data } from "../data";

const Pokegame = () => {
  let pokemon = data;
  /* SHUFFLE POKEMON */
  for (let i = pokemon.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = pokemon[i];
    pokemon[i] = pokemon[j];
    pokemon[j] = temp;
  }
  /* PUSHING CARDS TO DECK */
  let half = Math.ceil(pokemon.length / 2);
  let firstDeck = pokemon.slice(0, half);
  let secondDeck = pokemon.slice(half);
  /* CALCULATING SCORES */
  let firstScore = 0;
  firstDeck.map(({ base_experience }) => {
    firstScore += base_experience;
  });
  let secondScore = 0;
  secondDeck.map(({ base_experience }) => {
    secondScore += base_experience;
  });
  //   let isWinner = null;
  //   if (firstScore > secondScore) isWinner = true;
  //   else isWinner = false;
  /* COUNTING DECKS */
  let isWinner = null;
  return (
    <div>
      <h1 className="text-center text-5xl mb-16">Pokegame</h1>
      <section>
        <div>
          <Pokedex
            deck={firstDeck}
            isWinner={
              firstScore > secondScore ? (isWinner = true) : (isWinner = false)
            }
            score={firstScore}
          />
        </div>
        <div className="mt-12">
          <Pokedex
            deck={secondDeck}
            isWinner={
              secondScore > firstScore ? (isWinner = true) : (isWinner = false)
            }
            score={secondScore}
          />
        </div>
      </section>
    </div>
  );
};

export default Pokegame;
