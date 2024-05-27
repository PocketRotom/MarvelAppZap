import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: red;
  align-items: center;
  justify-content: space-evenly;
`;

export const HeroesView = styled.View`
  flex: 1;
  background-color: blue;
  width: 80%;
  padding: 20px;
  max-height: 50%;
`;

export const HeroContainer = styled.View`
  flex: 1;
  width: 150px;
  height: 150px;
  align-items: center;
  justify-content: center;
`;

export const HeroImage = styled.Image`
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
`;

export const HeroImageSmall = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

export const HeroName = styled.Text`
  color: white;
  font-size: 18px;
  text-align: center;
`;

export const HeroNameSmall = styled.Text`
  color: white;
  font-size: 18px;
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
