import React from "react";
import profile from "../Assets/profile.jpeg";

const Profile = () => {
	return (
		<div>
			<div>
				<h1>Student FullStack JavaScript</h1>
				<h2>Gomycode Manzah 5</h2>
				<img src={profile} alt='pic' className='profile' />
				<hr />
				<h1 style={{ color: "blue" }}>Workshop React JSX & Components</h1>
			</div>
		</div>
	);
};

export default Profile;
