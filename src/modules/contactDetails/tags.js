import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, Chip } from 'react-md';
import { Creatable } from 'react-select-plus';


export class TagDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chips: [
			"Text Chip",
			"Javascript",
			"React",
			"ReactJS",
			"ReactNative",
			"MongoDB",
			"NodeJS",
			"ExpressJS",
			"Firebase",
			"SQL",
			"Mongoose"],
			multi: true,
			multiValue: [],
			options: [
				{ value: 'Red', label: 'Red' },
				{ value: 'Green', label: 'Green' },
				{ value: 'Blue', label: 'Blue' }
			],
			value: undefined

		}
	}

	handleOnChange (value) {
		const { multi } = this.state;
		const tagsArray = value.map((tag) => tag.value);
		if (multi) {
			this.setState({ multiValue: value });
		} else {
			this.setState({ value });
		}
		this.setState({ addedChips: this.state.chips.concat(tagsArray) })
	}

	handleClick() {
		this.setState({ chips: this.state.addedChips})
	}
	render() {
		const { multi, multiValue, options, value } = this.state;
		return (
			<div className="tags-main-div">
				<div className="tags-container">
					<div className="chips-container">
						{ 
							this.state.chips.map((value, i) => <Chip key={i} label={value} removable />)
						}
					</div>
					<div className="chip-select">
						<Creatable
							multi={multi}
							options={options}
							onChange={(e) => this.handleOnChange(e)}
							value={multi ? multiValue : value}
							placeholder="Select/Add a new tag"
						/>
						<Button onClick={() => this.handleClick()} raised primary label="Add this tag"/>
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