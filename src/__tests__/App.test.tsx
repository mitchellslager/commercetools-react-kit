import { cleanup, render } from '@testing-library/react'
import * as React from 'react'
import App from '~src/App'

describe('App', () => {
  afterEach(cleanup)

  test('renders the app', () => {
    const component = render(<App title="Test" />)
    expect(component).toBeTruthy()
  })

  test('displays a title', () => {
    const component = render(<App title="Test" />)
    expect(component.findByText('Test')).toBeTruthy()
  })
})
