import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import WebFontLoader from 'webfontloader';
import routes from './routes';

import './index.css';
// react-select css
import 'react-select-plus/dist/react-select-plus.css';


WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});


ReactDOM.render(
	  	<Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
