import { render, screen, cleanup, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'
import Keypad from '../Keypad'

describe('Keypad component functionality', () => {
	describe('main functionality', () => {
		afterEach(() => {
			cleanup()
		})
		it('should render the component', () => {
			render(<Keypad />)
			const headerElement = screen.getByRole('heading', { level: 2 })
			expect(headerElement).toBeInTheDocument()
			expect(headerElement).toHaveTextContent('Basic Keypad Code Input')
		})

		it.todo('should be able to generate a new key code')
		it.todo('should be able to clear the key code once it has been generated')
		it.todo('should be able to input a key code by pressing keys')
	})

	describe('edge case functionality', () => {
		afterEach(() => {
			cleanup()
		})

		it.todo('')
	})
})
