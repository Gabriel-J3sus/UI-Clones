import React from 'react';

import Feed from '../Feed';

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined> Editar perfil </EditButton>

        <h1> Gabriel Jesus </h1>
        <h2> @Gabriel_J3sus </h2>

        <p>
          Student at <a href="http://eteccamargoaranha.com.br/"> ETEC Professor Camargo Aranha </a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 3 de maio de 2004
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong> 1220 </strong>
          </span>
          <span>
            <strong> 948 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;