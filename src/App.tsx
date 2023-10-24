import { useState } from 'react'
import SideMenu from './components/basic/SideMenu'
import ToggleButtons from './components/basic/ToggleButtons'
import RadialMenu from './components/basic/RadialMenu'
import DotMaker from './components/basic/DotMaker'
import DragAndDrop from './components/basic/DragAndDrop'
import ValidationForm from './components/basic/ValidationForm'
import Keypad from './components/basic/Keypad'
import StarRating from './components/basic/StarRating'
import IconAnimations from './components/basic/IconAnimations'
import Stopwatch from './components/basic/StopWatch'
import TabPages from './components/tabsContent/TabPages'
import { BsCloudMoonFill } from 'react-icons/bs'
import { FaSun } from 'react-icons/fa'
import ImageSlider from './components/basic/ImageSlider'
import NestedDropMenu from './components/navMenu/NestedDropMenu'
import TodoList from './components/todoList/TodoList'

function App() {
	const [theme, setTheme] = useState<boolean>(true)
	const [testingStats, setTestingStats] = useState<boolean>(false)

	const toggleTheme = () => {
		const rootElement = document.documentElement
		if (theme) {
			setTheme(!theme)
			rootElement.setAttribute('data-theme', 'dark')
			return
		}
		rootElement.setAttribute('data-theme', 'light')
		setTheme(!theme)
	}

	const showTestingStats = () => {
		setTestingStats(!testingStats)
	}

	return (
		<div className="bg-bkg text-content">
			<div className="flex flex-row justify-between">
				<h1 className="text-3xl font-bold m-2 mb-8">List of React components and features for practice</h1>
				<div className="flex flex-row  mx-2 px-2">
					<button className="button h-[35px] border-content" onClick={() => toggleTheme()}>
						{theme ? (
							<div className="flex flex-row gap-1">
								Dark
								<BsCloudMoonFill />
							</div>
						) : (
							<div className="flex flex-row gap-1">
								Light
								<FaSun />
							</div>
						)}
					</button>
					<button className="button h-[35px] border-content" onClick={() => showTestingStats()}>
						Testing Stats
					</button>
				</div>
			</div>
			{testingStats ? <div className="component">stats</div> : ''}
			<SideMenu />
			<NestedDropMenu />
			<TabPages />
			<RadialMenu />
			<Stopwatch />
			<DragAndDrop />
			<ValidationForm />
			<TodoList />
			<ToggleButtons />
			<Keypad />
			<StarRating />
			<IconAnimations />
			<ImageSlider />
			<DotMaker />
		</div>
	)
}

export default App
