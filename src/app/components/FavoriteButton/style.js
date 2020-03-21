import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

export const FavoriteButton = styled(RectButton)`
  margin-top: 18px;
  flex: 1;
`;

export const FavoriteText = styled.Text`
  ${props => props.theme}
`;

export const themedButton = {
  color: '#fff',
  textAlign: 'center',
  padding: '12px 0',
  fontSize: '18px',
  fontWeight: 700,
  borderWidth: '1px',
  borderColor: '#f01141',
  backgroundColor: '#f01141',
  borderRadius: '4px',
};

export const defaultButton = {
  color: '#f01141',
  padding: '12px 0',
  textAlign: 'center',
  fontSize: '18px',
  fontWeight: 700,
  borderWidth: '1px',
  borderColor: '#f01141',
  borderRadius: '4px',
};

export const Icon = styled(AntDesign)``;
