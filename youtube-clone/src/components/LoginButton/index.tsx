import React from 'react';

import { Container, UserIcon } from './styles';

const LoginButton: React.FC = () => {
  return  (
    <Container>
      <UserIcon />
      <span> fazer login </span>
    </Container>
  );
}

export default LoginButton;