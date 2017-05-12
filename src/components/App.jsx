import React, { Component } from 'react';
import '../App.css';
import { firebaseApp } from '../firebase'
import { connect } from 'react-redux';
import AddGoal from './AddGoal'
import GoalList from './GoalList'
import CompleteGoalList from './CompleteGoalList'

class App extends Component {

	signOut(){
		firebaseApp.auth().signOut();
	}

  render() {
    return (
      <div className="App">
       <h3>Goal Coach</h3>
       <AddGoal />
       <hr />
       <h4> Goals</h4>
       <GoalList />
       <hr />
       <h4> Completed Goals!</h4>
       <CompleteGoalList />
       	<button className="btn btn-danger"
       		onClick={ () => this.signOut() }
       	>
       		Sign OUT
       	</button>
      </div>
    );
  }
}

function mapStateToProps(state){
	//console.log('state',state);
	return {}
}

export default connect(mapStateToProps,null)(App);
