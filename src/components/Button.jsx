import React from "react";
import "../styles/form-content-style.css";

/**
 * 
 * @param {
 * label: string,
 * onClick: function,
 * type: string
 * } props Props for Component
 * @returns 
 */

function Button(props) {
	const { label, onClick, type } = props;

	return (
		<button
			className="btn btn-primary mt-5 text-center bottomBtn justify-content-center"
			onClick={onClick}
			type={type}
		>
			{label}
		</button>
	);
}

export {Button};