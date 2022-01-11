import { render } from '@testing-library/react'
import Character from './Character.jsx'

it('should render a character with the provided data', () => {
  const characterData = {
    name: 'Rick Sanchez',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }

  const { container } = render(<Character characterData={characterData} />)

  expect(container).toMatchSnapshot()
})