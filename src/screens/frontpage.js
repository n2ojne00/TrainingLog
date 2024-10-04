import { Pressable, StyleSheet, Text, View } from "react-native";

export default function FrontPage() {
    return (

        <View style={[styles.container, { flexDirection: 'row' }]}>
            <Text>
            Your journey to peak performance starts here! 
            With our app, you can effortlessly track your training sessions, 
            analyze your history, and stay motivated every step of the way. 
            Join our community of athletes and make every workout count!
            </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        justifyContent: 'center'
    },
    box: {
        margin: '10%',
        padding: 10
    }
})