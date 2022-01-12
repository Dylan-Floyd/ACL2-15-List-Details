import React from 'react'
import styles from './Character.module.css'

export default function Character({ characterData }) {
  const {
    name,
    origin,
    status,
    image
  } = characterData

  return (
    <div className={styles.charCard}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.origin}>Origin: {origin}</div>
      <div>Status: {status}</div>
      <img src={image} alt={name} />
    </div>
  )
}
