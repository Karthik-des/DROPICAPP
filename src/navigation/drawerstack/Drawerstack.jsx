import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

// Welcome Screen
function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, maga! 😎</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

// About Screen
function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the About Screen 😎</Text>
    </View>
  );
}

// Drawer Navigator
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Welcome">
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
