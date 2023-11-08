import { render, screen, cleanup, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils'
import ToggleButtons from '../ToggleButtons'

describe('ToggleBtns component functionality', () => {
	afterEach(() => {
		cleanup()
	})

	it('should render the component', () => {
		render(<ToggleButtons />)
		const headerElement = screen.getByRole('heading', { name: 'Simple Toggle Buttons' })
		const buttons = screen.getAllByRole('button')
		expect(headerElement).toBeInTheDocument()
		expect(buttons).toHaveLength(3)
	})

	it('should be able to toggle status on the red button', async () => {
		user.setup()
		render(<ToggleButtons />)
		const redButtonElement = screen.getByText('Light Red')
		expect(redButtonElement).toBeInTheDocument()
		act(() => {
			user.click(redButtonElement)
		})
		await waitFor(() => {
			expect(redButtonElement).toHaveTextContent('Dark Red')
		})
	})

	it('should be able to toggle status on the green button', async () => {
		user.setup()
		render(<ToggleButtons />)
		const greenButtonElement = screen.getByText('Light Green')
		expect(greenButtonElement).toBeInTheDocument()
		act(() => {
			user.click(greenButtonElement)
		})
		await waitFor(() => {
			expect(greenButtonElement).toHaveTextContent('Dark Green')
		})
	})

	it('should be able to toggle status on the blue button', async () => {
		user.setup()
		render(<ToggleButtons />)
		const blueButtonElement = screen.getByText('Light Blue')
		expect(blueButtonElement).toBeInTheDocument()
		act(() => {
			user.click(blueButtonElement)
		})
		await waitFor(() => {
			expect(blueButtonElement).toHaveTextContent('Dark Blue')
		})
	})
})
