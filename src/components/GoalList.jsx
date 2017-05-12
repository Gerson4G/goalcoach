import React, { Component } from 'react';
import { goalRef } from '../firebase';

class GoalList extends Component {

	constructor(props){
		super(props);
		this.state = {
			title: ''
		}
	}

	componentDidMount(){
		goalRef.on('value', snap => {
			snap.forEach(goal => {
				let goalObject = goal.val();

			})
		})
	}

	render(){
		return(
			<div className="form-inline">
				<div className="form-group">
					
				</div>
			</div>
		)
	}

}

export default GoalList;