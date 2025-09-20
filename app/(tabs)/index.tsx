import { View, StyleSheet, Text, ScrollView, SafeAreaView, Dimensions, Image } from "react-native";
import LevelButton from '../components/LevelButton'; 
import { ProgressBar } from "react-native-ui-lib/src/components/progressBar";
import { useState } from "react";
import Icon from 'react-native-vector-icons/AntDesign'
import { useFonts } from 'expo-font';

const {width} = Dimensions.get('window')

export default function Index() {
  const [fontsLoaded] = useFonts({
    'Education-Pencil': require('../../assets/fonts/Education-Pencil.ttf'),
  });

  const [progress, setProgress] = useState(0);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const calculateIconPosition = () => {
    return ((width - 85) * progress)/100; // Subtract padding/margins as necessary
  };


  const handlePress = (level) => {
    const newProgress = ((level / 10)*100)
    setProgress(newProgress); // Update progress
    setSelectedLevel(level); // Update selected level
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={[styles.titleContainer, styles.containerContent]}>Hello User</Text>
        <View style={[styles.progressContainer, styles.containerContent]}>
          <ProgressBar
            progress={progress}
            style={styles.progressBar}
            progressColor={'#4d6280'}
          />
          <Icon
            name='star'
            size={50}
            color='#bdb109'
            style={styles.endIcon}
          />
          <Icon
            name='rocket1'
            size={50}
            color='#173258'
            style={[styles.icon, { left: calculateIconPosition() }]}
          />
        </View>
        <Text style={[styles.progressText, styles.containerContent]}>PROGRESS</Text>
        <View style={[styles.leftAlignedContainer, styles.containerContent]}>
          <View style={styles.roundedBox}>
            <Text style={styles.subHeader}>LEVEL:</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(level => (
              <LevelButton 
                key={level} 
                label={String(level)} 
                onPress={() => handlePress(level)} 
                isSelected={selectedLevel === level} // Pass selection state to Level
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.leftAlignedContainer}>
          <View style={styles.roundedBox}>
            <Text style={styles.subHeader}>COLORING SHEET:</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Image source={require('../../assets/images/cs1.png')} style={styles.colorSheet}/>
            <Image source={require('../../assets/images/cs2.png')} style={styles.colorSheet}/>
            <Image source={require('../../assets/images/cs3.png')} style={styles.colorSheet}/>
            <Image source={require('../../assets/images/cs4.png')} style={styles.colorSheet}/>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f2e9cb',
  },
  container: {
    flex: 1,
    alignItems: 'center', 
    padding: 16, 
    flexDirection: 'column',
  },
  containerContent:{
    marginBottom: 30,
  },
  titleContainer: {
    fontFamily: 'Education-Pencil',
    width: "100%",
    color: '#173258',
    fontSize: 50,
    margin: 0, 
    textAlign: 'center', 
    letterSpacing: 2,
  },
  progressContainer: {
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
  icon: {
    position: 'absolute',
    left: -10,
    top: -12, 
  },
  endIcon: {
    position: 'absolute',
    right: 0, // Place the end icon at the right end of the progress bar
    top: -16, // Adjust the vertical position if necessary
  },
  progressText: {
    fontFamily: 'Education-Pencil',
    color: '#173258',
    fontSize: 40,
    marginBottom: 5,
    textAlign: 'center', 
  },
  leftAlignedContainer: {
    width: '100%',
    alignItems: 'flex-start', 
  },
  subHeader: {
    fontFamily: 'Education-Pencil',
    color: '#fff',
    fontSize: 18,
    // marginBottom: 15,
    textAlign: 'left', 
  },
  roundedBox: {
    // width
    borderColor: '#fff',
    borderWidth: 5,
    backgroundColor: '#ad795b', // Background color of the rectangle
    borderRadius: 20,            // Rounding corners
    padding: 15,                 // Padding around the text
    alignItems: 'center',
    marginBottom: 15,
  },
    colorSheet: {
      marginTop: -15,
      marginLeft: -40,
      width: 150,
      height: 150,
    }
});