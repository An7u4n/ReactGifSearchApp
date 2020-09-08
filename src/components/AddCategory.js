import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories, categories }) => {
	const [inputValue, setInputValue] = useState('');

	//	Make the input work
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		//	Deny upload for the content
		if (inputValue === undefined || inputValue === '' || inputValue === null || inputValue.trim().length < 3) {
			return false;
		}

		//	Deny upload if already exists
		for (let i = 0; i <= categories.length; i++) {
			if (categories[i] === inputValue) {
				return false;
			}
		}
		//	Update categories
		setCategories((cats) => [inputValue, ...cats]);
		//	Put the input blank
		setInputValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => {
					handleInputChange(e);
				}}
			/>
		</form>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
	categories: PropTypes.array.isRequired,
};
