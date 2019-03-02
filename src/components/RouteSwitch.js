import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
  location: state.location,
});

/**
 * General route component
 */
export const RouteSwitch = ({
  location,
  routes
}) => {
  const RouteComponent = routes[location.type];

  if (RouteComponent) {
    return <RouteComponent location={location} />;
  }

  return null;
};

RouteSwitch.propTypes = {
  /**
   * Route location from redux-first router
   */
  location: PropTypes.shape({
    type: PropTypes.string,
  }).isRequired,
  /**
   * Route object with location.type keys
   * and route component values.
   */
  routes: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps)(RouteSwitch);
