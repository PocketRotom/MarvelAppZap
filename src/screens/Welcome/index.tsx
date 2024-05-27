import React from 'react';
import {Text} from 'react-native';
import {Container, ShowButton, Title, WelcomeLogo} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  //TODO TYPESCRIPT
  navigation: StackNavigationProp<any>;
};

export const Welcome: React.FC<Props> = ({navigation}) => {
  return (
    <Container>
      <Title>Welcome to the Marvel Heroes Universe!</Title>
      <WelcomeLogo
        source={require('../../assets/marvelHeroesLogo.jpg')}
        resizeMode="contain"
      />
      <ShowButton onPress={() => navigation.navigate('Heroes')}>
        <Text>Show me the Heroes!</Text>
      </ShowButton>
    </Container>
  );
};
