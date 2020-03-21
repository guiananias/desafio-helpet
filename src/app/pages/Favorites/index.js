import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import { CardComponent } from '../../components';
import { Container, AlertContainer, AlertText } from './style';

import { GetStore } from '../../../utils/asyncStorageMethods';

export default function FavoritesPage() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const insets = useSafeArea();

  useEffect(() => {
    (async () => {
      const storageMovies = (await GetStore('favorite_movies')) || [];

      setFavoriteMovies(storageMovies);
    })();
  }, [favoriteMovies]);

  return favoriteMovies.length ? (
    <Container paddingTop={insets.top}>
      <FlatList
        data={favoriteMovies}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <CardComponent data={item} />}
      />
    </Container>
  ) : (
    <AlertContainer>
      <AlertText>You do not have any favorite movies.</AlertText>
    </AlertContainer>
  );
}
