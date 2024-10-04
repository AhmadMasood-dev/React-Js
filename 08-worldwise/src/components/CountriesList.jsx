import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./CountriesList.module.css";
import CountryItem from "./CountryItem";
import { useCities } from "../Contexts/CitiesContext";
// import PropTypes from "prop-types";
function countryList() 
{
const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your First city by clickon the map" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  },[]);

  return (
    <ul className={styles.countriesList}>
      {countries?.map((country) => (
        <CountryItem country={country} key={country.country}/>
      ))}
    </ul>
  );
}
// countryList.propTypes = {
//   cities: PropTypes.array,
//   isLoading: PropTypes.bool,
// };

export default countryList;
