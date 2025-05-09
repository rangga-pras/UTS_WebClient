import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import ListCard from "../../components/list_card/ListCard";
import { useFilter } from "../../context/FilterContext";

const HomePage = () => {
    const [pokemons, setPokemons] = useState(() => {
        const saved = localStorage.getItem("pokemonList");
        return saved ? JSON.parse(saved) : [];
    });
    const [searchTerm, setSearchTerm] = useState("");
    const [viewMode, setViewMode] = useState("grid");
    const { selectedType, setSelectedType } = useFilter();

    useEffect(() => {
        if (pokemons.length === 0) {
            const fetchPokemons = async () => {
                const promises = [];
                for (let i = 1; i <= 8; i++) {
                    promises.push(
                        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json())
                    );
                }
                const results = await Promise.all(promises);
                const formatted = results.map((pokemon) => ({
                    id: pokemon.id,
                    name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
                    image: pokemon.sprites.other["official-artwork"].front_default,
                    sprite: pokemon.sprites.front_default,
                    types: pokemon.types.map((t) => t.type.name),
                    stats: pokemon.stats,
                }));
                setPokemons(formatted);
                localStorage.setItem("pokemonList", JSON.stringify(formatted));
            };
            fetchPokemons();
        }
    }, [pokemons]);

    const filteredPokemons = pokemons.filter((pokemon) => {
        const matchesSearch = pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = selectedType === "all" || pokemon.types.includes(selectedType);
        return matchesSearch && matchesType;
    });

    return (
        <div className="flex flex-col gap-y-4 bg-[#252A3E] min-h-screen">
            <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <div className="flex justify-between items-center px-6">
                <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="text-sm text-white px-3 py-1 rounded-md bg-[#3D4466] hover:bg-[#58607f] transition-colors"
                >
                    <option value="all">All Types</option>
                    <option value="grass">Grass</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="electric">Electric</option>
                    <option value="poison">Poison</option>
                    <option value="bug">Bug</option>
                    <option value="normal">Normal</option>
                    <option value="ground">Ground</option>
                </select>
                <div className="flex gap-2 bg-[#3D4466] rounded-lg p-1">
                    <button
                        onClick={() => setViewMode("list")}
                        className={`w-10 h-10 rounded-md flex items-center justify-center ${
                            viewMode === "list" ? "bg-[#1E2333]" : "bg-[#3D4466]"
                        }`}
                        >
                        <div className="w-4 h-4 bg-[#A0A8D2]"></div>
                    </button>
                    <button
                        onClick={() => setViewMode("grid")}
                        className={`w-10 h-10 rounded-md flex items-center justify-center ${
                            viewMode === "grid" ? "bg-[#1E2333]" : "bg-[#3D4466]"
                        }`}
                    >
                        <div className="grid grid-cols-2 gap-[2px]">
                            <div className="w-2.5 h-2.5 bg-[#A0A8D2]" />
                            <div className="w-2.5 h-2.5 bg-[#A0A8D2]" />
                            <div className="w-2.5 h-2.5 bg-[#A0A8D2]" />
                            <div className="w-2.5 h-2.5 bg-[#A0A8D2]" />
                        </div>
                    </button>
                </div>

            </div>
            <ListCard pokemons={filteredPokemons} viewMode={viewMode} />
        </div>
    );
};

export default HomePage;
