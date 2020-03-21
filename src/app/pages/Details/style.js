import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  align-items: center;
`;

export const Poster = styled.Image`
  width: 100%;
  height: 450px;
`;

export const Title = styled.Text`
  padding: 6px 12px;
  margin-top: 8px;
  font-weight: 700;
  font-size: 24px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

export const TitleWithoutPoster = styled.Text`
  padding: 6px 12px;
  margin-top: 22px;
  font-weight: 700;
  font-size: 24px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

export const DataContainer = styled.View`
  flex: 1;
  padding: 8px 12px 24px;
  justify-content: space-between;
`;

export const Description = styled.Text``;

export const IconRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(AntDesign)``;

export const IconText = styled.Text`
  font-size: ${props => props.fontSize || '18px'};
  color: ${props => props.color};
  margin-left: 8px;
`;
