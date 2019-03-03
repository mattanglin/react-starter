import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLoading, getValue } from 'state/app';

const propTypes = {
  isLoading: PropTypes.bool.isRequired,
  value: PropTypes.number,
};
const defaultProps = {
  value: undefined,
};

const Page3 = ({
  isLoading,
  value,
}) => (
  <div>
    <h1>Page 3</h1>
    <p>This is the THIRD page!!!</p>
    {isLoading ? (
      <p>...LOADING CONTENT...</p>
    ) : (
      <p>Value: <b>{value}</b></p>
    )}
  </div>
);

Page3.propTypes = propTypes;
Page3.defaultProps = defaultProps;

export default connect(
  state => ({
    isLoading: getLoading(state),
    value: getValue(state),
  }),
)(Page3);
