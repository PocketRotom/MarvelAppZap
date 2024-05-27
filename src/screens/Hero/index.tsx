import React from 'react';
import {Container, HeroImage, Stats, Title} from './styles';
import {RouteParams} from '../../models/RouteParams';
import {RouteProp} from '@react-navigation/native';

type Props = {
  route: RouteProp<RouteParams, 'Hero'>;
};

export const Hero: React.FC<Props> = ({route}) => {
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
