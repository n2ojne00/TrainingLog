import { Button, View } from "react-native"
import ChooseDate from "../components/calendar"
import Distance from "../components/distance"
import SetSkill from "../components/setSkill"
import Duration from "../components/time"


export default function TrainingLog() {

    return (
     <View style={{borderWidth: 2, width: '90%'}}>   
        <SetSkill/>
        <Distance/>
        <Duration/>
        <ChooseDate/>

        <Button 
        title="ADD SPORT"
        >
        </Button>
    </View>
    );
}