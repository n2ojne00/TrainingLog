
import { styles } from './src/styles/styles'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FrontPage from './src/screens/frontpage';
import Settings from './src/screens/settings';
import { ICONS } from './src/styles/icons';
import { Text, View } from 'react-native';
import UserForm from './src/screens/newtraining';
import HistoryData from './src/screens/history';


const Tab = createBottomTabNavigator();

export default function NavigationBar() {

    // Find the 'settings' logo from ICONS array
    const settingsIcon = ICONS.find(icon => icon.logoname === 'settings').logo;
    const historyIcon = ICONS.find(icon => icon.logoname === 'historybook').logo;
    const AddSportIcon = ICONS.find(icon => icon.logoname === 'setSkill').logo;
    const homeIcon = ICONS.find(icon => icon.logoname === 'home').logo;

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: styles.tabBarStyle, 
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarActiveTintColor: '#4CAF50',
                    tabBarInactiveTintColor: '#888',
                }}>
                <Tab.Screen
                    name="HOME"
                    component={HomeScreen}
                    options={{
                        headerTitle: () => homeIcon,
                        tabBarIcon: () => homeIcon,
                    }} />
                <Tab.Screen
                    name="HISTORY"
                    component={History}
                    options={{
                        headerTitle: () => historyIcon,
                        tabBarIcon: () => historyIcon,
                    }} />
                <Tab.Screen
                    name="NEW TRAINING"
                    component={LogTraining}
                    options={{
                        headerTitle: () => AddSportIcon,
                        tabBarIcon: () => AddSportIcon,
                    }} />
                <Tab.Screen
                    name="SETTINGS"
                    component={SettingsPage}
                    options={{
                        headerTitle: () => settingsIcon,
                        tabBarIcon: () => settingsIcon,
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

// Sample screens
const HomeScreen = () => (
    <View style={styles.screenContainer}>
        <Text style={styles.screenTitle}>Home Screen</Text>
        <FrontPage />
    </View>
);

const History = () => (
    <View style={styles.screenContainer}>
        <Text style={styles.screenTitle}>History Screen</Text>
        <HistoryData/>
    </View>
);

const LogTraining = () => (
    <View style={styles.screenContainer}>
        <Text style={styles.screenTitle}></Text>
        <UserForm />
    </View>
);

const SettingsPage = () => (
    <View style={styles.screenContainer}>
        <Text style={styles.screenTitle}>Settings Screen</Text>
        <Settings />
    </View>
);
