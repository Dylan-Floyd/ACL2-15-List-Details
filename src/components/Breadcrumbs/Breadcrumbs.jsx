import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Breadcrumbs() {
  const location = useLocation()
  const dirs = location.pathname.slice(1).split('/')

  return (
    <h4>
      <Link to='/'>Home</Link>
      {dirs.map((dir, i) => (
        <span key={i}>
          {' / '}
          <Link to={'/'+dirs.slice(0, i+1).join('/')}>{dir}</Link>
        </span> 
      ))}
    </h4>
  )
}
