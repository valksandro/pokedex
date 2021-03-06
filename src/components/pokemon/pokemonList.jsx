import React from 'react'
import styles from 'Main/App.scss'

import Pokemon from './pokemon'

export default props => {
  const renderPokemons = () => {
    const pokemons = props.pokemons || []
    return pokemons.map(poke => (
      <Pokemon
        key={poke.name}
        name={poke.name}
        url={poke.url}/>
    ))
  }

  return (
    <div className={styles.gridPokemons}>
      {renderPokemons()}
    </div>
  )
}
