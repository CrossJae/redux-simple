import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Main from './app/components/Main.jsx';

// step1. 引入依赖
import { Provider } from 'react-redux';
import { createStore } from "redux";

// step4. 创建reducer
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

// step2. 创建store
// createStore第一个参数是reducer
// 第二个参数是初始值
// 第三个参数是中间件
const store = createStore(reducer, { num: 0 });

ReactDOM.render(
	(
		// step3. 将路由页面包起来
		<Provider store={store}>
			<Router history={hashHistory}>
				<Route path="/main" component={Main}></Route>
				{/* <Route path="/other" component={Other}></Route> */}
			</Router>
		</Provider>
	),
	document.querySelector("#App")
);
