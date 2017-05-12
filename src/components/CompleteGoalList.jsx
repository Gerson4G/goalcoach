import React, { Component } from 'react';
import { completeGoalRef } from '../firebase';
import { setCompleted } from '../actions';
import { connect } from 'react-redux';
import GoalItem  from './GoalItem';

class CompleteGoalList extends Component {

	componentDidMount(){
		completeGoalRef.on('value', snap => {
			let completeGoals = [];
			snap.forEach(completeGoal => {
				const {email, title } = completeGoal.val()
				//const serverKey = completeGoal.key;
				completeGoals.push( {email, title} );
			})
			this.props.setCompleted(completeGoals);
		})
	}

	clearCompleted(){
		completeGoalRef.set([]);
	}

	render(){
		return(
			<div className="">
				{
					this.props.completeGoals.map((goal,index) => {
					return(
						//<div>{goal.title}</div>
						<GoalItem key={index} goal={goal} />
					)
					})
				}

				<button
				className="btn btn-primary"
				onClick={ () => this.clearCompleted() }
				>
					
					Clear ALL
				</button>

				
			</div>
		)
	}

}

function mapStateToProps(state){
	const {completeGoals} = state;
	return {
		completeGoals
	}
}

export default connect(mapStateToProps,{setCompleted})(CompleteGoalList);