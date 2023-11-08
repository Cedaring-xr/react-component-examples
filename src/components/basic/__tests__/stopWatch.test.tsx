import { render, screen, cleanup, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import '@testing-library/jest-dom'
import Stopwatch from '../StopWatch'

describe('Stopwatch component functionality', () => {
	afterEach(() => {
		cleanup()
	})
	it('should render the stopwatch component', () => {
		render(<Stopwatch />)
		const headerElement = screen.getByRole('heading', { name: 'Stopwatch' })
		expect(headerElement).toBeInTheDocument()
	})

	it('should start at 00:00:00', () => {
		render(<Stopwatch />)
		const stopwatchMinutes = screen.getByTitle('minutes')
		const stopwatchSeconds = screen.getByTitle('seconds')
		const stopwatchMilliseconds = screen.getByTitle('milliseconds')
		expect(stopwatchMinutes).toHaveTextContent('00')
		expect(stopwatchSeconds).toHaveTextContent('00')
		expect(stopwatchMilliseconds).toHaveTextContent('00')
	})

	it('should be able to incriment time', async () => {
		user.setup()
		render(<Stopwatch />)
		const startButton = screen.getByRole('button', { name: 'start' })
		act(() => {
			user.click(startButton)
		})
		await waitFor(() => {
			expect(screen.getByTitle('milliseconds')).toHaveTextContent('11')
		})
	})

	it('should be able to pause timer when stop button is clicked', async () => {
		user.setup()
		render(<Stopwatch />)
		const startButton = screen.getByRole('button', { name: 'start' })
		act(() => {
			user.click(startButton)
		})
		await waitFor(() => {
			expect(screen.getByTitle('milliseconds')).toHaveTextContent('11')
		})
		const stopButton = await screen.findByRole('button', { name: 'stop' })
		act(() => {
			user.click(stopButton)
		})
		const stopwatchMilliseconds = screen.getByTitle('milliseconds')
		expect(stopwatchMilliseconds).not.toHaveTextContent('00')
	})

	it('should be able to resume time after the timer was paused', async () => {
		user.setup()
		render(<Stopwatch />)
		const startButton = screen.getByRole('button', { name: 'start' })
		act(() => {
			user.click(startButton)
		})
		await waitFor(() => {
			expect(screen.getByTitle('milliseconds')).toHaveTextContent('11')
		})
		const stopButton = await screen.findByRole('button', { name: 'stop' })
		act(() => {
			user.click(stopButton)
		})
		const resumeButton = await screen.findByRole('button', { name: 'resume' })
		act(() => {
			user.click(resumeButton)
		})
		await waitFor(() => {
			expect(screen.getByTitle('milliseconds')).toHaveTextContent('55')
		})
	})

	it('should be able to reset the timer after being paused', async () => {
		user.setup()
		render(<Stopwatch />)
		const startButton = screen.getByRole('button', { name: 'start' })
		act(() => {
			user.click(startButton)
		})
		await waitFor(() => {
			expect(screen.getByTitle('milliseconds')).toHaveTextContent('11')
		})
		const stopButton = await screen.findByRole('button', { name: 'stop' })
		act(() => {
			user.click(stopButton)
		})
		const resetButton = await screen.findByRole('button', { name: 'reset' })
		act(() => {
			user.click(resetButton)
		})
		await waitFor(() => {
			expect(screen.getByTitle('milliseconds')).toHaveTextContent('00')
		})
	})
})
