import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Card } from 'react-native-paper';

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import Header from './components/HeaderBar';
import HabitCard from './components/HabitCard';

const PlaceholderImage = require('./assets/tesla.jpg');

export default function App() {
  return (
      <SafeAreaProvider>
      <Header />
        <View style={styles.container}>
            <HabitCard
                cardTitle="Programming"
                cardSubTitle="5hrs per Week"
            />
            <HabitCard
                cardTitle="Reading"
                cardSubTitle="1hr per Week"
            />
            <HabitCard
                cardTitle="Writing"
                cardSubTitle="30min per Week"
            />
            <HabitCard
                cardTitle="Biking"
                cardSubTitle="5hrs per Week"
            />
            <StatusBar style="auto" />
        </View>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
    header: {
        color: '#fff',
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 24,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
    },
});
