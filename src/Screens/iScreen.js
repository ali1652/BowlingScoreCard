import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, TextInput,navigate} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import NavigationButton from '../Components/NavigationButtons';





const iScreen = ({navigation}) => {
    



    
    return (

        <SafeAreaView style = {styles.container}>
        <Text style={styles.textLabelHeadingsCompanyName}>Company Name Goes Here</Text> 
        <Text style={styles.textLabelHeadings}>Please Select Number of Players</Text> 

        
        <Button 
        title="One Player Teams"
        onPress={() => navigation.navigate('OnePlayerScoreCard')}
        />
         <Button 
        title="Two Player Teams"
        onPress={() => navigation.navigate('TwoPlayerScoreCard')}
        />
         <Button 
        title="Three Player Teams"
        onPress={() => navigation.navigate('ThreePlayerScoreCard')}
        />
         <Button 
        title="Four Player Teams"
        onPress={() => navigation.navigate('FourPlayerScoreCard')}
        />
        

        </SafeAreaView>

     
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderColor: '#000000'


    },

    textLabelHeadingsCompanyName:{
        fontSize: 25,
        padding: 10,
        margin: 2,
        borderWidth: 0,
        width:350,
        height:50,
        borderColor: 'blue',
        alignContent: 'center',
        
    },

    textLabelHeadings:{
        fontSize: 20,
        padding: 10,
        margin: 2,
        borderWidth: 0,
        width:300,
        height:50,
        borderColor: 'blue',
        alignContent: 'center',
        
    }

    
   
});


export default iScreen;