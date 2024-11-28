import { router } from 'expo-router';
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import Svg, { Line, Path } from 'react-native-svg';

export default function MathScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
            source={require('../../assets/images/math-bg.png')}
            style={styles.background}
            > 
                <View style={styles.titleContainer}>
                    <Image source={require('../../assets/images/text-cloud.png')} style={styles.cloud}/>
                    <Text style={styles.titleText}>Math</Text>
                </View>
            <View style={styles.planetContainer}>
                <View style={styles.rightPlanets}>
                    <Image source={require('../../assets/images/saturn.png')} style={styles.saturn}/>
                </View>
                <View>
                    <Image source={require('../../assets/images/mars.png')} style={styles.mars}/>
                </View>
                <View style={styles.rightPlanets}>
                    <Image source={require('../../assets/images/earth.png')} style={styles.earth}/>
                </View>
            </View>
            <Svg style={styles.svg}>
                {/* Mars to Saturn */}
                <Path
                    d="M 125 397 
                    L 220 295 
                    Q 230 295, 250 300 
                    L 148 420 
                    Q 135 410, 125 397"
                    fill={'#878e99'}
                    strokeWidth={2}
                    opacity={0.5}
                />
                {/* Earth to mars */}
                <Line
                    x1="105" 
                    y1="550" 
                    x2="180" 
                    y2="470" 
                    stroke="#878e99"
                    strokeWidth="10"
                    opacity={0.5}
                />
                <Line
                    x1="135" 
                    y1="580" 
                    x2="210" 
                    y2="500" 
                    stroke="#878e99"
                    strokeWidth="10"
                    opacity={0.5}
                />
                <Line
                    x1="165" 
                    y1="610" 
                    x2="240" 
                    y2="530" 
                    stroke="#878e99"
                    strokeWidth="10"
                    opacity={0.5}
                />
            </Svg>
            <TouchableOpacity
                    style={styles.rocketButton}
                    onPress={() => router.push('/math-video')} // Change 'TargetScreen' to your desired screen name
                >
                    <Image
                        source={require('../../assets/images/math-rocket.png')} 
                        style={styles.rocket}
                    />
                </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
        
    );
}

const styles = StyleSheet.create({
    safeArea:{
        flex: 1,
        backgroundColor: '#060140',
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        position: 'relative',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    titleText: {
        position: 'absolute', 
        color: '#f2e9cb',
        fontSize: 50,
        textAlign: 'center',
        letterSpacing: 10,
        zIndex: 1, 
        top:50,
    },
    cloud: {
        height: 300,
        width: 300,
        alignSelf: 'center', 
        justifyContent: 'center',
        resizeMode: 'contain',
    },
    planetContainer: {
        marginTop: -150,
    },
    rightPlanets: {
        alignItems: 'flex-end', // Align to the right
        marginLeft: 100, 
    },
    saturn: {
        height: 250,
        width: 250,
        opacity: 0.5,
    },
    earth: {
        height: 200,
        width: 200,
        opacity: 0.5,
    },
    mars: {
        height: 150,
        width: 150,
    },
    svg: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // Adjust the size of the SVG if needed
    },
    rocketButton: {
        position: 'absolute',
        top: 285, // Adjust based on Mars position
        left: -8, // Adjust based on Mars position
    },
    rocket: {
        height: 200, // Adjust size as needed
        width: 200, // Adjust size as needed
        resizeMode: 'contain',
    },
});