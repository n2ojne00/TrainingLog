
import { styles } from './src/styles/styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FrontPage from './src/screens/frontpage';
import Settings from './src/screens/settings';
import { ICONS } from './src/styles/icons';
import { ImageBackground, Text, View } from 'react-native';
import SportForm from './src/screens/newtraining';


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
                screenOptions={({ route }) => ({
                    tabBarStyle: styles.tabBarStyle,
                    tabBarIcon: ({ focused }) => {
                        let iconName;

                        if (route.name === 'HOME') {
                            iconName = homeIcon;
                        } else if (route.name === 'HISTORY') {
                            iconName = historyIcon;
                        } else if (route.name === 'NEW TRAINING') {
                            iconName = AddSportIcon;
                        } else if (route.name === 'SETTINGS') {
                            iconName = settingsIcon;
                        }

                        return (
                            <View style={[styles.tabContainer, focused && styles.activeTab]}>
                                {iconName}
                                <Text style={[styles.tabBarLabelStyle, focused && styles.activeLabel]}>
                                    {route.name}
                                </Text>
                            </View>
                        );
                    },
                    tabBarLabel: () => null,
                })}
            >
                <Tab.Screen
                    name="HOME"
                    component={HomeScreen}
                    options={{
                        headerTitle: 'Home',
                    }}
                />
                <Tab.Screen
                    name="HISTORY"
                    component={History}
                    options={{
                        headerTitle: 'History',
                    }}
                />
                <Tab.Screen
                    name="NEW TRAINING"
                    component={LogTraining}
                    options={{
                        headerTitle: 'New Training',
                    }}
                />
                <Tab.Screen
                    name="SETTINGS"
                    component={SettingsPage}
                    options={{
                        headerTitle: 'Settings',
                    }}
                />
            </Tab.Navigator>

        </NavigationContainer>
    );
}


const HomeScreen = () => (
    <ImageBackground
        source={require('./src/assets/forest.jpg')}
        style={styles.background}
    >
        <View style={styles.screenContainer}>
            <Text style={styles.screenTitle}>Home</Text>
            <FrontPage />
        </View>
    </ImageBackground>
);

const History = () => (
    <ImageBackground
        source={require('./src/assets/forest.jpg')}
        style={styles.background}
    >
        <View style={styles.screenContainer}>
            <Text style={styles.screenTitle}>History</Text>
        </View>
    </ImageBackground>
);

const LogTraining = () => (
    <ImageBackground
        source={require('./src/assets/forest.jpg')}
        style={styles.background}
    >
        <View style={styles.screenContainer}>
            <SportForm/>
        </View>
    </ImageBackground>
);

const SettingsPage = () => (
    <ImageBackground
        source={require('./src/assets/forest.jpg')}
        style={styles.background}
    >
        <View style={styles.screenContainer}>
            <Text style={styles.screenTitle}>Settings</Text>
            <Settings />
        </View>
    </ImageBackground>
);