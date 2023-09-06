import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import iScreen from './src/Screens/iScreen';


import AddItemScreen from './src/Screens/FourPlayerScoreCard';
import OnePlayerScoreCard from './src/Screens/OnePlayerScoreCard';
import TwoPlayerScoreCard from './src/Screens/TwoPlayerScoreCard';
import ThreePlayerScoreCard from './src/Screens/ThreePlayerScoreCard';
import FourPlayerScoreCard from './src/Screens/FourPlayerScoreCard';



const App = () => {
const Stack = createNativeStackNavigator();
  return (
  

    <NavigationContainer>
            <Stack.Navigator initialRouteName='iScreeb'>
            <Stack.Screen
                    name='iScreen'
                    component={iScreen}
                    options={{title: "Player Number Select"}}
                />
              

                 <Stack.Screen
                    name='FourPlayerScoreCard'
                    component={FourPlayerScoreCard}
                    options={{title: "Score Card"}}
                />

                 <Stack.Screen
                    name='OnePlayerScoreCard'
                    component={OnePlayerScoreCard}
                    options={{title: "Score Card"}}
                />

                 <Stack.Screen
                    name='TwoPlayerScoreCard'
                    component={TwoPlayerScoreCard}
                    options={{title: "Score Card"}}
                />

                 <Stack.Screen
                    name='ThreePlayerScoreCard'
                    component={ThreePlayerScoreCard}
                    options={{title: "Score Card"}}
                />
                

                  

                

               

             </Stack.Navigator>
 </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
