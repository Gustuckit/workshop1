import React from "react";

const Pokecard = ({ name, type, base_experience }) => {
  return (
    <div className="bg-[#cacaca] text-center px-4 py-6 rounded-xl">
      <p className="text-[blue]">{name}</p>
      <p>Type: {type}</p>
      <p>EXP: {base_experience}</p>
    </div>
  );
};

export default Pokecard;
