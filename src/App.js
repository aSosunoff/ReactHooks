import React from "react";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';

function App() {
	return (
		<>
			<Navbar />
			<div className="container pt-4">
				<Home />
			</div>
		</>
	);
}

export default App;
