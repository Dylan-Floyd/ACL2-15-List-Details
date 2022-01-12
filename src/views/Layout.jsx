import React from 'react'
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs.jsx'

export default function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Rick and Morty Characters</h1>
        <Breadcrumbs />
      </header>
      {children}
    </>
  )
}
