import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {
  Container,
  HeroContainer,
  HeroImage,
  HeroImageSmall,
  HeroName,
  HeroesView,
  ShowButton,
  Title,
} from './styles';
import {getHeroes} from '../../services/heroes';
import {StackNavigationProp} from '@react-navigation/stack';
import {Hero} from '../../models/Hero';
import {RouteParams} from '../../models/RouteParams';

type Props = {
  navigation: StackNavigationProp<RouteParams>;
};

export const Heroes: React.FC<Props> = ({navigation}) => {
  const [heroes, setHeroes] = React.useState<Hero[]>([]);
  const [heroesSmall, setHeroesSmall] = React.useState<Hero[]>([]);
  const [showAll, setShowAll] = React.useState<boolean>(false);

  function openHero(hero: Hero) {
    navigation.navigate('Hero', {
      hero,
    });
  }

  const renderItemBig = ({item}: {item: Hero}) => {
    return (
      <View>
        <TouchableOpacity onPress={() => openHero(item)}>
          <HeroImage
            source={{
              uri: item.images.lg,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <HeroName>{item.name}</HeroName>
      </View>
    );
  };

  const renderItemSmall = ({item}: {item: Hero}) => {
    return (
      <HeroContainer>
        <TouchableOpacity onPress={() => openHero(item)}>
          <HeroImageSmall
            source={{
              uri: item.images.sm,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <HeroName>{item.name}</HeroName>
      </HeroContainer>
    );
  };

  React.useEffect(() => {
    (async () => {
      await getHeroes().then(heroesData => {
        setHeroes(heroesData.data);
        setHeroesSmall(heroesData.data.slice(0, 4));
      });
    })();
  }, []);
  return (
    <Container>
      <Title>Heroes</Title>
      <HeroesView>
        {heroes.length === 0 && <Text>Loading...</Text>}
        {showAll && heroes.length !== 0 && (
          <FlatList
            data={heroes}
            renderItem={renderItemSmall}
            numColumns={2}
            keyExtractor={(hero: any) => hero.id}
          />
        )}
        {!showAll && heroes.length !== 0 && (
          <FlatList
            data={heroesSmall}
            renderItem={renderItemBig}
            keyExtractor={(hero: any) => hero.id}
            horizontal={true}
          />
        )}
      </HeroesView>
      <ShowButton onPress={() => setShowAll(!showAll)}>
        <Text>Show {showAll ? 'Less' : 'More'} </Text>
      </ShowButton>
    </Container>
  );
};
