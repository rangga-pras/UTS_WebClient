import React from "react";
import Card from "../card/Card";

const ListCard = ({ pokemons, viewMode }) => {
    return (
        <div className={`mx-5 mb-5 ${
            viewMode === "grid"
                ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                : "flex flex-col gap-4"
        }`}>
            {pokemons.map((pokemon) => (
                <Card key={pokemon.id} pokemon={pokemon} viewMode={viewMode} />
            ))}
        </div>
    );
};

export default ListCard;
