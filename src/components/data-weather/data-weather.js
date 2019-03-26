import React from 'react';
import withConsumer from '../hoc/with-consumer';
import CardWeather from '../card-weather/card-weather';

const DataWeather = ({ weather }) => {

  const arrayWeather = weather.map((item, index) => {
    return (
      <CardWeather key={index} item={item}/>
    );
  })
    return (
      <React.Fragment>
        {arrayWeather}
      </React.Fragment>
    );
};

export default withConsumer()(DataWeather);