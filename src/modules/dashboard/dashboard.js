import React, { Component } from 'react';
import { Button } from 'react-md'
import Checkbox from 'react-md/lib/SelectionControls/Checkbox';
import { Link } from 'react-router';

import './dashboard.css'

export class Dashboard extends Component {
	render() {
		return (
			<div className="checkbox-container">
				<div className="btn-group">
					<Button className="close-button" icon>close</Button>
				</div>
				<h1 className="text-center">Columns To Show</h1>
				<div className="checkboxes">
					<Checkbox
			      className="checkbox"
			      id="checkbox1"
			      name="simpleCheckboxes"
			      defaultChecked
			      label="First Name"
			    />
			    <Checkbox
			    	id="checkbox2"
			      className="checkbox"
			      name="simpleCheckboxes"
			      label="First Name"
			    />
			    <Checkbox
			    	id="checkbox3"
			      className="checkbox"
			      name="simpleCheckboxes"
			      label="First Name"
			    />
			    <Checkbox
			    	id="checkbox4"
			      className="checkbox"
			      name="simpleCheckboxes"
			      label="First Name"
			    />
			    <Checkbox
			    	id="checkbox5"
			      className="checkbox"
			      name="simpleCheckboxes"
			      label="First Name"
			    />
			    <Checkbox
			    	id="checkbox6"
			      className="checkbox"
			      name="simpleCheckboxes"
			      label="First Name"
			    />
			    <Checkbox
			    	id="checkbox7"
			      className="checkbox"
			      name="simpleCheckboxes"
			      label="First Name"
			    />
			    <Checkbox
			    	id="checkbox8"
			      className="checkbox"
			      name="simpleCheckboxes"
			      label="First Name"
			    />
			    <Checkbox
			    	id="checkbox9"
			      className="checkbox"
			      name="simpleCheckboxes"
			      label="First Name"
			    />
			    <Checkbox
			    	id="checkbox10"
			      className="checkbox"
			      name="simpleCheckboxes"
			      label="First Name"
			    />
			    <Checkbox
			    	id="checkbox11"
			      className="checkbox"
			      name="simpleCheckboxes"
			      label="First Name"
			    />
			    <Checkbox
			    	id="checkbox12"
			      className="checkbox"
			      name="simpleCheckboxes"
			      label="First Name"
			    />
				</div>
				<div className="bottom-btn-group">
					<Link to="/search">
						<Button raised primary label="OK" />
					</Link>
				</div>
			</div>
		);
	}
}