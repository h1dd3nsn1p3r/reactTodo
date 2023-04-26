import { useState } from "react";
import { TextInput, Button } from "flowbite-react";

/**
 *
 * Function that renders the add todos component.
 *
 */

const AddTodos = (props) => {
	const [isProcessing, setIsProcessing] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);

	return (
		<>
			<form className="add-todo">
				<TextInput
					type="text"
					sizing="md"
					placeholder="Visit dentist..."
				/>
				<Button isProcessing={isProcessing} disabled={isDisabled}>
					Save
				</Button>
			</form>
		</>
	);
};

export default AddTodos;
