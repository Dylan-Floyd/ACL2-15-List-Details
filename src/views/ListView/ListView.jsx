import React, { useEffect, useState } from 'react'
import CharacterList from '../../components/CharacterList/CharacterList.jsx'
import Loading from '../../components/Loading/Loading.jsx'
import { getCharacters } from '../../services.jsx/rickAndMortyAPI.js'

export default function ListView() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCharacters()
      .then(res => setCharacters(res))
      .catch(e => console.log(e))
  }, [])

  useEffect(() => {
    if(characters.length) setLoading(false)
  }, [characters])

  if(loading) {
    return <Loading />
  }

  return (
    <CharacterList characters={characters} />
  )
}
