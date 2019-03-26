import React from 'react';
import CityDataList from '../city-data-list/city-data-list';
import WithConsumer from '../hoc/with-consumer';

import './city-data.css';

const CityData = ({ context }) => {

  if (context.loading) {
    return <h2>Loading...</h2>
  }

  return (
    <div className="row mt">
      <CityDataList />
    </div>
  );
}

export default WithConsumer()(CityData);