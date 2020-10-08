import React from 'react';
import User from './UserList';

const AppStyle = {
	backgroundColor: '#bbc4cc',
	height: '100%'
};

export default function App() {
	return (
		<div style={AppStyle}>
			<User />
		</div>
	);
}
