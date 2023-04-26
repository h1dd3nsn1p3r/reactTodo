/**
 *
 * Function that renders the add todos component.
 *
 */

const AddTodos = (props) => {
	return (
		<>
			<form className="add-todo">
				<input type="text" placeholder="Visit dentist..." />
				<button type="submit">Save</button>
			</form>
		</>
	);
};

export default AddTodos;
