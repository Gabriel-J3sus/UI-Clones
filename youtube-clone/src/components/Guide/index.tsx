import React from 'react';

import LoginButton from '../LoginButton';
import { 
    Container,
    HomeIcon,
    FireIcon,
    SubscribeIcon,
    LibraryIcon,
    HistoryIcon,
    MusicIcon,
    BallIcon,
    GamesIcon,
    FilmIcon,
    NewsIcon,
    StreamingIcon,
    LightBulbIcon,
    YoutubeLogo,
    VRIcon,
    PlusIcon,
    SettingsIcon,
    FlagIcon,
    HelpIcon,
    FeedbackIcon,
 } from './styles';

const Guide: React.FC = () => {
  return (
      <Container>
            <ul>
                <li className="active">
                    <div>
                        <HomeIcon />
                        <span> Início </span>
                    </div>
                </li>
                <li>
                    <div>
                        <FireIcon />
                        <span> Em alta </span>
                    </div>
                </li>
                <li>
                    <div>
                        <SubscribeIcon />
                        <span> Inscrições </span>
                    </div>
                </li>

            </ul>
            <ul>
                <li>
                    <div>
                        <LibraryIcon />
                        <span> Biblioteca </span>
                    </div>
                </li>
                <li>
                    <div>
                        <HistoryIcon />
                        <span> Histórico </span>
                    </div>
                </li>

            </ul>
            <ul>
                <li>
                    <p> 
                        Faça login para curtir <br />vídeos, comentar e se <br />inscrever.
                    </p>
                    
                    <span>
                        <LoginButton />
                    </span>
                </li>
            </ul>
            <ul>
                <li>
                    O melhor do youtube
                </li>
                <li>
                    <div>
                        <MusicIcon />
                        <span> Música </span>
                    </div>
                </li>
                <li>
                    <div>
                        <BallIcon />
                        <span> Esportes </span>
                    </div>
                </li>
                <li>
                    <div>
                        <GamesIcon />
                        <span> Jogos </span>
                    </div>
                </li>
                <li>
                    <div>
                        <FilmIcon />
                        <span> Filmes </span>
                    </div>
                </li>
                <li>
                    <div>
                        <NewsIcon />
                        <span> Notícias </span>
                    </div>
                </li>
                <li>
                    <div>
                        <StreamingIcon />
                        <span> Ao vivo </span>
                    </div>
                </li>
                <li>
                    <div>
                        <LightBulbIcon />
                        <span> Aprender </span>
                    </div>
                </li>
                <li>
                    <div>
                        <YoutubeLogo />
                        <span> Vídeos do momento </span>
                    </div>
                </li>
                <li>
                    <div>
                        <VRIcon />
                        <span> Vídeo em 360º </span>
                    </div>
                </li>

            </ul>
            <ul>
                <li>
                    <div>
                        <PlusIcon />
                        <span> Procurar canais </span>
                    </div>
                </li>

            </ul>
            <ul>
                <li>
                    Mais do Youtube
                </li>
                <li>
                    <div>
                        <YoutubeLogo />
                        <span> Youtube Premium </span>
                    </div>
                </li>
                <li>
                    <div>
                        <StreamingIcon />
                        <span> Ao vivo </span>
                    </div>
                </li>

            </ul>
            <ul>
                <li>
                    <div>
                        <SettingsIcon />
                        <span> Configurações </span>
                    </div>
                </li>
                <li>
                    <div>
                        <FlagIcon />
                        <span> Histórico de denúncias </span>
                    </div>
                    </li>
                <li>
                    <div>
                        <HelpIcon />
                        <span> Ajuda </span>
                    </div>
                </li>
                <li>
                    <div>
                        <FeedbackIcon />
                        <span> Enviar feedback </span>
                    </div>
                </li>

            </ul>
            <ul>
                <div>
                    <p> Sobre Imprensa</p> 
                    <p> Direitos autorais </p> 
                    <p> Entre em contato </p>
                    <p> Criadores de conteúdo </p>
                    <p>Publicidade Desenvolvedores </p>
                </div>
                <div>
                    <p> Termos Privacidade </p>
                    <p> Política e Segurança </p>
                    <p> Como funciona o YouTube </p>
                    <p>Testar os novos recursos </p>
                </div>
                <br />
                <span>© 2020 Jesus company</span>
            </ul>
      </Container>
  );
}

export default Guide;