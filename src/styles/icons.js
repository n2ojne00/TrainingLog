import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { styles } from './styles';

export const ICONS = [
    {
        logoname: 'settings',
        logo: <Feather name="settings" style={styles.navLogos} />
    },
    {
        logoname: 'setSkill',
        logo: <FontAwesome name="pencil-square-o" style={styles.navLogos} />
    },
    {
        logoname: 'historybook',
        logo: <Entypo name="open-book" style={styles.navLogos} />
    },
    {
        logoname: 'calendar',
        logo: <FontAwesome name="calendar" style={styles.navLogos} />
    },
    {
        logoname: 'home',
        logo: <FontAwesome5 name="home" style={styles.navLogos} />
    },

    //SKILLS
    {
        logoname: 'skiing',
        logo: <MaterialIcons name="downhill-skiing" style={styles.skillIconStyle} />
    },
    {
        logoname: 'running',
        logo: <MaterialCommunityIcons name="run-fast" style={styles.skillIconStyle} />
    },
    {
        logoname: 'swimming',
        logo: <FontAwesome6 name="person-swimming" style={styles.skillIconStyle} />
    },




]