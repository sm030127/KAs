import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import User from './User';
import Button from './Button';

const UserList = () => {
	const heading = {
		textAlign: 'center',
		fontSize: '32px',
		backgroundColor: '#ffffff',
		padding: '10px'
	};
	const container = {
		display: 'flex',
		flexDirection: 'column',
		marginLeft: '20px'
	};
	const [users, setUsers] = useState([]);
	let renderList;

	// FUNCTION THAT LOOPS OVER ALL THE USERS AND GENERATE HTML
	const renderUsers = () => {
		renderList = users.map(current => {
			return <User user={current} />;
		});
	};

	// FETCHES USERS
	const getUser = async () => {
		const data = await axios.get('https://randomuser.me/api/');
		setUsers([...users, data.data.results[0]]);
	};

	useEffect(() => {
		getUser();
	}, []);

	renderUsers();
	return (
		<Fragment>
			<div style={heading}>Users Application</div>
			<div style={container}>{renderList}</div>
			<Button userCount={users.length} addUser={getUser} />
		</Fragment>
	);
};
export default UserList;
