import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FrontPage from './src/screens/frontpage';
import Settings from './src/screens/settings';
import { ICONS } from './src/styles/icons';
import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import UserForm from './src/screens/newtraining';



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
                    name="HOME"
                    component={HomeScreen}
                    options={{
                        headerTitle: () => homeIcon,
                        tabBarIcon: () => homeIcon

                    }} />

                <Tab.Screen
                    name="HISTORY"
                    component={History}
                    options={{
                        headerTitle: () => historyIcon,
                        tabBarIcon: () => historyIcon
                    }} />

                <Tab.Screen
                    name="NEW TRAINING"
                    component={LogTraining}
                    options={{
                        headerTitle: () => AddSportIcon,
                        tabBarIcon: () => AddSportIcon

                    }} />

                <Tab.Screen
                    name="SETTINGS"
                    component={SettingsPage}
                    options={{
                        headerTitle: () => settingsIcon,
                        tabBarIcon: () => settingsIcon
                    }} />

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
        
    </View>
);

const LogTraining = () => (
    <View style={styles.screenContainer}>
        <Text>Log Training Screen</Text>
        <UserForm/> 
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
    },
});