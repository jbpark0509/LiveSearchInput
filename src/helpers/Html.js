'use strict';

import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';

export default class Html extends Component{

  constructor(props){
    super(props);
  }

  initStates(){

  }

  render(){
    const {assets, component, store} = this.props;
    const content = component ? ReactDOM.renderToString(component) : '';
    return(
      <html lang="en-US">
        <head>
          <title>Live Search Input</title>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/favicon.ico" />
          {/* styles (will be present only in production with webpack extract text plugin) */}
          {Object.keys(assets.styles).map((style, key) =>
            <link href={assets.styles[style]} key={key} media="screen, projection"
                  rel="stylesheet" type="text/css" charSet="UTF-8"/>
          )}
        </head>
        <body>
          <div className="container">
            <div id="content" dangerouslySetInnerHTML={{__html: content}}/>
          </div>
            <script dangerouslySetInnerHTML={{__html: `window.__INITSTATE__=${serialize(store.getState())};`}} charSet="UTF-8"/>
            <script src={assets.javascript.main} charSet="UTF-8"/>
        </body>
      </html>
    );
  }
}

Html.propTypes = {
  assets: PropTypes.object,
  component: PropTypes.node,
  store: PropTypes.object
}