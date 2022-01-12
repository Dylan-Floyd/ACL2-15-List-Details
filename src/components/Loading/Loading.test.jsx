import { render, screen } from '@testing-library/react'
import Loading from './Loading.jsx'

it('should render Loading text and progressively add dots', async () => {
  const { container } = render(<Loading />)

  screen.getByText('Loading')
  await screen.findByText('Loading.')
  await screen.findByText('Loading..')
  await screen.findByText('Loading...')
  await screen.findByText('Loading')

  expect(container).toMatchSnapshot()
})