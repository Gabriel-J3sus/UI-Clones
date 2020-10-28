import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
      <Container>
          <ProfileCircle src="https://avatars1.githubusercontent.com/u/60709667?v=4" />
          <SearchInput placeholder="Pesquisar" />
          <MessageIcon />
      </Container>
  );
}

export default MobileHeader;