import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Video } from 'expo-av';
import carVideo from './assets/india3.mp4';
import styles from './src/styles/AppCss';


const Stack = createStackNavigator();

export default function App() {
  const [startingValue, setStartingValue] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setStartingValue(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (startingValue) {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}> 
          <View style={styles.home}>
            <Video
              source={carVideo}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="contain"
              shouldPlay
              isLooping
              style={{ width: '200%', height: 700 }}
            />
            <StatusBar style="auto" />
          </View>
        </View>
      </View>
    );
  }

  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="OrderScreen">

       
        <Stack.Screen name="OrderScreen" component={OrderScreen} />
       
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}