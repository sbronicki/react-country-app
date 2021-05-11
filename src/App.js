import React, { useState, useEffect, useCallback } from 'react'

import Searchbar from './components/SearchBar/Searchbar'
import Card from './components/UI/Card'
import './App.css';


function App() {
  const [ countryData, setCountryData ] = useState([])
  const [ allCountryData, setAllCountryData ] = useState([])

  const fetchCountriesHandler = useCallback( async () => {
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await response.json()

    const transformedData = data.map(country => {
      return { 
        flagLink: country.flag,
        name: country.name,
        id: country.numericCode
      }
    })
    setAllCountryData(transformedData)
    setCountryData(transformedData)
  }, [])

  useEffect(() => {
    fetchCountriesHandler()
  }, [fetchCountriesHandler])

  const onInputChangeHandler = (e) => {
    const filteredCountryData = allCountryData.filter(country => {
      const input = e.target.value.toLowerCase()
      const namesLowercase = country.name.toLowerCase()
      return(
      namesLowercase.includes(input)
    )})
    setCountryData(filteredCountryData)
  }

  return (
    <div className="App">
      <Searchbar onInputChanged={onInputChangeHandler} />
      {
        countryData.map(e => {
          return (<Card key={e.id} flag={e.flagLink} name={e.name} />)
        })
      }
    </div>
  );
}

export default App;
