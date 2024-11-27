import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function ScienceScreen() {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Video</Text>
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
    text: {
    color: '#060140',
    },
});

