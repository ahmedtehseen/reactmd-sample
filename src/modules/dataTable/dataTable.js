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
	            <TableColumn>Group</TableColumn>
	            <TableColumn>Date</TableColumn>
	            <TableColumn></TableColumn>
	          </TableRow>
	        </TableHeader>
	        <TableBody>
	        	<TableRow>
	          	<TableColumn>John</TableColumn>
	          	<TableColumn>Group one</TableColumn>
	          	<TableColumn>12/5/2017</TableColumn>
	          	<TableColumn>
	          		<MenuButton
				          id="table-menu"
				          icon
				          buttonChildren="more_vert"
				          className="menu-example"
				        >
				          <ListItem primaryText="Rename" />
				          <ListItem primaryText="Delete" />
				          <ListItem primaryText="Group" />
				        </MenuButton>
	          	</TableColumn>
	          </TableRow>
	          <TableRow>
	          	<TableColumn>Anna</TableColumn>
	          	<TableColumn>Group two</TableColumn>
	          	<TableColumn>4/4/2016</TableColumn>
	          	<TableColumn>
	          		<MenuButton
				          id="table-menu"
				          icon
				          buttonChildren="more_vert"
				          className="menu-example"
				        >
				          <ListItem primaryText="Rename" />
				          <ListItem primaryText="Delete" />
				          <ListItem primaryText="Group" />
				        </MenuButton>
	          	</TableColumn>
	          </TableRow>
	          <TableRow>
	          	<TableColumn>Naruto</TableColumn>
	          	<TableColumn>Group three</TableColumn>
	          	<TableColumn>22/6/2017</TableColumn>
	          	<TableColumn>
	          		<MenuButton
				          id="table-menu"
				          icon
				          buttonChildren="more_vert"
				          className="menu-example"
				        >
				          <ListItem primaryText="Rename" />
				          <ListItem primaryText="Delete" />
				          <ListItem primaryText="Group" />
				        </MenuButton>
	          	</TableColumn>
	          </TableRow>
	          <TableRow>
	          	<TableColumn>Guko</TableColumn>
	          	<TableColumn>Group four</TableColumn>
	          	<TableColumn>1/7/2017</TableColumn>
	          	<TableColumn>
	          		<MenuButton
				          id="table-menu"
				          icon
				          buttonChildren="more_vert"
				          className="menu-example"
				        >
				          <ListItem primaryText="Rename" />
				          <ListItem primaryText="Delete" />
				          <ListItem primaryText="Group" />
				        </MenuButton>
	          	</TableColumn>
	          </TableRow>
	          <TableRow>
	          	<TableColumn>Gohan</TableColumn>
	          	<TableColumn>Group five</TableColumn>
	          	<TableColumn>1/5/2016</TableColumn>
	          	<TableColumn>
	          		<MenuButton
				          id="table-menu"
				          icon
				          buttonChildren="more_vert"
				          className="menu-example"
				        >
				          <ListItem primaryText="Rename" />
				          <ListItem primaryText="Delete" />
				          <ListItem primaryText="Group" />
				        </MenuButton>
	          	</TableColumn>
	          </TableRow>
	          <TableRow>
	          	<TableColumn>Sasuke</TableColumn>
	          	<TableColumn>Group six</TableColumn>
	          	<TableColumn>12/5/2017</TableColumn>
	          	<TableColumn>
	          		<MenuButton
				          id="table-menu"
				          icon
				          buttonChildren="more_vert"
				          className="menu-example"
				        >
				          <ListItem primaryText="Rename" />
				          <ListItem primaryText="Delete" />
				          <ListItem primaryText="Group" />
				        </MenuButton>
	          	</TableColumn>
	          </TableRow>
	          <TableRow>
	          	<TableColumn>Vageta</TableColumn>
	          	<TableColumn>Group seven</TableColumn>
	          	<TableColumn>2/2/2014</TableColumn>
	          	<TableColumn>
	          		<MenuButton
				          id="table-menu"
				          icon
				          buttonChildren="more_vert"
				          className="menu-example"
				        >
				          <ListItem primaryText="Rename" />
				          <ListItem primaryText="Delete" />
				          <ListItem primaryText="Group" />
				        </MenuButton>
	          	</TableColumn>
	          </TableRow>
	          <TableRow>
	          	<TableColumn>Kakashi</TableColumn>
	          	<TableColumn>Group eight</TableColumn>
	          	<TableColumn>30/12/2016</TableColumn>
	          	<TableColumn>
	          		<MenuButton
				          id="table-menu"
				          icon
				          buttonChildren="more_vert"
				          className="menu-example"
				        >
				          <ListItem primaryText="Rename" />
				          <ListItem primaryText="Delete" />
				          <ListItem primaryText="Group" />
				        </MenuButton>
	          	</TableColumn>
	          </TableRow>
	          <TableRow>
	          	<TableColumn>Obito</TableColumn>
	          	<TableColumn>Group nine</TableColumn>
	          	<TableColumn>12/5/2017</TableColumn>
	          	<TableColumn>
	          		<MenuButton
				          id="table-menu"
				          icon
				          buttonChildren="more_vert"
				          className="menu-example"
				        >
				          <ListItem primaryText="Rename" />
				          <ListItem primaryText="Delete" />
				          <ListItem primaryText="Group" />
				        </MenuButton>
	          	</TableColumn>
	          </TableRow>
	          <TableRow>
	          	<TableColumn>Madara</TableColumn>
	          	<TableColumn>Group ten</TableColumn>
	          	<TableColumn>17/7/2017</TableColumn>
	          	<TableColumn>
	          		<MenuButton
				          id="table-menu"
				          icon
				          buttonChildren="more_vert"
				          className="menu-example"
				        >
				          <ListItem primaryText="Rename" />
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
		      	<Button flat label="Delete" />
	      	</div>
	      	<div className="footer-right">
	      		<MenuButton
				        icon
				        className="menu-button"
				        position={MenuButton.Positions.TOP_RIGHT}
				        id="avatar-menu"
				        buttonChildren="more_vert"
				      >
				      {[<ListItem key='1' primaryText="Move to group" />]}
				    </MenuButton>
	      	</div>
	      </footer>
			</div>
		);
	};
};