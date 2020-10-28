import React from 'react';

import { Container } from './styles';

const Footer = () => {
  return (
    <Container>
      <p>
        Feito com <span role='img' aria-label='coração'>💛</span> por Gabriel Jesus
        <br />
        Direitos de imagem para Netflix <br />
        Dados pegos do site Themoviedb.org
      </p>
    </Container>
  );
};

export default Footer;
