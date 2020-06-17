import React, { useContext, useState } from "react";
import { AlertContext } from "../../context/Alert/context";
import { GithubContext } from "../../context/Github/context";

export default () => {
	const [value, setValue] = useState("");

	const { show, hide } = useContext(AlertContext);
	const { search, clearUsers } = useContext(GithubContext);
	const onSubmit = (event) => {
		if (event.key !== "Enter") {
			return;
		}

		if (value.trim()) {
			search(value.trim());
			hide();
		} else {
			show("Введите данные пользователя");
			clearUsers();
		}
	};

	return (
		<div className="form-group">
			<input
				type="text"
				className="form-control"
				placeholder="Введите ник пользователя"
				value={value}
				onChange={(event) => setValue(event.target.value)}
				onKeyPress={onSubmit}
			/>
		</div>
	);
};
