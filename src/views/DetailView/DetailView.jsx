import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Character from '../../components/Character/Character.jsx'
import Loading from '../../components/Loading/Loading.jsx'
import { getCharacter } from '../../services.jsx/rickAndMortyAPI.js'

export default function DetailView() {
  const { id } = useParams()
  const [characterData, setCharacterData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCharacter(id)
      .then(res => setCharacterData(res))
      .catch(e => console.log(e))
  }, [id])

  useEffect(() => {
    if(characterData.name) setLoading(false)
  }, [characterData])
  
  return (
    <>
      <h2>Character Details:</h2>
      {
        loading ? <Loading /> : <Character characterData={characterData} />
      }
    </>
  )
}
