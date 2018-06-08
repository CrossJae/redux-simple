import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Main from './app/components/Main.jsx';

// normal
ReactDOM.render(
	<Main />,
	document.querySelector("#App")
);

// router
// ReactDOM.render(
// 	(
// 		<Router history={hashHistory}>
// 	    <Route path="/main" component={Main}></Route>
// 			<Route path="/other" component={Other}></Route>
// 	  </Router>
// 	),
// 	document.querySelector("#App")
// );
