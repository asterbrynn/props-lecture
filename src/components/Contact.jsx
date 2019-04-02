import React, {Component} from 'react';

/* 
	name
	email
	phone
	img		*/

class Contact extends Component {
	render() {
		console.log(this.props)
		return (
			<div className="contact">
				<div className="top">
					<img src={this.props.image} alt={this.props.name}/>
					<h4>Name: {this.props.name}</h4>
				</div>
				<div className="bottom">
					<p>Phone: {this.props.phone}</p>
					<p>Email: {this.props.email}</p>
					<button onClick={() => this.props.deleteUser(this.props.id)}>Delete User</button>
				</div>
			</div>
		)
	}
}

export default Contact;