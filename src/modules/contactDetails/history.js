import React, { Component } from 'react';
import { Paper } from 'react-md';

export class History extends Component {
	render() {
		return (
			<div className="stepper-container">
				<div className="step">
          <div className="center-line">
            <div className="line first-line"></div>
          </div>
        </div>
        <div className="step">
            <div className="body-right">
            	<div className="paper-container">
            	<Paper
				        zDepth={2}
				        className="paper-example"
				      >
				      </Paper>
				      </div>
            </div>
            <div className="center-line">
                <div className="circle"></div>
                <div className="line"></div>
            </div>
            <div className="text-left">
            	<p>SEPT 2ND</p>
            </div>
        </div>
        <div className="step">
            <div className="text-right">
            	<p>SPET 7TH</p>
            </div>
            <div className="center-line">
                <div className="circle"></div>
                <div className="line"></div>
            </div>
            <div className="body-left">
            	<Paper
				        zDepth={2}
				        className="paper-example"
				      >
				      </Paper>
            </div>
        </div>
        <div className="step">
            <div className="body-right">
            	<Paper
				        zDepth={2}
				        className="paper-example"
				      >
				      </Paper>
            </div>
            <div className="center-line">
                <div className="circle"></div>
                <div className="line last-line"></div>
            </div>
            <div className="text-left">
            	<p>OCT 13TH</p>
            </div>
        </div>
      </div>
		);
	};
};