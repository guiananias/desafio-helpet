import React, { useState, useEffect, useContext, memo } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import propTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, Description, LinkContainer } from './style';
import { FavoriteButtonComponent } from '../FavoriteButton';

import { GetStore, SetStore } from '../../../utils/asyncStorageMethods';
import AppContext from '../../../store/appContext';

function propsAreEqual(prev, next) {
  return prev.data === next.data;
}

export const CardComponent = memo(({ data }) => {
  const [love, setLove] = useState(false);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const appStore = useContext(AppContext);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const storage = (await GetStore('favorite_movies')) || [];

      appStore.favorites = [...storage];
    })();
  }, [appStore.favorites]);

  async function handleLove() {
    setLove(true);

    const storageMovies = (await GetStore('favorite_movies')) || [];

    await SetStore('favorite_movies', [...storageMovies, data]);

    setFavoriteMovies(storageMovies);
  }

  async function handleUnlove() {
    setLove(false);

    const storageMovies = (await GetStore('favorite_movies')) || [];
    const newStorageMovies = storageMovies.filter(
      movie => movie.id !== data.id
    );

    appStore.favorites = [...newStorageMovies];

    await SetStore('favorite_movies', [...newStorageMovies]);

    setFavoriteMovies(newStorageMovies);
  }

  useEffect(() => {
    favoriteMovies.forEach(movie => {
      if (movie.id === data.id) {
        setLove(true);
        return;
      }

      setLove(false);
    });
  }, [favoriteMovies, data]);

  useEffect(() => {
    (async () => {
      const storageMovies = (await GetStore('favorite_movies')) || [];

      storageMovies.forEach(movies => {
        if (movies.id === data.id) {
          setLove(true);
        }
      });
    })();
  }, [data.id]);

  return (
    <Container>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Details', { data })}
      >
        <LinkContainer>
          <Title>{data.title}</Title>
          <Description numberOfLines={3}>{data.overview}</Description>
        </LinkContainer>
      </TouchableWithoutFeedback>

      <FavoriteButtonComponent
        onPress={() => (love ? handleUnlove() : handleLove())}
        themeState={love}
      />
    </Container>
  );
}, propsAreEqual);

CardComponent.propTypes = {
  data: propTypes.shape({
    title: propTypes.string,
    overview: propTypes.string,
    id: propTypes.number,
  }).isRequired,
};
