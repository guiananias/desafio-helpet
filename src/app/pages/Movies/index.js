import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Keyboard, FlatList, ActivityIndicator, View } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';

import { CardComponent } from '../../components';
import { Container, LinkAlertText, LinkContainer, LinkText } from './style';

import api from '../../../services/api';

export default function MoviesPage({ route, navigation }) {
  Keyboard.dismiss();

  const insets = useSafeArea();
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const { query } = route.params;

  useEffect(() => {
    (async () => {
      const { data } = await api(query);
      const { results } = data;

      setSearchedMovies(results);
    })();
  }, [query]);

  async function getMoreMovies() {
    setLoading(true);

    const { data } = await api(query, page);
    const { results } = data;

    setPage(p => p + 1);
    setSearchedMovies([...searchedMovies, ...results]);
    setLoading(false);
  }

  function renderFooterLoading() {
    return loading ? (
      <View>
        <ActivityIndicator size="small" color="#f01141" />
      </View>
    ) : null;
  }

  return searchedMovies.length ? (
    <Container paddingTop={insets.top}>
      <FlatList
        data={searchedMovies}
        keyExtractor={(_, index) => index.toString()}
        ListFooterComponent={() => renderFooterLoading()}
        onEndReached={() => getMoreMovies()}
        onEndReachedThreshold={0.1}
        renderItem={({ item }) => <CardComponent data={item} />}
      />
    </Container>
  ) : (
    <LinkContainer>
      <LinkAlertText>Sorry! We do not find any movies! :(</LinkAlertText>
      <LinkText onPress={() => navigation.navigate('Search')}>
        Search again
      </LinkText>
    </LinkContainer>
  );
}

MoviesPage.propTypes = {
  navigation: propTypes.shape({
    navigate: propTypes.func,
  }).isRequired,
  route: propTypes.shape({
    params: propTypes.shape({
      query: propTypes.string,
    }).isRequired,
  }).isRequired,
};
