import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local state variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

    // Whenever state variables update, react triggers a reconciliation cycle (re-renders the component)
    console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );

    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,);
  };

  // Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e) => {
                setSearchText(e.target.value);
            }} />
            <button onClick={() => {
                // Filter the restaurant cards and update the UI
                // searchText
                console.log(searchText);

                const filteredRestaurants = listOfRestaurants.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredRestaurants(filteredRestaurants);
            }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4,
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
