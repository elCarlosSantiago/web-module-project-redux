import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from './../actions';

const AdditionalFeature = ({ feature, addFeature }) => {
  const handleAddFeature = () => {
    addFeature(feature);
  };

  return (
    <li>
      <button className="button" onClick={handleAddFeature}>
        Add
      </button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default connect(null, { addFeature })(AdditionalFeature);
