import React from 'react';
import withConsumer from '../hoc/with-consumer';
import DataWeather from '../data-weather/data-weather';

const CityDataList = ({ context }) => {
  const weatherArr = context.dataFiveDay.map((item, index) => {

    const timeConverter = (UNIX_timestamp) =>{
      let a = new Date(UNIX_timestamp * 1000);
      const months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
      let year = a.getFullYear();
      let month = months[a.getMonth()];
      let date = a.getDate();
      let hour = a.getHours();
      let min = a.getMinutes();
      let sec = a.getSeconds();
      let time = `${date} ${month} ${year} ${hour}:${min}${sec}`;
      return time;
    }
    
    return(
      <ul className="col-md-4" key={index}>
        <li className="list-group-item" >Город: {context.name}</li>
        <li style={{ padding: '40px' }} className="list-group-item"> <DataWeather keyItem={context.key} weather={item.weather}/></li>
        <li className="list-group-item">Дата: {timeConverter(item.dt)}</li>
        <li className="list-group-item" >Температура: { Math.floor(item.main.temp)} &deg;С</li>
        <li className="list-group-item" >Давление: { Math.floor(item.main.pressure / 1.333) } мм.</li>
        <li style={{ marginBottom: '10px' }} className="list-group-item" >Влажность: {item.main.humidity} %</li>
      </ul>
    );
  })

    return (
      <React.Fragment>
        {weatherArr}
      </React.Fragment>
    );
    
};

export default withConsumer()(CityDataList);