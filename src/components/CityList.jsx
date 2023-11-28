// eslint-disable-next-line no-unused-vars

import CityItem from './CityItem';
import styles from './CityList.module.css';
import Message from './Message';
import Spinner from './Spinner';
import { useCities } from '../contexts/CitiesContext';
// npm i json-server 

// eslint-disable-next-line no-unused-vars
function CityList() {
    const { cities, isLoading } = useCities();

    if (isLoading) return <Spinner />

    if (!cities.length) return <Message message='Add your first city by clicking on the map' />

    return (
        <ul className={styles.cityList}>
            {cities.map((city) => (
                <CityItem city={city} key={city.id} />
            ))}
        </ul>
    );
}

export default CityList
