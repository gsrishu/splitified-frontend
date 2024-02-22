import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SignUp from './components/Signup/signUp';
import Login from './components/Login/login';
import Group from './components/Group/group';
const Stack = createNativeStackNavigator<any>();

export type RootStackParamList = {
    SignUp: undefined,
    Login:undefined,
    Group:undefined
}
const stack = createNativeStackNavigator<RootStackParamList>()
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Signup" component={SignUp} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}  />
        <Stack.Screen name="Groups" component={Group} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
