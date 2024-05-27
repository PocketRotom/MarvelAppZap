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

type Props = {
  //TODO TYPESCRIPT
  navigation: StackNavigationProp<any>;
};

export const Heroes: React.FC<Props> = ({navigation}) => {
  const [heroes, setHeroes] = React.useState<any[]>([]);
  const [heroesSmall, setHeroesSmall] = React.useState<any[]>([]);
  const [showAll, setShowAll] = React.useState<boolean>(false);

  function openHero(hero: any) {
    navigation.navigate('Hero', {
      hero,
    });
  }

  const renderItemBig = ({item}: {item: any}) => {
    console.log(item);
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

  const renderItemSmall = ({item}: {item: any}) => {
    console.log(item);
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

  console.log(heroesSmall);
  //TODO TS
  return (
    <Container>
      <Title>Heroes</Title>
      <ShowButton onPress={() => setShowAll(!showAll)}>
        <Text>Show {showAll ? 'Less' : 'More'} </Text>
      </ShowButton>
      <HeroesView>
        {heroes.length === 0 && <Text>Loading...</Text>}
        {showAll && heroes.length !== 0 && (
          <FlatList
            data={heroes}
            renderItem={renderItemSmall}
            numColumns={2}
            keyExtractor={(heroe: any) => heroe.id}
          />
        )}
        {!showAll && heroes.length !== 0 && (
          <FlatList
            data={heroesSmall}
            renderItem={renderItemBig}
            keyExtractor={(heroe: any) => heroe.id}
            horizontal={true}
          />
        )}
      </HeroesView>
    </Container>
  );
};
