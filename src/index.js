import {firebaseApp} from './firebase'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';

firebaseApp.auth().onAuthStateChanged(user => {
	if(user){
		console.log('user has signed in or up', user);
	} else{
		console.log('User needs to sign in');
	}
})

ReactDOM.render(
	<Router path="/" history={browserHistory}>
  		<Route path="/app" component={App} />
  		<Route path="/signin" component={SignIn} />
  		<Route path="/signup" component={SignUp} />
	</Router>,
  document.getElementById('root')
);
