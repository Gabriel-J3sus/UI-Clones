import React from 'react';

import VideoCard from '../../components/VideoCard';

import { Container, Separator, Wrapper } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <Separator />
      <Wrapper>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />      
      </Wrapper>
      
      <Separator />
    </Container>
  );
}

export default Menu;