// styles.js

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({


    //NAVIGATION
    screenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fffaf6',
        padding: 20,
    },
    screenTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    tabBarStyle: {
        backgroundColor: '#ffffff', //NAVBAR COLOR
        height: 60,
    },
    tabBarLabelStyle: {
        fontSize: 15,
        color: '#000000',
    },
    navLogos: {
        fontSize: 30,
        color: '#000000'
    },


    //distance and duration input
    input: {
        borderWidth: 1,
        borderColor: '#697268',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },

    //CALENDAR STYLING
    calendarButton: {
        height: '100%',
        backgroundColor: '#ffe6eb77',
        justifyContent: 'center',

    },
    calendar: {
        borderWidth: 2,
    },
    setTime: {
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderColor: '#697268',
        backgroundColor: '#ffbfcd',

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
        borderColor: '#697268',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    innerCircle: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#ff5277',
    },
    radioText: {
        fontSize: 16,
    },
    unitInput: {
        height: 40,
        borderColor: '#697268',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
    },
    unitResult: {
        marginTop: 10,
        fontSize: 16,
    },


    logobutton: {
        padding: 10,
        margin: 7,
        borderWidth: 2,
        width: 80,
        alignItems: 'center'
    },
    skillIconStyle: {
        color: 'black',
        fontSize: 35
    },

    addTrainingButton: {
        backgroundColor: '#ffbfcd',
        padding: 10,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#697268',
        borderRadius: 8
    },

    // FLATLIST FOR TRAINING HISTORY

    itemContainer: {
        flexDirection: 'row',
        marginVertical: 5,
        borderRadius: 8,
        backgroundColor: '#ffcdd8',
        alignItems: 'stretch',
        height: 100,
        elevation: 2, // Elevation for Android shadow
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




});
