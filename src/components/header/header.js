import React from 'react';
import SearchCity from '../search-city/search-city';
import './header.css';

const Header = ({onClickSearchHandler}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          Прогноз погоды на 5 дней
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <SearchCity onClickSearchHandler={onClickSearchHandler}/>
      </form>
    </div>
  </nav>
  );
}

export default Header;