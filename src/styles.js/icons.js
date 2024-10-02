import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export const ICONS = [
    {
        logoname: 'settings',
        logo: <Feather name="settings" size={24} color="black" />
    },
    {
        logoname: 'setSkill',
        logo: <FontAwesome name="pencil-square-o" size={24} color="black" />
    },
    {
        logoname: 'historybook',
        logo: <Entypo name="open-book" size={24} color="black" />
    },
    {
        logoname: 'calendar',
        logo: <FontAwesome name="calendar" size={24} color="black"/>
    },
    {
        logoname: 'home',
        logo: <FontAwesome5 name="home" size={24} color="black" />
    },

    //SKILLS
    {
        logoname: 'skiing',
        logo: <MaterialIcons name="downhill-skiing" size={24} color="black" />
    },
    {
        logoname: 'running',
        logo: <MaterialCommunityIcons name="run-fast" size={24} color="black" />
    },
    {
        logoname: 'swimming',
        logo: <FontAwesome6 name="person-swimming" size={24} color="black" />
    },
    
   
   
   
]