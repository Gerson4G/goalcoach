import React, { Component } from 'react';
import { completeGoalRef, goalRef} from '../firebase'
import { connect } from 'react-redux';

class GoalItem extends Component {

	completeGoal(){
		const {email} = this.props.user;
		const {title, serverKey} = this.props.goal;
		goalRef.child(serverKey).remove();
		completeGoalRef.push({email,title});

	}

	render(){

		const {email, title} = this.props.goal;

		return(
			<div>
				{ this.props.goal.serverKey ?
				<div>
					<strong>{title}</strong>
					<span> submitted by <em>{email}</em></span>
					<button
						className="btn btn-sm btn-primary"
						onClick={() => this.completeGoal()}
					>
						Completed
					</button>
				</div>	
				:
				<div>
					<strong>{title}</strong>
					<span> Completed by <em>{email}</em></span>
				</div>	
				}
			</div>
		)
	}

}

function mapStateToProps(state){
	const {user} = state
	return{user}
}

export default connect(mapStateToProps, null)(GoalItem);