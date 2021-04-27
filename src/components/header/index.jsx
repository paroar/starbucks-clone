import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Container, MenuBtn, Logo, Icon,
} from './styles/headerStyle';

const Header = ({ children }) => (
  <Container>{children}</Container>
);

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: PropTypes.node,
};

Header.MenuBtn = ({ children }) => (
  <MenuBtn>
    {children}
  </MenuBtn>
);

Header.MenuBtn.propTypes = {
  children: PropTypes.node,
};

Header.MenuBtn.defaultProps = {
  children: PropTypes.node,
};

Header.Icon = ({ src, alt }) => (
  <Icon src={src} alt={alt} />
);

Header.Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Header.Logo = ({ src, alt, to }) => (
  <Link to={to}>
    <Logo src={src} alt={alt} />
  </Link>
);

Header.Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Header;
