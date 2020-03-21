import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-top: ${props => props.paddingTop}px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const AlertContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AlertText = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #ccc;
`;
