import { Tabs } from 'expo-router';
import { Image, StyleSheet } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#f2e9cb',
                headerStyle: {
                    backgroundColor: '#173258',
                },
                headerShown: false,
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#173258',
                    height: 100,
                    paddingTop: 10,
                },
            }}
        >
        <Tabs.Screen
            name="math"
            options={{
            title: '',
            tabBarIcon: ({ focused }) => (
                <Image
                    source={focused ? require('../../assets/images/math-active.png') : require('../../assets/images/math.png')}
                    style={styles.icon}
                />
            ),
            }}
        />
        <Tabs.Screen
            name="literature"
            options={{
            title: '',
            tabBarIcon: ({ focused }) => (
                                <Image
                    source={focused ? require('../../assets/images/math-active.png') : require('../../assets/images/literature.png')}
                    style={styles.icon}
                />
            ),
            }}
        />
        <Tabs.Screen
            name="index"
            options={{
            title: '',
            tabBarIcon: ({ focused }) => (
                <Image
                    source={focused ? require('../../assets/images/home-active.png') : require('../../assets/images/home.png')}
                    style={styles.icon}
                />
            ),
            }}
        />
        <Tabs.Screen
            name="science"
            options={{
            title: '',
            tabBarIcon: ({ focused }) => (
                <Image
                    source={focused ? require('../../assets/images/math-active.png') : require('../../assets/images/science.png')}
                    style={styles.icon}
                />
            ),
            }}
        />
        <Tabs.Screen
            name="settings"
            options={{
            title: '',
            tabBarIcon: ({ focused }) => (
                <Image
                    source={focused ? require('../../assets/images/math-active.png') : require('../../assets/images/settings.png')}
                    style={styles.icon}
                />
            ),
            }}
        />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 50,
    }

});