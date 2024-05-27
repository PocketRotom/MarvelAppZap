import React from 'react';
import {Text} from 'react-native';
import {Container, HeroImage, ShowButton, Stats, Title} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  //TODO TYPESCRIPT
  navigation: StackNavigationProp<any>;
  route: any;
};

export const Hero: React.FC<Props> = ({route, navigation}) => {
  const {hero} = route.params;
  return (
    <Container>
      <Title>{hero.name}</Title>
      <HeroImage
        source={{
          uri: hero.images.lg,
        }}
        resizeMode="contain"
      />
      <Title>Attributes</Title>
      <Stats>Intelligence: {hero.powerstats.intelligence}</Stats>
      <Stats>Combat: {hero.powerstats.combat}</Stats>
      <Stats>Durability: {hero.powerstats.durability}</Stats>
      <Stats>Power: {hero.powerstats.power}</Stats>
      <Stats>Strength: {hero.powerstats.strength}</Stats>
      <Stats>Speed: {hero.powerstats.speed}</Stats>
    </Container>
  );
};
