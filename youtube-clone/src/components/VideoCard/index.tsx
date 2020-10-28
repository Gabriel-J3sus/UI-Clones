import React from 'react';

import { Container, Wrapper, VideoImage, VideoData, Avatar, CheckIcon } from './styles';

const VideoCard: React.FC = () => {
  return (
      <Container>
        <Wrapper>

          <VideoImage />
          
          <VideoData>
            <div>
              <Avatar />
              <span> Titulo do video </span>
            </div>
            
            <div>
              <p> 
                Canal
                <CheckIcon />
              </p>
              30 mil visualizações •
              há 2 horas
            </div>
          </VideoData>
        </Wrapper>
      </Container>
  );
}

export default VideoCard;