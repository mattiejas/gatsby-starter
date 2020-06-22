import React from 'react';
import styled from '@emotion/styled';

const Title = styled.h1`
  margin: 10px;
  text-align: center;
`;

const Header = ({ title }) => <Title>{title}</Title>;

export default Header;
