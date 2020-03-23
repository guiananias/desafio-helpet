import React from 'react';
import propTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import {
  FavoriteButton,
  FavoriteText,
  defaultButton,
  themedButton,
  Icon,
} from './style';

export const FavoriteButtonComponent = ({ onPress, themeState }) => {
  return (
    <ThemeProvider theme={themeState ? themedButton : defaultButton}>
      <FavoriteButton onPress={onPress}>
        <FavoriteText>
          {themeState ? (
            <Icon name="heart" size={24} color="#fff" />
          ) : (
            <Icon name="hearto" size={24} color="#f01141" />
          )}
        </FavoriteText>
      </FavoriteButton>
    </ThemeProvider>
  );
};

FavoriteButtonComponent.propTypes = {
  onPress: propTypes.func.isRequired,
  themeState: propTypes.bool.isRequired,
};
