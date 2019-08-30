import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'

const Country = ({ country}) => {
  const [weather, setWeather] = useState(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const url = `https://api.apixu.com/v1/current.json?key=91e4790f983a42d0aa0191340182009&q=${country.capital}`
    axios.get(url).then(res => {
      setWeather(res.data.current)
    })
  }, [])

  const label = show
    ? 'hide details'
    : 'show details'

  if (show === false) {
    return (<div>
      {country.name}
      <button onClick={() => setShow(!show)}>{label}</button>
    </div>)
  }

  return (
    <div>
      <h2>{country.name}</h2>
      <button onClick={() => setShow(!show)}>{label}</button>
      <div>capital: {country.capital}</div>
      <div>population: {country.population}</div>
      <h3>languages: </h3>
      <ul>
        {country.languages.map(lang =>
          <li key={lang.name}>{lang.name}</li>)}
      </ul>

      <div>
        <img src={country.flag} alt='flag' height='100' />
      </div>

      <h3>weather in {country.capital}</h3>
      <Weather weather={weather} />
    </div>
  )

}
export default Country