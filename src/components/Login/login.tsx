import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

const vibrantTheme = {
  backgroundColor: '#F4F4F8',
  primaryColor: '#4CAF50',
  secondaryColor: '#3498db',
  textColor: '#333',
  headingColor: '#2C3E50',
  inputBackground: '#fff',
  buttonTextColor: '#fff',
};
type loginProps = NativeStackScreenProps<RootStackParamList,"Login">
const Login = ({navigation}:loginProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to Splitified </Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={vibrantTheme.textColor}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={vibrantTheme.textColor}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={()=>navigation.navigate("Groups",{groupId:"test"})}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: vibrantTheme.backgroundColor,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: vibrantTheme.headingColor,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: vibrantTheme.inputBackground,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: vibrantTheme.textColor,
  },
  button: {
    backgroundColor: vibrantTheme.primaryColor,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: vibrantTheme.buttonTextColor,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
