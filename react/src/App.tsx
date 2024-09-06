import { useState } from 'react';

export default function App() {
	const [counter, setCounter] = useState(0);

	function increment() {
		setCounter(counter + 1);
	}

	return (
		<div>
			<button onClick={increment}>count is {counter}</button>
		</div>
	);
}
