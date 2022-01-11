import { render, screen } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { MemoryRouter } from 'react-router-dom'
import Routes from '../../Routes.jsx'

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          {
            id: 1,
            name: 'bob',
            origin: 'earth',
            status: 'hi erich',
            image: 'asdf.jpg'
          },
          {
            id: 2,
            name: 'bob2',
            origin: 'earth',
            status: 'hi erich',
            image: 'asdf.jpg'
          }
        ]
      })
    )
  })
)

beforeAll(() => {
  server.listen()
})

afterAll(() => {
  server.close()
})

it('should fetch and render a list of characters', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/characters']}>
      <Routes />
    </MemoryRouter>
  )

  screen.getByText('Loading')
  await screen.findByText('bob')
  await screen.findByText('bob2')

  expect(container).toMatchSnapshot()
})