import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);


    return (
        <Container>
            <Messages ref={messagesRef}>
            {/*Colocando várias mensagens */}
            {Array.from(Array(15).keys()).map((n) => (
                <ChannelMessage 
                    author="Gabriel Jesus"
                    date="29/08/2020"
                    content="Bom dia!"
                />
            ))}
            

                <ChannelMessage 
                    author="Jorge"
                    date="29/08/2020"
                    content={
                        <>
                            <Mention> @Gabriel Jesus </Mention>, você fez o trabalho do Bruno?
                        </>
                    }
                    hasMention
                    isBot
                />

            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;