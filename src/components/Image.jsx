import React from "react";

/**
 * 
 * @param {
 * src: string,
 * className: string,
 * alt: string
 * } props Props for Component
 * @returns 
 */

export default function Image(props) {
	const { src, className, alt } = props;

	return <img src={src} className={className} alt={alt} />;
}
