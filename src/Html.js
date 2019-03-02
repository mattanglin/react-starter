import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';

const propTypes = {
  assets: PropTypes.shape({
    javascript: PropTypes.object,
    styles: PropTypes.object,
  }).isRequired,
  component: PropTypes.element,
  store: PropTypes.shape({
    location: PropTypes.shape({}),
  }).isRequired,
};
const defaultProps = {
  component: undefined,
};

const Html = ({
  assets,
  component,
  store,
}) => {
  const content = component ? ReactDOM.renderToString(component) : '';

  return (
    <html lang="en-US">
      <head>
        <title>React Starter</title>
      </head>
      <body>
        {/* React App Mounting Point */}
        <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
        {/* Javascript */}
        <script dangerouslySetInnerHTML={{ __html: `window.__data=${serialize(store.getState())};` }} charSet="UTF-8" />
        {Object.keys(assets.javascript).map(name => (
          <script key={name} src={assets.javascript[name]} />
        ))}
      </body>
    </html>
  );
};

Html.propTypes = propTypes;
Html.defaultProps = defaultProps;

export default Html;
