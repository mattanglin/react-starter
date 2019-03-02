import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom/server';

const propTypes = {
  assets: PropTypes.shape({
    javascript: PropTypes.object,
    styles: PropTypes.object,
  }).isRequired,
  component: PropTypes.func,
};
const defaultProps = {
  component: undefined,
};

const Html = ({
  assets,
  component,
  // store,
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
