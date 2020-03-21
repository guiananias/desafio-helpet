import React from 'react';
import propTypes from 'prop-types';

import {
  Container,
  Poster,
  HeaderContainer,
  Title,
  TitleWithoutPoster,
  DataContainer,
  Description,
  IconContainer,
  IconRow,
  Icon,
  IconText,
} from './style';

const imageURI = 'https://image.tmdb.org/t/p/w500';

export default function DetailsPage({ route }) {
  const { data } = route.params;

  return (
    <Container>
      <HeaderContainer>
        {data.poster_path ? (
          <>
            <Poster source={{ uri: imageURI + data.poster_path }} />
            <Title>{data.title}</Title>
          </>
        ) : (
          <TitleWithoutPoster>{data.title}</TitleWithoutPoster>
        )}
      </HeaderContainer>
      <DataContainer>
        <Description>{data.overview}</Description>
        <IconRow>
          <IconContainer>
            <Icon name="star" size={24} color="#ebbc00" />
            <IconText color="#ebbc00">{data.vote_average}</IconText>
          </IconContainer>

          <IconContainer>
            <Icon name="like1" size={24} color="#32b30e" />
            <IconText color="#32b30e">{data.vote_count}</IconText>
          </IconContainer>

          <IconContainer>
            <Icon name="heart" size={24} color="#eb052b" />
            <IconText color="#eb052b">{data.popularity}</IconText>
          </IconContainer>
        </IconRow>
      </DataContainer>
    </Container>
  );
}

DetailsPage.propTypes = {
  route: propTypes.shape({
    params: propTypes.shape({
      data: propTypes.shape(),
    }).isRequired,
  }).isRequired,
};
