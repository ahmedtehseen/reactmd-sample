import React, { Component } from 'react';
import { Button, TextField, SelectField } from 'react-md';
import { Link } from 'react-router';

import './addTag.css';

const Items = ['javascript','ReactJS','Redux'];

export class AddOrCreateTag extends Component {
	render() {
		return (
			<div className="addTag-container">
				<div className="btn-group">
					<Button className="close-button" icon>close</Button>
				</div>
				<h1 className="text-center">Add (or create) a tag</h1>
				<div className="tags-search-box">
					<TextField
			      id="floatingCenterTitle"
			      label="Enter a Tag"
			      lineDirection="center"
			      placeholder="Some tag"
			      className="md-cell md-cell--bottom"
			    />
				</div>
				<div className="tags-select">
					<SelectField
	          id="tags"
	          label="Select a new tag"
	          placeholder="Select a new Tag"
	          menuItems={Items}
	          className="md-cell"
	          helpOnFocus
	          helpText="Select some state for me"
	        />
				</div>
				<div className="addTag-bottom-btn-group">
					<Link to="/contact-details">
						<Button raised primary label="Save Tag" />
					</Link>
				</div>
			</div>
		);
	};
};