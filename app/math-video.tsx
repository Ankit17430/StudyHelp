import React, { useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import { router } from 'expo-router';

export default function MathVidScreen() {
    const videoRef = useRef(null);

    const handlePlaybackStatusUpdate = (status) => {
        if (status.didJustFinish) {
            router.push('/math-worksheet');
        }
    };
    const handleFullscreen = async () => {
        if (videoRef.current) {
            await videoRef.current.presentFullscreenPlayer();
        }
    };
    useEffect(() => {
        const playVideo = async () => {
            if (videoRef.current) {
                await videoRef.current.playAsync();
                handleFullscreen(); // Attempt to enter fullscreen
            }
        };

        playVideo();
    }, []);
    return (
    <View style={styles.container}>
        <Video
            ref={videoRef}
            source={require('../assets/videos/math-intro.mp4')}
            style={styles.video}
            resizeMode="contain"
            useNativeControls
            onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
            onError={(e) => console.log('Video Error: ', e)}
            isLooping={false}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2e9cb',
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        width: '100%',
        height: 300, // Adjust height as needed
    },
});

