import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TrainingLog from './src/screens/traininglog';
import FrontPage from './src/screens/frontpage';
import Settings from './src/screens/settings';
import { ICONS } from './styles.js/icons';
import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native';


const Tab = createBottomTabNavigator();

export default function NavigationBar() {
    

    // Find the 'settings' logo from ICONS array
    const settingsIcon = ICONS.find(icon => icon.logoname === 'settings').logo;
    const historyIcon = ICONS.find(icon => icon.logoname === 'historybook').logo;
    const AddSportIcon = ICONS.find(icon => icon.logoname === 'setSkill').logo;
    const homeIcon = ICONS.find(icon => icon.logoname === 'home').logo;

    return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: () => homeIcon
                 
                  }}/>

            <Tab.Screen
                name="History"
                component={History}
                options={{
                    headerTitle: () => historyIcon
                    
                  }}/>

            <Tab.Screen
                name="AddSport"
                component={LogTraining}
                options={{
                    headerTitle: () => AddSportIcon
              
                  }}/>

            <Tab.Screen
                name="Settings"
                component={SettingsPage}
                options={{
                    headerTitle: () => settingsIcon
                  }}/>

        </Tab.Navigator>
    </NavigationContainer>
    );
}
// Sample screens
const HomeScreen = () => (
    <View style={styles.screenContainer}>
        <Text>Home Screen</Text>
        <FrontPage />
    </View>
);

const History = () => (
    <View style={styles.screenContainer}>
        <Text>History Screen</Text>
        {/* <History/> */}
    </View>
);

const LogTraining = () => (
    <View style={styles.screenContainer}>
        <Text>Log Training Screen</Text>
        <TrainingLog />
    </View>
);

const SettingsPage = () => (
    <View style={styles.screenContainer}>
        <Text>Settings Screen</Text>
        <Settings />
    </View>
);

// Styles
const styles = StyleSheet.create({

    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5', // Light background color for screens
    },
});