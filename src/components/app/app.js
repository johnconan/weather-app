import React, { Component } from 'react';
import './app.css';
import CityData from '../city-data/city-data';
import Weather from '../../weather-api/weather-api';
import withConsumer from '../hoc/with-consumer';
import { Provider } from '../context-api/context-api';
import Header from '../header/header';


class App extends Component {

  weather = new Weather();

  state = {
    dataFiveDay: [],
    loading: true,
    nameId: 'Galich',
  }

  componentDidMount() {
    this.dataFive();
  }

  componentDidUpdate (prevProps, nextProps) {
    if(prevProps.nameId !== nextProps.nameId) {
      this.dataFive();
    }
  }

  dataFive() {
    this.weather.fiveDay(this.state.nameId)
    .then(data => {
      this.setState({
        name: data.city.name,
        dataFiveDay: data.list,
        loading: false
      })
    })
    .catch(() => {
      this.setState({
        loading: false
      })
    })
  }

  onClickSearchHandler = (nameId) => {
    this.setState({
      nameId
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header onClickSearchHandler={this.onClickSearchHandler} />
        <div className="container">
          <Provider value={this.state}>
              <CityData/>
          </Provider>
        </div>
      </React.Fragment>
    );
  }
}

export default withConsumer()(App);

