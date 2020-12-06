import React from 'react';

import logo from '../../images/Nubank_Logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Top, Logo, Title } from './styles';


export default function Header() {
    return (
        <Container>
            <Top>
                <Logo source={logo}/>
                <Title>Gabriel</Title>
            </Top>

            <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
        </Container>
    );
}