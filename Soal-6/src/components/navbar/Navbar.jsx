import React from "react";

const Navbar = ({ searchTerm, onSearchChange }) => {
    const [showSearch, setShowSearch] = React.useState(false);

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    return (
        <div className="col w-full">
            <div className="flex flex-row mx-auto max-w-full justify-between items-center py-2 px-4">
                {/* logo */}
                <img className="h-9" src="/assets/images/pokemon_logo.png" alt="pokemon_logo" />

                {/* button search */}
                <div className="flex flex-row items-center gap-x-2">
                    {showSearch && (
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                            placeholder="Search..."
                            className="w-full px-3 placeholder:text-gray-400 rounded-md bg-white placeholder-white focus:outline-[#3D4466]"
                        />
                    )}
                    <button className="text-white font-bold cursor-pointer" onClick={toggleSearch}>
                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.42857 0C9.39875 0 11.2882 0.743518 12.6814 2.06699C14.0745 3.39046 14.8571 5.18547 14.8571 7.05714C14.8571 8.80514 14.1829 10.412 13.0743 11.6497L13.3829 11.9429H14.2857L20 17.3714L18.2857 19L12.5714 13.5714V12.7137L12.2629 12.4206C10.9149 13.5136 9.20081 14.1142 7.42857 14.1143C5.45839 14.1143 3.56891 13.3708 2.17578 12.0473C0.782651 10.7238 0 8.92881 0 7.05714C0 5.18547 0.782651 3.39046 2.17578 2.06699C3.56891 0.743518 5.45839 0 7.42857 0ZM7.42857 2.17143C4.57143 2.17143 2.28571 4.34286 2.28571 7.05714C2.28571 9.77143 4.57143 11.9429 7.42857 11.9429C10.2857 11.9429 12.5714 9.77143 12.5714 7.05714C12.5714 4.34286 10.2857 2.17143 7.42857 2.17143Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#3D4466]"></div>
        </div>
    );
};

export default Navbar;
