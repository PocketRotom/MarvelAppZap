import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #bfd8ed;
  align-items: center;
  justify-content: center;
`;

export const LoginLogo = styled.Image`
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;

export const TextInput = styled.TextInput`
  width: 80%;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  background-color: yellow;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const ErrorText = styled.Text`
  color: red;
  padding-top: 10px;
`;
