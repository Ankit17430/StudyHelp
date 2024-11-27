import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function LiteratureScreen() {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Literature screen</Text>
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
    color: '#fff',
    },
});

