import React, { Component } from 'react';
import {
 DataTable, 
 TableHeader, 
 TableBody, 
 TableRow, 
 TableColumn,
 Button,
 ListItem
} from 'react-md';
import MenuButton from 'react-md/lib/Menus/MenuButton';

import './dataTable.css'


export class ClientTable extends Component {
	render() {
		return (
			<div className="client-table">
				<DataTable baseId="client-table">
	        <TableHeader>
	          <TableRow autoAdjust={false}>
	            <TableColumn>Name</TableColumn>
	            <TableColumn>Date</TableColumn>
	            <TableColumn>Amount</TableColumn>
	            <TableColumn>Options</TableColumn>
	          </TableRow>
	        </TableHeader>
	        <TableBody>
	        	<TableRow>
	          	<TableColumn>John</TableColumn>
	          	<TableColumn>12/5/2017</TableColumn>
	          	<TableColumn>$ 2000</TableColumn>
	          	<TableColumn>
	          		<MenuButton
				          id="table-menu"
				          icon
				          buttonChildren="more_vert"
				          className="menu-example"
				        >
				          <ListItem primaryText="Remove" />
				          <ListItem primaryText="Delete" />
				          <ListItem primaryText="Group" />
				        </MenuButton>
	          	</TableColumn>
	          </TableRow>
	          <TableRow>
	          	<TableColumn>Anna</TableColumn>
	          	<TableColumn>4/4/2016</TableColumn>
	          	<TableColumn>$ 3000</TableColumn>
	          	<TableColumn>
	          		<MenuButton
				          id="table-menu"
				          icon
				          buttonChildren="more_vert"
				          className="menu-example"
				        >
				          <ListItem primaryText="Remove" />
				          <ListItem primaryText="Delete" />
				          <ListItem primaryText="Group" />
				        </MenuButton>
	          	</TableColumn>
	          </TableRow>
	          <TableRow>
	          	<TableColumn>Naruto</TableColumn>
	          	<TableColumn>22/6/2017</TableColumn>
	          	<TableColumn>$ 4000</TableColumn>
	          	<TableColumn>
	          		<MenuButton
				          id="table-menu"
				          icon
				          buttonChildren="more_vert"
				          className="menu-example"
				        >
				          <ListItem primaryText="Remove" />
				          <ListItem primaryText="Delete" />
				          <ListItem primaryText="Group" />
				        </MenuButton>
	          	</TableColumn>
	          </TableRow>
	          <TableRow>
	          	<TableColumn>Guko</TableColumn>
	          	<TableColumn>1/7/2017</TableColumn>
	          	<TableColumn>$ 4500</TableColumn>
	          	<TableColumn>
	          		<MenuButton
				          id="table-menu"
				          icon
				          buttonChildren="more_vert"
				          className="menu-example"
				        >
				          <ListItem primaryText="Remove" />
				          <ListItem primaryText="Delete" />
				          <ListItem primaryText="Group" />
				        </MenuButton>
	          	</TableColumn>
	          </TableRow>
	          <TableRow>
	          	<TableColumn>Gohan</TableColumn>
	          	<TableColumn>1/5/2016</TableColumn>
	          	<TableColumn>$ 5000</TableColumn>
	          	<TableColumn>
	          		<MenuButton
				          id="table-menu"
				          icon
				          buttonChildren="more_vert"
				          className="menu-example"
				        >
				          <ListItem primaryText="Remove" />
				          <ListItem primaryText="Delete" />
				          <ListItem primaryText="Group" />
				        </MenuButton>
	          	</TableColumn>
	          </TableRow>
	          <TableRow>
	          	<TableColumn>Sasuke</TableColumn>
	          	<TableColumn>12/5/2017</TableColumn>
	          	<TableColumn>$ 6000</TableColumn>
	          	<TableColumn>
	          		<MenuButton
				          id="table-menu"
				          icon
				          buttonChildren="more_vert"
				          className="menu-example"
				        >
				          <ListItem primaryText="Remove" />
				          <ListItem primaryText="Delete" />
				          <ListItem primaryText="Group" />
				        </MenuButton>
	          	</TableColumn>
	          </TableRow>
	          <TableRow>
	          	<TableColumn>Vageta</TableColumn>
	          	<TableColumn>2/2/2014</TableColumn>
	          	<TableColumn>$ 7000</TableColumn>
	          	<TableColumn>
	          		<MenuButton
				          id="table-menu"
				          icon
				          buttonChildren="more_vert"
				          className="menu-example"
				        >
				          <ListItem primaryText="Remove" />
				          <ListItem primaryText="Delete" />
				          <ListItem primaryText="Group" />
				        </MenuButton>
	          	</TableColumn>
	          </TableRow>
	          <TableRow>
	          	<TableColumn>Kakashi</TableColumn>
	          	<TableColumn>30/12/2016</TableColumn>
	          	<TableColumn>$ 8000</TableColumn>
	          	<TableColumn>
	          		<MenuButton
				          id="table-menu"
				          icon
				          buttonChildren="more_vert"
				          className="menu-example"
				        >
				          <ListItem primaryText="Remove" />
				          <ListItem primaryText="Delete" />
				          <ListItem primaryText="Group" />
				        </MenuButton>
	          	</TableColumn>
	          </TableRow>
	          <TableRow>
	          	<TableColumn>Obito</TableColumn>
	          	<TableColumn>12/5/2017</TableColumn>
	          	<TableColumn>$ 9000</TableColumn>
	          	<TableColumn>
	          		<MenuButton
				          id="table-menu"
				          icon
				          buttonChildren="more_vert"
				          className="menu-example"
				        >
				          <ListItem primaryText="Remove" />
				          <ListItem primaryText="Delete" />
				          <ListItem primaryText="Group" />
				        </MenuButton>
	          	</TableColumn>
	          </TableRow>
	          <TableRow>
	          	<TableColumn>Madara</TableColumn>
	          	<TableColumn>17/7/2017</TableColumn>
	          	<TableColumn>$ 10000</TableColumn>
	          	<TableColumn>
	          		<MenuButton
				          id="table-menu"
				          icon
				          buttonChildren="more_vert"
				          className="menu-example"
				        >
				          <ListItem primaryText="Remove" />
				          <ListItem primaryText="Delete" />
				          <ListItem primaryText="Group" />
				        </MenuButton>
	          	</TableColumn>
	          </TableRow>
	        </TableBody>
	      </DataTable>
	      <Button
          onClick={this._updateCount}
          floating
          secondary
          fixed
        >
          add
        </Button>
	      <footer className="md-paper md-paper--2 md-bottom-navigation md-background--card client-footer">
	      	<div className="footer-left">
		      	<span>17 tags selected</span>
		      	<a href="#">Delete</a>
	      	</div>
	      	<div className="footer-right">
	      		<MenuButton
		          id="footer-menu"
		          icon
		          buttonChildren="more_vert"
		          className="menu-example"
		          position={MenuButton.Positions.TOP_RIGHT}
		        >
		        	<ListItem primaryText="Move to group" />
		        </MenuButton>
	      	</div>
	      </footer>
			</div>
		);
	};
};