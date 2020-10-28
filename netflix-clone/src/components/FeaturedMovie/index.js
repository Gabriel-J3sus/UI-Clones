import React from 'react';

import { Container, Data, Description, Buttons } from './styles';

const FeaturedMovie = ({ item }) => {

  let firstDate = new Date(item.first_air_date);
  
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;

  if (description.length > 200) {
    description = description.substring(0, 200) + '...';
  }

  return (
    <Container style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
    }}>
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <h2>{item.original_name}</h2>
          
          <Data>
            <span> {item.vote_average} pontos</span>
            <span> {firstDate.getFullYear()} </span>
            <span> {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''} </span>
          </Data>

          <Description>
            {description}
          </Description>

          <Buttons>
            <a href="#"> Assistir</a>
            <a href="#"> + Minha Lista </a>
          </Buttons>

          <p><strong> Gêneros: </strong> {genres.join(', ')} </p>
        </div>
      </div>
    </Container>
  );
};

export default FeaturedMovie;
