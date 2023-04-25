import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Carouss from "./Components/Carouss";
import Profile from "./Components/Profile";
import Forms from "./Components/Forms";

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Carouss />
			<Profile />
			<Forms />
		</div>
	);
}

export default App;
