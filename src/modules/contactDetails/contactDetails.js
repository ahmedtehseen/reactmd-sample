import React, { Component } from 'react';
import { 
	Avatar,
	FontIcon,
	Tab,
	Tabs,
	TabsContainer
} from 'react-md';

import { TableDetails } from './table';
import { History } from './history';
import { TagDetails } from './tags';

import './contactDetails.css';

export class ContactDetails extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tabIndex: 3
		}
	}
	render() {
		return (
			<div className="contact-details">
				<div className="avatar-left">
					<Avatar className="body-avatar" src={process.env.PUBLIC_URL+'./avatar.jpg'} role="presentation" />
				</div>
				<div className="details-container">
					<div className="personal-details">
						<h1>First Last</h1>
						<p>
							name@email.com&nbsp;&nbsp;
							<FontIcon>mail</FontIcon>
						</p>
						<p>
							813-421-1554&nbsp;&nbsp;
							<FontIcon>phone</FontIcon>
						</p>
						<br/>
						<p>
							11806 Starwood Gate Dr.&nbsp;&nbsp;
							<FontIcon>contact_mail</FontIcon>
						</p>
						<p className="address">
							Fiarview, FL 33579 USA
						</p>
					</div>
					<div className="tabs-container">
						<TabsContainer panelClassName="md-grid">
			        <Tabs tabId="tab" className="custom-tab">
			        	<Tab label="Basic">
			            <h3 className="md-cell md-cell--12">Hello, Basic!</h3>
			          </Tab>
			          <Tab label="Tags" className="tags-div">
			            <TagDetails />
			          </Tab>
			          <Tab label="History" className="history-contaniner">
			            <History />
			          </Tab>
			          <Tab label="Invoices">
									<TableDetails />
			          </Tab>
			        </Tabs>
			      </TabsContainer>
		      </div>
				</div>
			</div>
		);
	};
};

