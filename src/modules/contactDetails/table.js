import React, { Component } from 'react';
import {
	DataTable, 
	TableHeader, 
	TableBody, 
	TableRow, 
	TableColumn,
	Button
} from 'react-md';
import { Link } from 'react-router';


export class TableDetails extends Component {
	render() {
		return (
			<div>
				<DataTable plain className="record-table">
	        <TableHeader>
	          <TableRow >
	            <TableColumn adjusted>Name</TableColumn>
	            <TableColumn>Date</TableColumn>
	            <TableColumn>Amount</TableColumn>
	          </TableRow>
	        </TableHeader>
	        <TableBody>
	          <TableRow>
			        <TableColumn>Anna</TableColumn>
			        <TableColumn>20/june/2017</TableColumn>
			        <TableColumn>$ 3000</TableColumn>
			      </TableRow>
			      <TableRow>
			        <TableColumn>John</TableColumn>
			        <TableColumn>5/july/2017</TableColumn>
			        <TableColumn>$ 5000</TableColumn>
			      </TableRow>
			      <TableRow>
			        <TableColumn>Tracy</TableColumn>
			        <TableColumn>23/june/2017</TableColumn>
			        <TableColumn>$ 2000</TableColumn>
			      </TableRow>
	        </TableBody>
	      </DataTable>
	      <div className="table-btn-group">
					<Link to="/search">
						<Button raised primary label="Back" />
					</Link>
					<Link to="/contact-table">
						<Button raised primary label="Next" />
					</Link>
				</div>
      </div>
		);
	};
};