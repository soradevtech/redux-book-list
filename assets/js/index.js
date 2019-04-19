import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App.js';
import Modal from './components/Modal.js';
import allReducers from './reducers/allReducers.js';

/* To-do: 
	- add more books
	- make it more responsive
	- put the css into sass
	- change the styling
	- keep record of the saved books by session?
	- host all assets
	- create a menu for the public html files and link the main project
	- link back to my main site
	- change the page titles
*/

const store = createStore(allReducers);
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
ReactDOM.render(
	<Provider store={store}>
		<Modal />
	</Provider>,
	document.getElementById('modalroot')
);
