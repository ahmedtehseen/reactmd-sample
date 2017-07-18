import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { 
	App,
	AddOrCreateTag,
	ClientTable
} from './modules';
import { Dashboard } from './modules';
import { SearchBox } from './modules';
import { ContactDetails } from './modules';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Dashboard} />
		<Route path="search" component={SearchBox} />
		<Route path="contact-details" component={ContactDetails} />
		<Route path="tags" component={AddOrCreateTag} />
		<Route path="contact-table" component={ClientTable} /> 
 	</Route>
);