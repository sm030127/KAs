import React from 'react';

const Button = ({ userCount, addUser }) => {
	const button = {
		margin: '20px 10px 10px 10px',
		padding: '10px',
		fontSize: '18px',
		backgroundColor: '#0080ff',
		color: '#ffffff',
		borderRadius: '.2em',
		border: 'none'
	};
	const buttonContainer = {
		backgroundColor: '#ffffff'
	};
	return (
		<div style={buttonContainer}>
			{userCount > 0 && userCount < 5 && (
				<button style={button} onClick={addUser}>
					Fetch User
				</button>
			)}
		</div>
	);
};

export default Button;
