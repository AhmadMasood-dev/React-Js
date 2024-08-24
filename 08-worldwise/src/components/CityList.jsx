import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../Contexts/CitiesContext";
// import PropTypes from "prop-types";
function CityList() {
  const { cities, isLoading } = useCities();
  console.log(cities)
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your First city by clickon the map" />;
  return (
    <ul className={styles.CityList}>
      {cities?.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
// CityList.propTypes = {
//   cities: PropTypes.array,
//   isLoading: PropTypes.bool,
// };

export default CityList;
