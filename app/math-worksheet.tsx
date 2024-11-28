import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ProgressBar } from "react-native-ui-lib/src/components/progressBar";

export default function MathWorksheetScreen() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [shuffledOptions, setShuffledOptions] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [disabledAnswers, setDisabledAnswers] = useState([]);
    const [progress, setProgress] = useState(0);

    const questions = [
        {
            id: 1,
            applesTop: 3,
            applesBottom: 2,
            options: ["6 apples", "5 apples", "4 apples"],
            correctAnswer: "5 apples",
        },
        {
            id: 2,
            applesTop: 2,
            applesBottom: 2,
            options: ["7 apples", "1 apple", "4 apples"],
            correctAnswer: "4 apples",
        },
        {
            id: 3,
            applesTop: 5,
            applesBottom: 1,
            options: ["6 apples", "8 apples", "2 apples"],
            correctAnswer: "6 apples",
        },
    ];

    useEffect(() => {
        setProgress(Math.ceil((currentQuestionIndex/questions.length) * 100));
        if (currentQuestionIndex < questions.length) {
            setShuffledOptions(shuffleArray([...questions[currentQuestionIndex].options]));
            setDisabledAnswers([]);
        }else{
            const timer = setTimeout(() => {
                router.push('/(tabs)/math'); 
            }, 1000);

            return () => clearTimeout(timer); 
        }
    }, [currentQuestionIndex]);

    const handleAnswerPress = (option) => {
        setSelectedAnswer(option);
        const isCorrectAnswer = option === questions[currentQuestionIndex].correctAnswer;
        setIsCorrect(isCorrectAnswer);

        if (isCorrectAnswer) {
            setTimeout(() => {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
                if (currentQuestionIndex < questions.length) {
                    setSelectedAnswer(null);
                    setIsCorrect(null);
                }
            }, 1000); // Move to next question after 1 second
        } else {
            setDisabledAnswers((prev) => [...prev, option]);
            setSelectedAnswer(null);
        }
    };

    const renderApples = (count) => {
        const applesPerColumn = 3; // Maximum apples per column
        const totalColumns = Math.ceil(count / applesPerColumn); // Calculate the number of columns needed

        // Create an array representing the number of apples
        let appleArray = [...Array(count).keys()];

        // Create columns with a maximum of 3 apples per column
        return [...Array(totalColumns)].map((_, columnIndex) => {
            const applesInColumn = appleArray
                .slice(columnIndex * applesPerColumn, (columnIndex + 1) * applesPerColumn)
                .map((_, appleIndex) => (
                    <Image
                        key={`${columnIndex}-${appleIndex}`}
                        source={require('../assets/images/math-apple.png')} 
                        style={styles.appleIcon}
                    />
                ));
            return (
                <View key={columnIndex} style={styles.column}>
                    {applesInColumn}
                </View>
            );
        });
    };

    if (currentQuestionIndex < questions.length) {
        return (
            <View style={styles.container}>
                <View style={styles.questionContainer}>
                    <View style={styles.appleColumn}>{renderApples(questions[currentQuestionIndex].applesTop)}</View>
                    <Text style={styles.plusSign}> + </Text>
                    <View style={styles.appleColumn}>{renderApples(questions[currentQuestionIndex].applesBottom)}</View>
                </View>
                {shuffledOptions.map((option) => (
                    <TouchableOpacity
                        key={option}
                        style={[
                            styles.option,
                            disabledAnswers.includes(option) ? styles.wrongAnswer : null,
                            selectedAnswer === option && isCorrect === true ? styles.correctAnswer : null,
                        ]}
                        onPress={() => handleAnswerPress(option)}
                        disabled={disabledAnswers.includes(option)}
                    >
                        <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                ))}
                <View style={[styles.progressContainer, styles.containerContent]}>
                    <ProgressBar
                        progress={progress}
                        style={styles.progressBar}
                        progressColor={'#4d6280'}
                    />
                </View>
                <Text style={styles.text}>Worksheet</Text>
            </View>
        );
    }else{
        return (
            <View style={styles.container}>
                <View style={styles.questionContainer}>
                    <View style={styles.appleColumn}>{renderApples(questions[currentQuestionIndex-1].applesTop)}</View>
                    <Text style={styles.plusSign}> + </Text>
                    <View style={styles.appleColumn}>{renderApples(questions[currentQuestionIndex-1].applesBottom)}</View>
                </View>
                {shuffledOptions.map((option) => (
                    <TouchableOpacity
                        key={option}
                        style={[
                            styles.option,
                            disabledAnswers.includes(option) ? styles.wrongAnswer : null,
                            selectedAnswer === option && isCorrect === true ? styles.correctAnswer : null,
                        ]}
                        onPress={() => handleAnswerPress(option)}
                        disabled={disabledAnswers.includes(option)}
                    >
                        <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                ))}
                <View style={[styles.progressContainer, styles.containerContent]}>
                    <ProgressBar
                        progress={progress}
                        style={styles.progressBar}
                        progressColor={'#4d6280'}
                    />
                </View>
                <Text style={styles.text}>Worksheet</Text>
            </View>
        );
    }
}

const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f2e9cb",
    },
    questionContainer: {
        width: "100%",
        justifyContent: "center",
        flexDirection: "row", 
        alignItems: "center", 
        marginBottom: 20,
    },
    appleColumn: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 80,
        marginTop: 60,
    },
    appleIcon: {
        width: 100,
        height: 100,
        marginVertical: -10, 
    },
    plusSign: {
        fontSize: 24,
        marginBottom: 10,
    },
    option: {
        width: "100%",
        padding: 15,
        marginVertical: 10,
        backgroundColor: "#173258",
        borderRadius: 10,
        alignItems: "center",
        // marginBottom: 100,
    },
    optionText: {
        fontSize: 18,
        color: '#fff',
    },
    correctAnswer: {
        backgroundColor: "green",
    },
    wrongAnswer: {
        backgroundColor: "red",
    },
    text: {
        color: '#173258',
        fontSize: 40,
        marginBottom: 5,
        textAlign: 'center', 
    },
    column: {
        width: "auto",
        alignItems: "center", 
        marginHorizontal: 5, // Add some horizontal spacing between columns
    },
    containerContent:{
        marginBottom: 30,
    },
    progressContainer: {
        marginTop: 40,
        width: '100%',
        position: 'relative', 
        alignItems: 'center',
    },
    progressBar: {
        width: '90%',
        height: 20,
        margin: 0,
        borderRadius: 5, 
    },
});