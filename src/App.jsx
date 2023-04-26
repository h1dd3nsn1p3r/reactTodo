import { useState } from "react";
import "./index.css";
import AddTodos from "./components/addTodos";
import ListTodos from "./components/listTodos";

/**
 *
 * App function that renders the app.
 *
 * @returns {void} void
 */

const App = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<AddTodos />
			<ListTodos />
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>
		</>
	);
};

export default App;
