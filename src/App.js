import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList';

const App = () => {
  const [countries, setCountries] = useState([])
  const [keyword, setKeyword] = useState('fin')

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(res => {
      setCountries(res.data)
    })
  }, [])

  const handleChange = (event) => setKeyword(event.target.value)

  const countriesToShow = keyword.length > 0
    ? countries.filter(c => c.name.toLowerCase().includes(keyword.toLowerCase()))
    : countries

  return (
    <div>
      <div>find countries
        <input onChange={handleChange} value={keyword} />
        <CountryList
          countries={countriesToShow}
          handleClick={(k) => setKeyword(k)}
        />
      </div>
    </div>
  )
}
export default App
