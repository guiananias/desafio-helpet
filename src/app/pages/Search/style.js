import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 12px 25px;
  justify-content: center;
`;

export const InputContainer = styled.View`
  flex-direction: row;
`;

export const SearchContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 24px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.borderColor};
  padding: 7px 8px;
`;

export const Icon = styled(Ionicons)`
  border-bottom-color: ${props => props.borderColor};
  border-bottom-width: 1px;
  padding: 7px 8px;
`;

export const SearchButton = styled(RectButton)`
  background-color: #860aa8;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding: 18px 24px;
  border-radius: 8px;
`;

export const SearchButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;

export const FavoriteContainer = styled.View`
  flex: 0.7;
  justify-content: center;
  align-items: center;
`;

export const FavoriteLink = styled.Text`
  color: #3e5dc9;
  font-size: 16px;
`;
