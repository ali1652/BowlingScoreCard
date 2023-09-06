import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, TextInput,navigate} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import NavigationButton from '../Components/NavigationButtons';




const TwoPlayerScoreCard = ({navigation}) => {
    


  let string = "1";
  let num = parseInt(string);

  let stringg = "2";
  let numm = parseInt(stringg);

  let numSum = parseInt(setS1T1);
  let t1s1TF;
  let t2s1TF;



    const [t1s1, setT1S1] = useState(0);
    let shot1Overall = 0;
    let t2shot1Overall =0;


    //team 2 logic 
    if (t1s1>0){
        t2shot1Overall = 0;
        t2s1TF = false;
    }

    else{
        t2shot1Overall = t2s1
    }
    

    // team 1 logic 
    const [t2s1, setT2S1] = useState(0)
    if (t2s1>0){
        shot1Overall = 0;
        t1s1TF = false;
    }

    else {
        shot1Overall = t1s1;   ////cgeck
    }

    ///////end 2 

    let t1s2TF;
    let t2s2TF;
    const [t1s2, setT1S2] = useState(0);
    const [t2s2, setT2S2] = useState(0);
    let shot2Overall;
    let t2shot2Overall;
    
    // team 2 logic
    if (t1s2>0){
        t2shot2Overall = t2s1;
        t2s2TF = false;
    }

    else{
        t2shot2Overall = t2s1 + t2s2
    }

    //team 1 logic 

    if (t2s2>0){
        shot2Overall = t1s1;
        t1s2TF = false;
    }

    else{
        shot2Overall = t1s1 + t1s2
    }

    /////* end 3 */}

    let t1s3TF;
    let t2s3TF;
    const [t1s3, setT1S3] = useState(0);
    const [t2s3, setT2S3] = useState(0);

    let shot3Overall;
    let t2shot3Overall;

     // team 2 logic
     if (t1s3>0){
        t2shot3Overall = t2s3 + t2shot2Overall
        t2s3TF = false;
    }

    else{
        t2shot3Overall = t2s3 + t2shot2Overall
    }

    //team 1 logic
    if (t2s3>0){
        shot3Overall = t1s3 + shot2Overall
        t1s3TF = false;
    }

    else{
        shot3Overall = t1s3 + shot2Overall
    }

    //end 4///////////////////////////////////////

    let t1s4TF;
    let t2s4TF;
    const [t1s4, setT1S4] = useState(0);
    const [t2s4, setT2S4] = useState(0);

    let shot4Overall;
    let t2shot4Overall;

   // team 2 logic
     if (t1s4>0){
        t2shot4Overall = t2s4 + t2s3 + t2s2 +t2s1
        t2s4TF = false;
    }

    else{
        t2shot4Overall = t2s4 + t2s3 + t2s2 +t2s1
    }

    //team 1 logic
    if (t2s4>0){
        shot4Overall = t1s4 + t1s3 + t1s2 + t1s1
        t1s4TF = false;
    }

    else{
        shot4Overall = t1s4 + t1s3 + t1s2 + t1s1
    }
    
    /////end 5

    let t1s5TF;
    let t2s5TF;
    const [t1s5, setT1S5] = useState(0);
    const [t2s5, setT2S5] = useState(0);

    let shot5Overall;
    let t2shot5Overall;

    // team 2 logic
    if (t1s5>0){
        t2shot5Overall = t2s5 + t2s4 + t2s3 + t2s2 + t2s1
        t2s5TF = false;
    }

    else{
        t2shot5Overall = t2s5 + t2s4 + t2s3 + t2s2 + t2s1
    }

    //team 1 logic
    if (t2s5>0){
        shot5Overall = t1s5 + t1s4 + t1s3 +t1s2 + t1s1
        t1s5TF = false;
    }

    else{
        shot5Overall = t1s5 + t1s4 + t1s3 +t1s2 + t1s1
    }

    ///// end 6
    let t1s6TF;
    let t2s6TF;
    const [t1s6, setT1S6] = useState(0);
    const [t2s6, setT2S6] = useState(0);

    let shot6Overall;
    let t2shot6Overall;
    // team 2 logic
    if (t1s6>0){
        t2shot6Overall = t2s6 + t2s5 + t2s4 + t2s3 + t2s2 + t2s1
        t2s6TF = false;
    }

    else{
        t2shot6Overall = t2s6 + t2s5 + t2s4 + t2s3 + t2s2 + t2s1
    }

    //team 1 logic
    if (t2s6>0){
        shot6Overall = t1s6 + t1s5 + t1s4 + t1s3 + t1s2 + t1s1
        t1s6TF = false;
    }

    else{
        shot6Overall = t1s6 + t1s5 + t1s4 + t1s3 + t1s2 + t1s1
    }
    

    ///// end 7
    let t1s7TF;
    let t2s7TF;
    const [t1s7, setT1S7] = useState(0);
    const [t2s7, setT2S7] = useState(0);

    let shot7Overall;
    let t2shot7Overall;


     // team 2 logic
     if (t1s7>0){
        t2shot7Overall = t2s7 + t2s6 + t2s5 + t2s4 + t2s3 + t2s2 + t2s1
        t2s7TF = false;
    }

    else{
        t2shot7Overall = t2s7 + t2s6 + t2s5 + t2s4 + t2s3 + t2s2 + t2s1
    }

    //team 1 logic
    if (t2s7>0){
        shot7Overall = t1s7 + t1s6 + t1s5 + t1s4 + t1s3 + t1s2 + t1s1
        t1s7TF = false;
    }

    else{
        shot7Overall = t1s7 + t1s6 + t1s5 + t1s4 + t1s3 + t1s2 + t1s1
    }

    //// end 8
    let t1s8TF;
    let t2s8TF;
    const [t1s8, setT1S8] = useState(0);
    const [t2s8, setT2S8] = useState(0);

    let shot8Overall;
    let t2shot8Overall;

    // team 2 logic
    if (t1s8>0){
        t2shot8Overall = t2s8 + t2s7 + t2s6 + t2s5 + t2s4 + t2s3 + t2s2 + t2s1
        t2s8TF = false;
    }

    else{
        t2shot8Overall = t2s8 + t2s7 + t2s6 + t2s5 + t2s4 + t2s3 + t2s2 + t2s1
    }

    //team 1 logic
    if (t2s8>0){
        shot8Overall = t1s8 + t1s7 + t1s6 + t1s5 + t1s4 + t1s3 + t1s2 + t1s1
        t1s8TF = false;
    }

    else{
        shot8Overall = t1s8 + t1s7 + t1s6 + t1s5 + t1s4 + t1s3 + t1s2 + t1s1
    }

    //// end 9
    let t1s9TF;
    let t2s9TF;
    const [t1s9, setT1S9] = useState(0);
    const [t2s9, setT2S9] = useState(0);


    let shot9Overall;
    let t2shot9Overall;

     // team 2 logic
     if (t1s9>0){
        t2shot9Overall = t2s9 + t2s8 + t2s7 + t2s6 + t2s5 + t2s4 + t2s3 + t2s2 + t2s1
        t2s9TF = false;
    }

    else{
        t2shot9Overall = t2s9 + t2s8 + t2s7 + t2s6 + t2s5 + t2s4 + t2s3 + t2s2 + t2s1
    }

    //team 1 logi8
    if (t2s9>0){
        shot9Overall = t1s9 + t1s8 + t1s7 + t1s6 + t1s5 + t1s4 + t1s3 + t1s2 + t1s1
        t1s9TF = false;
    }

    else{
        shot9Overall = t1s9 + t1s8 + t1s7 + t1s6 + t1s5 + t1s4 + t1s3 + t1s2 + t1s1
    }


    ///end 10
    let t1s10TF;
    let t2s10TF;
    const [t1s10, setT1S10] = useState(0);
    const [t2s10, setT2S10] = useState(0);


    let shot10Overall;
    let t2shot10Overall;

    // team 2 logic
    if (t1s10>0){
        t2shot10Overall = t2s10 + t2s9 + t2s8 + t2s7 + t2s6 + t2s5 + t2s4 + t2s3 + t2s2 + t2s1
        t2s10TF = false;
    }

    else{
        t2shot10Overall = t2s10 + t2s9 + t2s8 + t2s7 + t2s6 + t2s5 + t2s4 + t2s3 + t2s2 + t2s1
    }

    //team 1 logi8
    if (t2s10>0){
        shot10Overall = t1s10 + t1s9 + t1s8 + t1s7 + t1s6 + t1s5 + t1s4 + t1s3 + t1s2 + t1s1
        t1s10TF = false;
    }

    else{
        shot10Overall = t1s10 + t1s9 + t1s8 + t1s7 + t1s6 + t1s5 + t1s4 + t1s3 + t1s2 + t1s1
    }

    const [compName, setCompName] = useState('');
    const [team1Name, setTeam1Name] = useState('');
    const [team2Name, setTeam2Name] = useState('');
    const [rinkNum, setRinkNum] = useState(0);

    const[team1Player1, setTeam1Player1] = useState('');
    const[team1Player2, setTeam1Player2] = useState('');

    const[team2Player1, setTeam2Player1] = useState('');
    const[team2Player2, setTeam2Player2] = useState('');
   
    
    const [s1t1, setS1T1] = useState('');
    let theInt = parseInt("5.90123"); //5

let datee = new Date().toLocaleDateString();
    
    return (

        <SafeAreaView style = {styles.container}>
        <Text style={styles.textLabelHeadingsCompanyName}>Company Name Here</Text> 
        <ScrollView horizontal={false}>

        <ScrollView horizontal={true}>
        <Text style={styles.textLabelHeadingsComp}>Competiton</Text> 
        <TextInput 
            style={styles.textInputComp}
            placeholder= "Enter Competiton Name " 
            value={compName}
            onChangeText={(text) =>{
                setCompName((text));  
            }}
            />
        </ScrollView>

        <ScrollView horizontal={true}>
        <Text style={styles.textLabelHeadingsComp}>Rink Number:</Text> 
        <TextInput 
            style={styles.textInputComp}
            placeholder= "Enter Rink Number " 
            value={rinkNum}
            onChangeText={(text) =>{
                setRinkNum((text));  
            }}
            />
        </ScrollView>

        
        
        
        <ScrollView horizontal={true}>
        <Text style={styles.textLabelHeadingsComp}>Date:</Text>
        <Text style={styles.textLabelHeadingsComp}>{datee}</Text>
        
        </ScrollView>

        <ScrollView horizontal={true}>
        <TextInput 
            style={styles.textInputTeamName}
            placeholder= "T1NAME " 
            value={team1Name}
            onChangeText={(text) =>{
                setTeam1Name((text));  
            }}
            />
        <Text style={styles.textLabelHeadingsPlayers}>Team Name</Text>

        <TextInput 
            style={styles.textInputTeamName}
            placeholder= "T2NAME " 
            value={team2Name}
            onChangeText={(text) =>{
                setTeam2Name((text));  
            }}
            />

        
        </ScrollView>

        <ScrollView horizontal={true}>
        <TextInput 
            style={styles.textInputTeamName}
            placeholder= "Enter Name " 
            value={team1Player1}
            onChangeText={(text) =>{
                setTeam1Player1((text));  
            }}
            />
        <Text style={styles.textLabelHeadingsPlayers}>Player 1</Text>

        <TextInput 
            style={styles.textInputTeamName}
            placeholder= "Enter Name" 
            value={team2Player1}
            onChangeText={(text) =>{
                setTeam2Player1((text));  
            }}
            />

        
        </ScrollView>

        <ScrollView horizontal={true}>
        <TextInput 
            style={styles.textInputTeamName}
            placeholder= "Enter Name " 
            value={team1Player2}
            onChangeText={(text) =>{
                setTeam1Player2((text));  
            }}
            />
        <Text style={styles.textLabelHeadingsPlayers}>Player 2</Text>

        <TextInput 
            style={styles.textInputTeamName}
            placeholder= "Enter Name" 
            value={team2Player2}
            onChangeText={(text) =>{
                setTeam2Player2((text));  
            }}
            />
        </ScrollView>

        
    
        
         
            
        <ScrollView horizontal={true}>
        <Text style={styles.textLabelHeadings}>Shots:</Text>
        <Text style={styles.textLabelHeadings}>Total:</Text>
        <Text style={styles.textLabelHeadings}>End</Text>
        <Text style={styles.textLabelHeadings}>Shots:</Text>
        <Text style={styles.textLabelHeadings}>Total:</Text>
        
        </ScrollView>
        {/* end 1 */}
        <ScrollView horizontal={true}>  
            <TextInput 
            style={styles.textInput} 
            placeholder= "S1" 
            value={t1s1}
            editable={t1s1TF}
            onChangeText={(text) =>{
                setT1S1(parseInt(text));
                
                
            }}
            
            />

            <Text style={styles.textLabel}>{t1s1}</Text>
            <Text style={styles.textLabelEnds}>1</Text>

            
            <TextInput 
            style={styles.textInput} 
            placeholder= "S1" 
            value={t2s1}
            editable={t2s1TF}
            onChangeText={(text) =>{
                setT2S1(parseInt(text));
                
                
            }}
            
            />
            <Text style={styles.textLabel}>{t2s1}</Text>
            

        </ScrollView>

        {/* end 2*/}
        <ScrollView horizontal={true}> 

        <TextInput 
            style={styles.textInput} 
            placeholder= "S2" 
            value={t1s2}
            editable={t1s2TF}
            onChangeText={(text) =>{
                setT1S2(parseInt(text));
            }}
            />

        <Text style={styles.textLabel}>{shot2Overall}</Text>
        <Text style={styles.textLabelEnds}>2</Text>

        <TextInput 
            style={styles.textInput} 
            placeholder= "S2" 
            value={t2s2}
            editable={t2s2TF}
            onChangeText={(text) =>{
                setT2S2(parseInt(text));
            }}
            />

        <Text style={styles.textLabel}>{t2shot2Overall}</Text>

       </ScrollView>

       {/* end 3*/}
        <ScrollView horizontal={true}> 

        <TextInput 
            style={styles.textInput} 
            placeholder= "S3" 
            value={t1s3}
            editable={t1s3TF}
            onChangeText={(text) =>{
                setT1S3(parseInt(text));
            }}
            />

        <Text style={styles.textLabel}>{shot3Overall}</Text>
        <Text style={styles.textLabelEnds}>3</Text>

        <TextInput 
            style={styles.textInput}
            placeholder= "S3" 
            value={t2s3}
            editable={t2s3TF}
            onChangeText={(text) =>{
                setT2S3(parseInt(text));
            }}
            />

        <Text style={styles.textLabel}>{t2shot3Overall}</Text>

       </ScrollView>

        {/* end 4*/}
         <ScrollView horizontal={true}> 

        <TextInput 
            style={styles.textInput} 
            placeholder= "S4" 
            value={t1s4}
            editable={t1s4TF}
            onChangeText={(text) =>{
                setT1S4(parseInt(text));
            }}
            />

        <Text style={styles.textLabel}>{shot4Overall}</Text>
        <Text style={styles.textLabelEnds}>4</Text>

        <TextInput 
            style={styles.textInput}
            placeholder= "S4" 
            value={t2s4}
            editable={t2s4TF}
            onChangeText={(text) =>{
                setT2S4(parseInt(text));
            }}
            />

        <Text style={styles.textLabel}>{t2shot4Overall}</Text>

       </ScrollView>

       {/* end 5*/}
         <ScrollView horizontal={true}> 

        <TextInput 
            style={styles.textInput} 
            placeholder= "S5" 
            value={t1s5}
            editable={t1s5TF}
            onChangeText={(text) =>{
                setT1S5(parseInt(text));
            }}
            />

        <Text style={styles.textLabel}>{shot5Overall}</Text>
        <Text style={styles.textLabelEnds}>5</Text>

        <TextInput 
            style={styles.textInput}
            placeholder= "S5" 
            value={t2s5}
            editable={t2s5TF}
            onChangeText={(text) =>{
                setT2S5(parseInt(text));
            }}
            />

        <Text style={styles.textLabel}>{t2shot5Overall}</Text>

       </ScrollView>

       {/* end 6*/}
         <ScrollView horizontal={true}> 

        <TextInput 
            style={styles.textInput} 
            placeholder= "S6" 
            value={t1s6}
            editable={t1s6TF}
            onChangeText={(text) =>{
                setT1S6(parseInt(text));
            }}
            />

        <Text style={styles.textLabel}>{shot6Overall}</Text>
        <Text style={styles.textLabelEnds}>6</Text>

        <TextInput 
            style={styles.textInput}
            placeholder= "S6" 
            value={t2s6}
            editable={t2s6TF}
            onChangeText={(text) =>{
                setT2S6(parseInt(text));
            }}
            />

        <Text style={styles.textLabel}>{t2shot6Overall}</Text>

       </ScrollView>

       {/* end 7*/}
         <ScrollView horizontal={true}> 

        <TextInput 
            style={styles.textInput} 
            placeholder= "S7" 
            value={t1s7}
            editable={t1s7TF}
            onChangeText={(text) =>{
                setT1S7(parseInt(text));
            }}
            />

        <Text style={styles.textLabel}>{shot7Overall}</Text>
        <Text style={styles.textLabelEnds}>7</Text>

        <TextInput 
            style={styles.textInput}
            placeholder= "S7" 
            value={t2s7}
            editable={t2s7TF}
            onChangeText={(text) =>{
                setT2S7(parseInt(text));
            }}
            />

        <Text style={styles.textLabel}>{t2shot7Overall}</Text>

       </ScrollView>

       {/* end 8*/}
         <ScrollView horizontal={true}> 

        <TextInput 
            style={styles.textInput} 
            placeholder= "S8" 
            value={t1s8}
            editable={t1s8TF}
            onChangeText={(text) =>{
                setT1S8(parseInt(text));
            }}
            />

        <Text style={styles.textLabel}>{shot8Overall}</Text>
        <Text style={styles.textLabelEnds}>8</Text>

        <TextInput 
            style={styles.textInput}
            placeholder= "S8" 
            value={t2s8}
            editable={t2s8TF}
            onChangeText={(text) =>{
                setT2S8(parseInt(text));
            }}
            />

        <Text style={styles.textLabel}>{t2shot8Overall}</Text>

       </ScrollView>

        {/* end 9*/}
         <ScrollView horizontal={true}> 

        <TextInput 
            style={styles.textInput} 
            placeholder= "S9" 
            value={t1s9}
            editable={t1s9TF}
            onChangeText={(text) =>{
                setT1S9(parseInt(text));
            }}
            />

        <Text style={styles.textLabel}>{shot9Overall}</Text>
        <Text style={styles.textLabelEnds}>9</Text>

        <TextInput 
            style={styles.textInput}
            placeholder= "S9" 
            value={t2s9}
            editable={t2s9TF}
            onChangeText={(text) =>{
                setT2S9(parseInt(text));
            }}
            />

        <Text style={styles.textLabel}>{t2shot9Overall}</Text>

       </ScrollView>

     

       {/* end 10*/}
         <ScrollView horizontal={true}> 

        <TextInput 
            style={styles.textInput} 
            placeholder= "S10" 
            value={t1s10}
            editable={t1s10TF}
            onChangeText={(text) =>{
                setT1S10(parseInt(text));
            }}
            />

        <Text style={styles.textLabel}>{shot10Overall}</Text>
        <Text style={styles.textLabelEnds}>10</Text>

        <TextInput 
            style={styles.textInput}
            placeholder= "S10" 
            value={t2s10}
            editable={t2s10TF}
            onChangeText={(text) =>{
                setT2S10(parseInt(text));
            }}
            />

        <Text style={styles.textLabel}>{t2shot10Overall}</Text>

       </ScrollView>
        <ScrollView horizontal={true}> 


        <Text style={styles.textLabelFinalScore}>{team1Name}</Text>
        <Text style={styles.textLabelFinalScoreH}>Team Name</Text>

        

        <Text style={styles.textLabelFinalScore}>{team2Name}</Text>
       </ScrollView>
       <ScrollView horizontal={true}> 


        <Text style={styles.textLabelFinalScore}>{shot10Overall}</Text>
        <Text style={styles.textLabelFinalScoreH}>FinalScore</Text>

        

        <Text style={styles.textLabelFinalScore}>{t2shot10Overall}</Text>

       </ScrollView>

       </ScrollView>

        </SafeAreaView>

     
    );
}

