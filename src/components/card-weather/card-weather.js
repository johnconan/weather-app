import React from 'react';
import './card-weather.css';
import Clear from '../weather/clear/Clear';
import Rain from '../weather/rain/Rain';
import Clouds from '../weather/clouds/Clouds';
import Snow from '../weather/snow/Snow';
import withConsumer from '../hoc/with-consumer';


const CardWeather = ({ item }) => {
  return (
    <div className="card-weather">
       
        <div className="card-weather__image">
          {item.main === 'Clouds' ? <Clouds/> : null}
          {item.main === 'Rain' ? <Rain/> : null}
          {item.main === 'Snow' || item.main === 'Drizzle' ? <Snow/> : null}
          {item.main === 'Clear' ? <Clear/> : null}
        </div>
          
    </div>
  );
};

export default withConsumer()(CardWeather);