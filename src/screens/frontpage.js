import { Text, View } from "react-native";
import { styles } from "../styles/styles";

export default function FrontPage() {
    return (

        <View>
            <Text style={styles.frontpage}>
            Your journey to peak performance starts here! 
            With our app, you can effortlessly track your training sessions, 
            analyze your history, and stay motivated every step of the way. 
            Join our community of athletes and make every workout count!
            </Text>
        </View>

    );
}

