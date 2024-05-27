import React from 'react';
import {FlatList, Text, View} from 'react-native';
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

export const Heroes: React.FC = () => {
  const [heroes, setHeroes] = React.useState<any[]>([]);
  const [heroesSmall, setHeroesSmall] = React.useState<any[]>([]);
  const [showAll, setShowAll] = React.useState<boolean>(false);

  const renderItemBig = ({item}: {item: any}) => {
    console.log(item);
    return (
      <View>
        <HeroImage
          source={{
            uri: item.images.lg,
          }}
          resizeMode="contain"
        />
        <HeroName>{item.name}</HeroName>
      </View>
    );
  };

  const renderItemSmall = ({item}: {item: any}) => {
    console.log(item);
    return (
      <HeroContainer>
        <HeroImageSmall
          source={{
            uri: item.images.sm,
          }}
          resizeMode="contain"
        />
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

  if (heroes.length === 0) {
    return <Text>Loading...</Text>;
  }

  console.log(heroesSmall);
  //TODO TS
  return (
    <Container>
      <Title>Heroes</Title>
      <ShowButton onPress={() => setShowAll(!showAll)}>
        <Text>Show More</Text>
      </ShowButton>
      <HeroesView>
        {showAll && (
          <FlatList
            data={heroes}
            renderItem={renderItemSmall}
            numColumns={2}
            keyExtractor={(heroe: any) => heroe.id}
          />
        )}
        {!showAll && (
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
