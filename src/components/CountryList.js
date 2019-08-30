import React, { useState } from 'react'
import Country from './Country'

const CountryList = ({ countries, handleClick }) => {

  if (countries.length === 0) {
    return (
      <div>No countries</div>
    )
  }
  if (countries.length > 10) {
    return (
      <div>
        Too many countries that match to your filter
      </div>
    )
  }

  return (
    <div>
      {countries.map(c =>
        <div key={c.name}>
          <Country country={c} />
        </div>
      )}
    </div>
  )
}

export default CountryList