import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// Simple test component for demonstration
const HelloWorld = () => <div>Hello, Futbol Data Live!</div>

describe('HelloWorld Component', () => {
  it('renders the correct text', () => {
    render(<HelloWorld />)
    expect(screen.getByText('Hello, Futbol Data Live!')).toBeInTheDocument()
  })
})

describe('Basic Math', () => {
  it('adds numbers correctly', () => {
    expect(1 + 1).toBe(2)
    expect(2 + 3).toBe(5)
  })

  it('compares values correctly', () => {
    expect(true).toBe(true)
    expect(false).toBe(false)
    expect(null).toBeNull()
  })
})

describe('Async Operations', () => {
  it('resolves a promise', async () => {
    const promise = Promise.resolve('success')
    await expect(promise).resolves.toBe('success')
  })

  it('handles async functions', async () => {
    const fetchData = async () => ({ data: 'test' })
    const result = await fetchData()
    expect(result.data).toBe('test')
  })
})

describe('String Operations', () => {
  it('checks string contains substring', () => {
    const str = 'Futbol Data Live'
    expect(str).toContain('Data')
    expect(str).toMatch(/Live/)
  })

  it('checks string length', () => {
    const str = 'Futbol'
    expect(str).toHaveLength(6)
  })
})
