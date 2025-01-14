import { useReducer } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
const BASE_URL = "https://ahmadmasood-dev.github.io/worldWiseJsonServer";

const citiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: true,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: true,
      };
    case "cities/loading":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case "city/loaded":
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };
    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error("Unknow action type");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function fetchCities() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`${BASE_URL}/cities.json`);
        const data = await res.json();

        dispatch({ type: "cities/loading", payload: data });
      } catch (err) {
        dispatch({
          type: "rejected",
          payload: "there was an error in cities loading data",
        });
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    // Prevent unnecessary fetch if the city is already loaded
    if (String(id) === String(currentCity?.id)) return;

    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${BASE_URL}/cities.json`);
      const data = await res.json();

      // Find the city by ID (fixed id usage)
      const city = data.find((city) => city.id === id);

      if (city) {
        console.log("City Found:", city);
        dispatch({ type: "city/loaded", payload: city }); // Dispatch the specific city, not all data
      } else {
        console.error("City not found");
        dispatch({
          type: "rejected",
          payload: "City not found with the provided ID.",
        });
      }
    } catch (err) {
      console.error("Error fetching city:", err);
      dispatch({
        type: "rejected",
        payload: "There was an error loading the city data.",
      });
    }
  }

  async function createCity(newCity) {
    dispatch({ type: "loading" });
    try {
      // Simulating ID generation for a new city
      const id = Date.now().toString();
      const cityWithId = { ...newCity, id };

      dispatch({ type: "city/created", payload: cityWithId });
      console.log("City added (UI only):", cityWithId);
    } catch (err) {
      dispatch({ type: "rejected", payload: "Error creating city" });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      dispatch({ type: "city/deleted", payload: id });
      console.log(`City with ID ${id} deleted (UI only)`);
    } catch (err) {
      dispatch({ type: "rejected", payload: "Error deleting city" });
    }
  }

  return (
    <citiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </citiesContext.Provider>
  );
}
function useCities() {
  const context = useContext(citiesContext);
  if (context === undefined)
    throw new Error("PostContext are used outside the postProvider");
  return context;
}
export { CitiesProvider, useCities };
