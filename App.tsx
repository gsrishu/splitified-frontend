import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SignUpScreen from './src/components/Signup/signUp';
import Group from './src/components/Group/group';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/components/Login/login';
export type RootStackParamList = {
  SignUp: undefined;
  Login: undefined;
  Groups: {groupId: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();
function App() {
  // return <Group />;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Groups" component={Group} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
