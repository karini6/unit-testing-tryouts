import { useEffect, useState, type ChangeEvent } from 'react';

import type { FilteredCountryListType } from "./types/types";

import './App.css';
import ListOfCountries from './components/listOfCountries';
import SearchField from './components/searchField/index';
import useLocalStorage from './hooks/useLocalStorage';
import { countriesMock } from './mocks/countriesMock';



function App() {
  const [countryName, setCountryName] = useState<string>('')
  const [countryList, setCountryList] = useState<string[]>([]);
  const [filteredCountryList, setFilteredCountryList] = useState<
    FilteredCountryListType[]
  >([]);
  const {savedCountries, getCountriesFromLocalStorage} = useLocalStorage()
  /* const {countryList, setCountryList} = useGetCountries() */
  const placeholderText = countryName ? "Oops, no matches! Try again." : "Type to see suggestions"


    useEffect(() => {
      getCountriesFromLocalStorage()
      setCountryList(countriesMock.map((a: { name: string; }) => a.name))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



 
let countryArray: FilteredCountryListType[] = [];

    const handleInputChange = (
      e: ChangeEvent<HTMLInputElement>,
    ): void => {
      setCountryName(e.currentTarget.value);
      const filtered: string[] = countryList?.filter((a) =>
        a.includes(e.currentTarget.value),
      );
      countryArray = filtered.map((country, key) => ({
        countryName: country,
        isChecked: savedCountries.includes(country),
        key: key,
      }));
      setFilteredCountryList(countryArray);
    };

    return (
    <div className="App">
      <header className="App-header">
        Traveller's planner
      </header>
      <SearchField handleChange={handleInputChange} countryName={countryName}/>
      <ListOfCountries countries={filteredCountryList} placeholderText={placeholderText}/>
    </div>
  );
}

export default App;
