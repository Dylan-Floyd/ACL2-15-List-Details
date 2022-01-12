import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      Hi, Dylan Floyd here, let me welcome you to the wonders of the Rick and Morty universe. It's a magical place full of thrilling characters. Characters that you can explore. Here. Like right here. Here's a link: <Link to='/characters'>Here</Link>
    </div>
  )
}
