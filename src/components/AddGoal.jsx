import React, { Component } from 'react';
import { goalRef } from '../firebase';
import {connect} from 'react-redux';

class AddGoal extends Component {

	constructor(props){
		super(props);
		this.state = {
			title: ''
		}
	}

	addGoal(){
		const {title} = this.state;
		const {email} = this.props;
		goalRef.push({email,title});
	}

	render(){
		return(
			<div className="form-inline">
				<div className="form-group">
					<input
						type="text"
						placeholder="Add a goal"
						className="form-control"
						style={{marginRight: '5px'}}
						onChange={event => this.setState({title: event.target.value})}
					/>
					<button
					className="btn btn-succes"
					type="button"
					onClick={() => this.addGoal()}>
						Add
					</button>
				</div>
			</div>
		)
	}

}

function mapStateToProps(state){
	const {email} = state;
	return {email};
}

export default connect(mapStateToProps,null)(AddGoal);