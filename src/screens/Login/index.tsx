import React from 'react';
import {Text} from 'react-native';
import {Container, ErrorText, LoginLogo, SubmitButton, TextInput} from './styles';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {
  //TODO TYPESCRIPT
  navigation: StackNavigationProp<any>;
};

export const Login: React.FC<Props> = ({navigation}) => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [wrongPassword, setWrongPassword] = React.useState<boolean>(false);

  function handleLogin() {
    //TODO
    if (username === password) {
      setWrongPassword(false);
      navigation.navigate('Landing');
    } else {
      setWrongPassword(true);
    }
  }

  return (
    <Container>
      <Text>Please use a Username equal to the password</Text>
      <LoginLogo
        source={require('../../assets/marvelLogo.png')}
        resizeMode="contain"
      />
      <TextInput
        placeholder="Username"
        onChangeText={(input: string) => setUsername(input)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(input: string) => setPassword(input)}
      />
      <SubmitButton onPress={handleLogin}>
        <Text>Press Here</Text>
      </SubmitButton>
      {wrongPassword && <ErrorText>Wrong Credentials</ErrorText>}
    </Container>
  );
};
