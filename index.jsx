import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Main from './app/components/Main.jsx';
import { Provider } from 'react-redux';
import { createStore } from "redux";

const reducer = function(state = {}, action) {
	switch(action.type){
		case 'add':
			return { num: state.num + 1 }
		case 'sub':
			return { num: state.num - 1 }
		default:
			return state
	}
}

const store = createStore(reducer, { num: 0 });


// router
ReactDOM.render(
	(
		<Provider store={store}>
			<Router history={hashHistory}>
				<Route path="/main" component={Main}></Route>
				{/* <Route path="/other" component={Other}></Route> */}
			</Router>
		</Provider>
	),
	document.querySelector("#App")
);
