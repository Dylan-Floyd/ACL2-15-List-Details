import React from 'react'
import { Link } from 'react-router-dom'
import Character from '../Character/Character.jsx'
import styles from './CharacterList.module.css'

export default function CharacterList({ characters }) {

  return (
    <div className={styles.charList}>
      {
        characters.map(char => (
          <Link to={`/characters/${char.id}`} className={styles.clickable} key={char.id} >
            <Character characterData={char} />
          </Link>
        ))
      }
    </div>
  )
}
