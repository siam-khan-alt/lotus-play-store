import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

import Games from "../Components/Games";
import useTitle from "../Hooks/useTitle";
import { FaSortAlphaDown, FaSortAlphaUp, FaStar } from "react-icons/fa";

const OurGames = () => {
  useTitle("Our Games");
  const initialGames = useLoaderData();

  const [displayGames, setDisplayGames] = useState(initialGames);
  const [sortBy, setSortBy] = useState("rating-desc"); 
  const [filterCategory, setFilterCategory] = useState("All");

  const allCategories = [
    "All",
    ...new Set(initialGames.map((game) => game.category)),
  ];

  const handleSort = (sortOption) => {
    setSortBy(sortOption);
  };

  const handleFilter = (category) => {
    setFilterCategory(category);
  };

  useEffect(() => {
    let sortedAndFiltered = [...initialGames];

    if (filterCategory !== "All") {
      sortedAndFiltered = sortedAndFiltered.filter(
        (game) => game.category === filterCategory
      );
    }
    if (sortBy === "rating-desc") {
      sortedAndFiltered.sort((a, b) => b.ratings - a.ratings);
    } else if (sortBy === "rating-asc") {
      sortedAndFiltered.sort((a, b) => a.ratings - b.ratings);
    } else if (sortBy === "title-asc") {
      sortedAndFiltered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "title-desc") {
      sortedAndFiltered.sort((a, b) => b.title.localeCompare(a.title));
    }

    setDisplayGames(sortedAndFiltered);
  }, [initialGames, sortBy, filterCategory]);
  return (
    <div className="bg-[#0F172A] pb-12">
      <div className="grid items-center justify-center w-11/12 px-2 mx-auto">
        <h3 className="text-2xl md:text-4xl lg:text-6xl font-semibold text-center my-3 md:my-5 lg:my-7 ">
          Our All Games
        </h3>
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 p-4 bg-[#1E293B] rounded-lg shadow-xl">
          <div className="dropdown dropdown-hover w-full md:w-auto mb-4 md:mb-0">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white w-full"
            >
              Sort By: {sortBy.includes("rating") ? "Rating" : "Title"}
              {sortBy.includes("asc") ? <FaSortAlphaUp /> : <FaSortAlphaDown />}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-[#1E293B] rounded-box w-52 mt-1"
            >
              <li onClick={() => handleSort("rating-desc")}>
                <a>
                  <FaStar /> Rating (Highest)
                </a>
              </li>
              <li onClick={() => handleSort("rating-asc")}>
                <a>
                  <FaStar /> Rating (Lowest)
                </a>
              </li>
              <li onClick={() => handleSort("title-asc")}>
                <a>
                  <FaSortAlphaUp /> Title (A-Z)
                </a>
              </li>
              <li onClick={() => handleSort("title-desc")}>
                <a>
                  <FaSortAlphaDown /> Title (Z-A)
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`btn btn-sm ${
                  filterCategory === cat
                    ? "bg-[#7C3AED] hover:bg-[#6D28D9]"
                    : "bg-[#0F172A] border-gray-600 hover:bg-[#1E293B]"
                } text-white border-0 transition-colors`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {displayGames.length > 0 ? (
          <div className="grid items-stretch justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayGames.map((game) => (
              <Games key={game.id} game={game}></Games>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#1E293B] rounded-lg">
            <h2 className="text-2xl text-red-400">No Games Found</h2>
            <p className="text-gray-400 mt-2">
              Try adjusting your filters or sorting options.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurGames;
