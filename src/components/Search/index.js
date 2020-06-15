import React, { useContext } from "react";
import { AlertContext } from "../../context/Alert/context";

export default () => {
	const { show } = useContext(AlertContext);
	const onSubmit = (event) => {
		if (event.key === "Enter") {
			show("Я есть Алерт");
		}
	};

	return (
		<div className="form-group">
			<input
				type="text"
				className="form-control"
				placeholder="Введите ник пользователя"
				onKeyPress={onSubmit}
			/>
		</div>
	);
};