const styles = StyleSheet.create({
    textInput: {
        fontSize: 12,
        padding: 10,
        margin: 2,
        borderWidth: 1,
        width:50,
        height:50
    },

    textInputTeamName: {
        fontSize: 12,
        padding: 10,
        margin: 2,
        borderWidth: 1,
        width:104,
        height:50
    },

    textInputComp: {
        fontSize: 9,
        padding: 10,
        margin: 2,
        borderWidth: 1,
        width:131,
        height:50
    },
    textLabel:{
        fontSize: 12,
        padding: 10,
        margin: 2,
        borderWidth: 1,
        width:50,
        height:50,
        borderColor: 'black',
        alignContent: 'center',
        
    },

    textLabelHeadings:{
        fontSize: 12,
        padding: 10,
        margin: 2,
        borderWidth: 1,
        width:50,
        height:50,
        borderColor: '#529AEC',
        alignContent: 'center',
        
    },

    textLabelEnds:{
        fontSize: 12,
        padding: 10,
        margin: 2,
        borderWidth: 1,
        width:50,
        height:50,
        borderColor: '#529AEC',
        alignContent: 'center',
        
    },

    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderColor: '#000000'


    },

    textLabelHeadingsComp:{
        fontSize: 20,
        padding: 10,
        margin: 2,
        borderWidth: 1,
        width:131,
        height:50,
        borderColor: 'blue',
        alignContent: 'center',
        
    },

    textLabelFinalScoreH:{
        fontSize: 10,
        padding: 10,
        margin: 2,
        borderWidth: 1,
        width:50,
        height:50,
        borderColor: 'blue',
        alignContent: 'center',
        
    },

    textLabelFinalScore:{
        fontSize: 12,
        padding: 10,
        margin: 2,
        borderWidth: 1,
        width:104,
        height:50,
        borderColor: 'grey',
        alignContent: 'center',
        
    },

    textLabelHeadingsCompanyName:{
        fontSize: 20,
        padding: 10,
        margin: 2,
        borderWidth: 1,
        width:265,
        height:50,
        borderColor: 'blue',
        alignContent: 'center',
        
    },

    textLabelHeadingsPlayers:{
        fontSize: 8,
        padding: 10,
        margin: 2,
        borderWidth: 1,
        width:50,
        height:50,
        borderColor: 'blue',
        alignContent: 'center',
        
    }
    
   
});


export default TwoPlayerScoreCard;