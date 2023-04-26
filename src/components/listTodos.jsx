import { Alert } from "flowbite-react";

const ListTodos = (props) => {
	return (
		<>
			<Alert color="info">
				<span>
					<span className="font-medium">Info alert!</span> Change a
					few things up and try submitting again.
				</span>
			</Alert>
			<ul>
				<li>Listing todo...</li>
			</ul>
		</>
	);
};

export default ListTodos;
