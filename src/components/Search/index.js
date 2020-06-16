import React, { useContext, useState } from "react";
import { AlertContext } from "../../context/Alert/context";
import { GithubContext } from "../../context/Github/context";

export default () => {
	const [value, setValue] = useState("");

	const { show } = useContext(AlertContext);
	const { search } = useContext(GithubContext);
	const onSubmit = (event) => {
		if (event.key !== "Enter") {
			return;
		}

		if (value.trim()) {
			search(value.trim());
		} else {
			show("Введите данные пользователя");
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
