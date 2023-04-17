import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../constants/styles';
import CreateQuizScreen from '../screens/createQuiz/createQuizScreen';
import HistoryScreen from '../screens/history/historyScreen';
import HomeScreen from '../screens/home/homeScreen';
import LeaderboardScreen from '../screens/leaderboard/leaderboardScreen';
import ProfileScreen from '../screens/profile/profileScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { View, StyleSheet } from 'react-native'

const Tab = createBottomTabNavigator();

const BottomTabBarScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: Colors.whiteColor,
                tabBarInactiveTintColor: Colors.offWhiteColor,
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: Colors.primaryColor,
                    height: 70.0,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" size={30} color={color} />
                }}
            />
            <Tab.Screen
                name="History"
                component={HistoryScreen}
                options={{
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="history" size={30} color={color} />
                }}
            />
            <Tab.Screen
                name="CreateQuiz"
                component={CreateQuizScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        focused
                            ?
                            null
                            :
                            <View style={styles.addIconWrapStyle}>
                                <MaterialCommunityIcons name="plus" size={30} color={Colors.whiteColor} />
                            </View>
                    ),
                    tabBarStyle: { display: 'none' },
                }}
            />
            <Tab.Screen
                name="Leaderboard"
                component={LeaderboardScreen}
                options={{
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="trophy" size={28} color={color} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" size={28} color={color} />
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabBarScreen

const styles = StyleSheet.create({
    addIconWrapStyle: {
        backgroundColor: Colors.primaryColor,
        width: 66,
        height: 66,
        borderRadius: 33,
        borderWidth: 3.5,
        borderColor: Colors.whiteColor,
        bottom: 35.0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})