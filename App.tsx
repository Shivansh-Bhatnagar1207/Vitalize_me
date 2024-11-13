import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import Steps from './pages/Steps';
import More from './pages/More';

export type RootStackParamList = {
  Home: undefined;
  Steps: undefined;
  More: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          headerShown: false,
        })}
        >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name="Steps" component={Steps} />
        <Stack.Screen name="More" component={More} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
