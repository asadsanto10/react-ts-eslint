import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';

function App() {
	const [count, setCount] = useState(0);
	console.log(`adsa${12}`);

	const a = 'ads';

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>

			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((countasds) => countasds + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>

			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</div>
	);
}

export default App;
