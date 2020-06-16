import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Alert from "./components/Alert";
import { AlertState } from "./context/Alert/state";
import { GithubState } from "./context/Github/state";
import { compose } from "./utils/compose";

const root = (
	<>
		<Navbar />
		<div className="container pt-4">
			<Alert />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
				<Route path="/profile/:name" component={Profile} />
			</Switch>
		</div>
	</>
);

export default () =>
	compose(
		(e) => <GithubState>{e}</GithubState>,
		(e) => <AlertState>{e}</AlertState>,
		(e) => <BrowserRouter>{e}</BrowserRouter>
	)(root);
