import React from 'react';

const user = ({ user }) => {
	const userStyle = {
		border: 'solid 1px grey',
		margin: '20px 20px 20px 0',
		padding: '20px',
		fontSize: '18px',
		backgroundColor: '#ffffff',
		borderRadius: '.5em'
	};
	return (
		<div style={userStyle}>
			<div className="picture">
				<img src={user.picture.medium} />
			</div>
			<div className="name">
				Name : {user.name.title} {user.name.first} {user.name.last}
			</div>
			<div className="age">Age : {user.dob.age}</div>
			<div className="email">Email : {user.email}</div>
			<div className="city">City : {user.location.city}</div>
			<div className="country">Country : {user.location.country}</div>
			<div className="phone">Phone : {user.phone}</div>
		</div>
	);
};

export default user;
