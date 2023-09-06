import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Component } from 'react';



const table = () => {


    return (
      <SafeAreaView style={styles.container}>
          <StatusBar />

          <Text style={styles.heading}>table</Text>

          <ScrollView horizontal={false}>
          </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    },
    heading: {
        fontSize: 30, 
        fontWeight: 'bold', 
        color: 'green'
    },
   
});

export default table;