import react from "react";
import { Button, Stylesheet, navigation } from "react-native";

const NavigationButton = ({screenName, navigation}) => {
    return  <Button title ={"Go to "+screenName}
    onPress={() => navigation.navigate(screenName)}
    />
}


export default NavigationButton;