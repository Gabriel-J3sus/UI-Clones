import React from 'react';

import { Container, Logo, UserArea } from './styles';

const Header = ({ black }) => {
  return (
    <Container className={black ? 'black' : ''}>
        <Logo>
          <a href="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix" />
          </a>
        </Logo>

        <UserArea>
          <a href="/">
            <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="User" />
          </a>
        </UserArea>
    </Container>
  );
};

export default Header;
