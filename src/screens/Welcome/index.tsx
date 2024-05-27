import React from 'react';
import {Text} from 'react-native';
import {Container, ShowButton, Title, WelcomeLogo} from './styles';

export const Welcome: React.FC = () => {
  return (
    <Container>
      <Title>Welcome to the Marvel Heroes Universe!</Title>
      <WelcomeLogo
        source={require('../../assets/marvelHeroesLogo.jpg')}
        resizeMode="contain"
      />
      <ShowButton onPress={() => console.log('navegar')}>
        <Text>Show me the Heroes!</Text>
      </ShowButton>
    </Container>
  );
};
