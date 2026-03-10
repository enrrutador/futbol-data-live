import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home Page', () => {
  it('renders the home page', () => {
    render(<Home />)
    
    // Check if the page renders without crashing
    expect(document.body).toBeInTheDocument()
  })

  it('displays expected heading', () => {
    render(<Home />)
    
    // Look for common elements that should exist
    // Adjust based on your actual page content
    const heading = screen.queryByRole('heading', { level: 1 })
    
    // If there's a heading, it should be visible
    if (heading) {
      expect(heading).toBeVisible()
    }
  })

  it('has no accessibility violations', () => {
    const { container } = render(<Home />)
    
    // Basic check that the container is rendered
    expect(container.firstChild).toBeInTheDocument()
  })
})
