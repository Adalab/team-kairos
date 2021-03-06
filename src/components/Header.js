import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Header.scss';

const Header = props => {
  const { email, logged } = props;
  return (
    <header className="header">
      <div>
        <h1 className="titlepage">Asignacion de procesos KairosDs</h1>
        <a href="https://www.kairosds.com/" target="blank">
          <div className="header__logo">
            <img src="https://www.kairosds.com/wp-content/uploads/2016/05/logo-general.png" alt="logo-kairos" className="header__img" />
          </div>
        </a>
      </div>
      <div className="header__logo-user">
        <p className="user">{(logged) ? email : `user`}</p>
        <i className="fas fa-user-alt"></i>
      </div>
    </header>
  );
};

Header.propTypes = {
  logged: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
};

export default Header;