import React from 'react';
import { removeFeature } from '../actions';
import { connect } from 'react-redux';

const AddedFeature = ({ feature, removeFeature }) => {
  const handleRemove = () => {
    removeFeature(feature);
  };
  return (
    <li>
      <button className="button" onClick={handleRemove}>
        X
      </button>
      {feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
