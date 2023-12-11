import { render, screen, cleanup, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'
import ValidationForm from '../ValidationForm'

describe('Validation Form component functionality', () => {
	afterEach(() => {
		cleanup()
	})

	it('should render the component', () => {
		render(<ValidationForm />)
		const headerElement = screen.getByRole('heading', { level: 2 })
		expect(headerElement).toBeInTheDocument()
		expect(headerElement).toHaveTextContent('Simple Validation Form')
	})
	it.todo('should display the name and feedback message in the results panel')
	it.todo('should not submit form if either name or feedback are empty')
	it.todo('should be able to clear feedback after submitting a message')
})
