import React from 'react';
import { Header } from '../components';
import logo from '../logo.svg';
import { HOME } from '../constants/routes';
import JumbotronContainer from '../containers/jumbotronContainer';

const Home = () => (
  <>
    <Header>
      <Header.Logo src={logo} alt="logo" to={HOME} />
      <Header.MenuBtn>
        <Header.Icon src="/images/menu.svg" alt="menu-icon" />
      </Header.MenuBtn>
    </Header>
    <JumbotronContainer />
  </>
);

export default Home;
