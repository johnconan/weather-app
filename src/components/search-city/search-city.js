import React from 'react';
import './search-city.css';

class SearchCity extends React.Component {

  state = {
    term: ''
  }

  searchHandler = (e) => {
    e.preventDefault();
    if(this.state.term.trim() === '') {
      e.preventDefault();
    } else {
      this.props.onClickSearchHandler(this.state.term);
    }
  }

  searchChangeHandler = (e) => {
    this.setState({
      term: e.target.value
    })
  };

  render() {
    return (
        <React.Fragment>
          <input 
            value={this.state.term} 
            onChange={this.searchChangeHandler} 
            type="search"
            className="form-control mr-sm-2"
            placeholder="Введите город"/>
          <button 
            onClick={this.searchHandler}
            type="submit" 
            className="btn btn-outline-success my-2 my-sm-0">Найти</button>
        </React.Fragment >
    );
  }
};

export default SearchCity;
