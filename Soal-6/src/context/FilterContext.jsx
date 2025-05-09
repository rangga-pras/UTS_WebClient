import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [selectedType, setSelectedType] = useState("all");

    return (
        <FilterContext.Provider value={{ selectedType, setSelectedType }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = () => useContext(FilterContext);
