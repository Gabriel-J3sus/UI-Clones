import React from 'react';

import { 
    Container, 
    Retweeted, 
    RocketSeatIcon,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon    
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
        <Retweeted>
            <RocketSeatIcon />
            Você Retweetou
        </Retweeted>

        <Body>
            <Avatar />

            <Content>
                <Header>
                    <strong> Rocketseat </strong>
                    <span> @Rocketseat </span>
                    <Dot />
                    <time> 2 de Agosto </time>
                </Header>

                <Description> Foguete não tem ré </Description>
                
                <ImageContent />

                <Icons>
                    <Status>
                        <CommentIcon />
                        10
                    </Status>
                    <Status>
                        <RetweetIcon />
                        18
                    </Status>
                    <Status>
                        <LikeIcon />
                        999
                    </Status>
                </Icons>
            </Content>
        </Body>
    </Container>
  );
}

export default Tweet;