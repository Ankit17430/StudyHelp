import { useFonts } from 'expo-font';
import { StyleSheet, View, Pressable, Text } from 'react-native';

type Props = {
    label: string;
    onPress: () => void;
    isSelected: boolean;
};

export default function LevelButton({ label, onPress, isSelected }: Props) {
    const [fontsLoaded] = useFonts({
        'Education-Pencil': require('../../assets/fonts/Education-Pencil.ttf'),
    });
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={[styles.button, isSelected ? styles.selectedButton : styles.defaultButton]} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 68,  // Set width and height equal for a perfect circle
        height: 68,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        borderRadius: 34,  // Half of the width/height for a circular shape
        borderWidth: 2,  // Optional: Add a border
        borderColor: '#fff',  // Optional: Border color
        backgroundColor: '#173258',  // Background color
    },
    button: {
        borderRadius: 34,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    defaultButton: {
        backgroundColor: '#173258', // Default color
    },
    selectedButton: {
        backgroundColor: '#4d6280', // Highlight color for selected button
    },
    buttonLabel: {
        fontFamily: 'Education-Pencil',
        color: '#fff',
        fontSize: 30,
    },
});
