import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, Chip } from 'react-md';
import { Creatable } from 'react-select-plus';


export class TagDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			multi: true,
			multiValue: [],
			options: [
				{ value: 'R', label: 'Red' },
				{ value: 'G', label: 'Green' },
				{ value: 'B', label: 'Blue' }
			],
			value: undefined

		}
	}

	handleOnChange (value) {
		const { multi } = this.state;
		if (multi) {
			this.setState({ multiValue: value });
		} else {
			this.setState({ value });
		}
	}

	render() {
		const { multi, multiValue, options, value } = this.state;
		return (
			<div className="tags-main-div">
				<div className="tags-container">
					<div className="chips-container">
						<Chip label="Text Chip" removable />
						<Chip label="Javascript" removable />
						<Chip label="React" removable />
						<Chip label="ReactJS" removable />
						<Chip label="ReactNative" removable />
						<Chip label="MongoDB" removable />
						<Chip label="NodeJS" removable />
						<Chip label="ExpressJS" removable />
						<Chip label="SqlLite" removable />
						<Chip label="Firebase" removable />
						<Chip label="Redux" removable />
						<Chip label="Webpack" removable />
						<Chip label="Babel" removable />
						<Chip label="JSON" removable />
					</div>
					<div className="chip-select">
						<Creatable
							multi={multi}
							options={options}
							onChange={(e) => this.handleOnChange(e)}
							value={multi ? multiValue : value}
							placeholder="Select/Add a new tag"
						/>
					</div>
				</div>
				<div className="tags-btn-group">
					<Link to="tags">
						<Button raised primary label="Save" />
					</Link>
				</div>
			</div>
		);
	};
};