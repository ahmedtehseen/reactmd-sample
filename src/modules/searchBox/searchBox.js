import React, { Component } from 'react';
import { Button, TextField } from 'react-md';
import { Link } from 'react-router';

import './searchBox.css';

export class SearchBox extends Component {
	render() {
		return (
			<div className="search-container">
				<div className="btn-group">
					<Button className="close-button" icon>close</Button>
				</div>
				<h1 className="text-center">Give this search a name</h1>
				<div className="search-box">
					<TextField
			      id="floatingCenterTitle"
			      label="Title"
			      lineDirection="center"
			      placeholder="Hello World"
			      className="md-cell md-cell--bottom"
			    />
				</div>
				<div className="search-bottom-btn-group">
					<Link to="/contact-details">
						<Button raised primary label="Save" />
					</Link>
				</div>
			</div>
		);
	};
};