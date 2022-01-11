import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import CharacterList from './CharacterList.jsx'

it('should render a list of characters', () => {
  const characters = [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    },
    {
      id: 2,
      name: 'Rick Sanchez2',
      status: 'Alive',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    }
  ]

  const { container } = render(
    <MemoryRouter>
      <CharacterList characters={characters} />
    </MemoryRouter>
  )
  expect(container).toMatchSnapshot()
})