import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: red;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const HeroImage = styled.Image`
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
`;

export const ShowButton = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  background-color: yellow;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: blue;
  font-size: 18px;
`;

export const Stats = styled.Text`
  color: blue;
  font-size: 12px;
`;
