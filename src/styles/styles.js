import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },

    frontpage: {
        fontSize: 20
    },


    //NAVIGATION
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f1f1f1e0',
        padding: 20,
        width: '90%'
    },
    screenTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    tabBarStyle: {
        backgroundColor: '#f9fff5fa', //NAVBAR COLOR
        height: 60,
        padding: 5,
        borderTopWidth: 1,
        borderTopColor: '#246600ff',
    },
    tabBarLabelStyle: {
        fontSize: 15,
        color: '#000000',
    },
    tabContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 5,
        width: '100%'
    },
    activeTab: {
        borderBottomWidth: 5,
        borderBottomColor: '#45c500ff',
    },
    activeLabel: {
        color: '#45c500ff',
        fontWeight: 'bold'
    },
    navLogos: {
        fontSize: 30,
        color: '#000000'
    },

    //DISTANCE AND DURATION INPUTS
    input: {
        borderWidth: 1,
        borderColor: '#6F7573',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#ffffff'
    },

    inputdesc: {
        fontWeight: 'bold',
    },

    //CALENDAR STYLING
    calendarButton: {
        height: '100%',
        backgroundColor: '#ebfde188',
        justifyContent: 'center',
    },
    setTime: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderColor: '#6F7573',
        backgroundColor: '#ebfde1',
    },

    //UNIT CONVERTION
    unitcontainer: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    outerCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#6F7573',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    innerCircle: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#359203',
    },
    radioText: {
        fontSize: 16,
    },
    unitInput: {
        height: 40,
        borderColor: '#6F7573',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
    },
    unitResult: {
        marginTop: 10,
        fontSize: 16,
    },

    //SKILL LOGO STYLING
    logobutton: {
        padding: 10,
        margin: 7,
        borderWidth: 2,
        width: 85,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    skillIconStyle: {
        color: 'black',
        fontSize: 40
    },

    //ADD TRAINING BUTTON
    addTrainingButton: {
        backgroundColor: '#d2ffb9',
        paddingVertical: 10,
        paddingHorizontal: 80,
        borderWidth: 1,
        borderColor: '#6F7573',
        borderRadius: 8,
        alignSelf: 'center',

    },

    // FLATLIST FOR TRAINING HISTORY
    itemContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        borderRadius: 8,
        backgroundColor: '#ebfde1',
        alignItems: 'stretch',
        height: 100,
        elevation: 2,
        width: '100%'
    },

    logoContainer: {
        flex: 1,
        borderRightWidth: 1,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',

    },
    nameText: {
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 5,
    },

    middleColumn: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateText: {
        fontWeight: 'bold',
        marginBottom: 5,
        borderBottomWidth: 1,
    },
    durationText: {
        color: '#6e6e6e',
    },

    rightColumn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingLeft: 5,
        borderLeftWidth: 1

    },
    distanceText: {
        fontWeight: 'bold',
        fontSize: 16,

    },

    totalTitle: {
        fontSize: 16,
    },

    totalText: {
        fontSize: 14,
    },

});
