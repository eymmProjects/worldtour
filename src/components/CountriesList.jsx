import Spinner from "./Spinner";
import React from "react";
import styles from "./CountryList.module.css";
import Message from "./Message";
import CountryItem from "./CountryItem";
function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="Add your first citties " />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );

  //  const countries = cities.reduce((arr, city) => {
  //   if (!arr.map((el) => el.country).includes(city.country))
  //     return [...arr, { country: city.country, emoji: city.emoji }];
  //   else return arr;
  // }, []);

  // return (
  //   <ul className={styles.countryList}>
  //     {countries.map((country) => (
  //       <CountryItem country={country} key={country.country} />
  //     ))}
  //   </ul>
  // );
}

export default CountriesList;
