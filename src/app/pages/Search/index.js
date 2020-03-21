import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import propTypes from 'prop-types';

import {
  Container,
  Input,
  InputContainer,
  SearchContainer,
  Icon,
  SearchButton,
  SearchButtonText,
  FavoriteContainer,
  FavoriteLink,
} from './style';

export default function SearchPage({ navigation }) {
  const [focus, setFocus] = useState(false);
  const [valueInput, setValueInput] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSearchMovies() {
    if (valueInput.length < 1) return;

    setLoading(true);

    navigation.navigate('Main', { query: valueInput });

    setValueInput('');
    setLoading(false);
  }

  return (
    <Container>
      <SearchContainer>
        <InputContainer>
          <Icon
            name="md-search"
            size={32}
            color={focus ? '#000' : '#ccc'}
            borderColor={focus ? '#000' : '#ccc'}
          />
          <Input
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(!focus)}
            onChangeText={e => setValueInput(e)}
            borderColor={focus ? '#000' : '#ccc'}
            placeholder="Search a movie!"
            value={valueInput}
          />
        </InputContainer>

        <SearchButton onPress={() => handleSearchMovies()}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <SearchButtonText>SEARCH</SearchButtonText>
          )}
        </SearchButton>
      </SearchContainer>

      <FavoriteContainer>
        <FavoriteLink>Your favorite movies</FavoriteLink>
      </FavoriteContainer>
    </Container>
  );
}

SearchPage.propTypes = {
  navigation: propTypes.shape({
    navigate: propTypes.func.isRequired,
  }).isRequired,
};
