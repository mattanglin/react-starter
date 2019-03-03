import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions, selectors } from 'state/swapi/people';
import { Spinner } from 'components';

const People = ({
  fetchPeople,
  fetching,
  people,
}) => (
  <div>
    <h1>People</h1>
    <button onClick={fetchPeople} type="button">
      Load People
    </button>
    {fetching ? (
      <Spinner />
    ) : (
      <div>
        {people.map((person) => (
          <div key={person.url}>
            {person.name}
          </div>
        ))}
      </div>
    )}
  </div>
);

People.propTypes = {
  fetchPeople: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  people: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};


export default connect(
  (state) => ({
    fetching: selectors.getFetching(state),
    people: selectors.getPeople(state),
  }),
  { fetchPeople: actions.fetchPeople }
)(People);
