import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Breadcrumbs from './Breadcrumbs.jsx'

it('should render multiple paths correctly', async () => {
  const { container1 } = render(
    <MemoryRouter initialEntries={['/']}>
      <Breadcrumbs/>
    </MemoryRouter>
  )
  await screen.findByText(/Home/)
  expect(container1).toMatchSnapshot()

  const { container2 } = render(
    <MemoryRouter initialEntries={['/characters/2']}>
      <Breadcrumbs/>
    </MemoryRouter>
  )
  await screen.findByText(/characters/)
  await screen.findByText(/2/)
  expect(container2).toMatchSnapshot()
})