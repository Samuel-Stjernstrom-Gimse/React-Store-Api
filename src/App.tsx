import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './assets/styles/App.css'
import { Home } from './pages/Home.tsx'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path={'/'} element={<Home />} />
					<Route path={'/Home'} element={<Home />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
