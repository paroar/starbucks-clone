import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Group, Frame, Item, Info, Title, SubTitle, Text, Image, Button,
} from './styles/jumbotronStyled';

const Jumbotron = ({ children }) => (
  <Container>{children}</Container>
);

Jumbotron.propTypes = {
  children: PropTypes.node,
};

Jumbotron.defaultProps = {
  children: PropTypes.node,
};

Jumbotron.Group = ({ children }) => (
  <Group>{children}</Group>
);

Jumbotron.Group.propTypes = {
  children: PropTypes.node.isRequired,
};

Jumbotron.Frame = ({
  children, bgColor, color, direction,
}) => (
  <Frame bgColor={bgColor} color={color} direction={direction}>{children}</Frame>
);

Jumbotron.Frame.propTypes = {
  children: PropTypes.node,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  direction: PropTypes.string,
};

Jumbotron.Frame.defaultProps = {
  children: PropTypes.node,
  bgColor: '#ffffff',
  color: '#000000',
  direction: 'column',
};

Jumbotron.Item = ({ children, width }) => (
  <Item width={width}>{children}</Item>
);

Jumbotron.Item.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number,
};

Jumbotron.Item.defaultProps = {
  children: PropTypes.node,
  width: 100,
};

Jumbotron.Info = ({ children }) => (
  <Info>{children}</Info>
);

Jumbotron.Info.propTypes = {
  children: PropTypes.node,
};

Jumbotron.Info.defaultProps = {
  children: PropTypes.node,
};

Jumbotron.Title = ({ children }) => (
  <Title>{children}</Title>
);

Jumbotron.Title.propTypes = {
  children: PropTypes.node.isRequired,
};

Jumbotron.SubTitle = ({ children }) => (
  <SubTitle>
    {children}
  </SubTitle>
);

Jumbotron.SubTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

Jumbotron.Text = ({ children }) => (
  <Text>{children}</Text>
);

Jumbotron.Text.propTypes = {
  children: PropTypes.node.isRequired,
};

Jumbotron.Image = ({ src, alt }) => (
  <Image src={src} alt={alt} />
);

Jumbotron.Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

Jumbotron.Button = ({ children, color }) => (
  <Button color={color}>{children}</Button>
);

Jumbotron.Button.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

Jumbotron.Button.defaultProps = {
  children: PropTypes.node,
  color: PropTypes.string,
};

export default Jumbotron;
