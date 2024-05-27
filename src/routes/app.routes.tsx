import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome} from '../screens/Welcome';
import {Login} from '../screens/Login';
import {Heroes} from '../screens/Heroes';
import {Hero} from '../screens/Hero';
import {RouteParams} from '../models/RouteParams';

const Stack = createNativeStackNavigator<RouteParams>();

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Heroes" component={Heroes} />
        <Stack.Screen name="Hero" component={Hero} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
