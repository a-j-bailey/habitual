import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Card } from 'react-native-paper';

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import ImageViewer from './components/ImageViewer';
//import Button from './components/Button';
import Header from './components/HeaderBar';
import HabitCard from './components/HabitCard';

const PlaceholderImage = require('./assets/tesla.jpg');

const renderContent = () => (
    <View
      style={{
        backgroundColor: 'white',
        padding: 16,
        height: 450,
      }}
    >
      <Text>Swipe down to close</Text>
    </View>
);

const sheetRef = React.createRef();


export default function App() {
  return (
      <SafeAreaProvider>
      <Header />
        <View style={styles.container}>
            <HabitCard
                cardTitle="Programming2"
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
            <Button
                style={styles.button}
                title="Open Bottom Sheet"
                onPress={() => sheetRef.current.snapTo(0)}
            />
            <StatusBar style="auto" />
        </View>
      <BottomSheet
            ref={sheetRef}
            snapPoints={[450, 300, 0]}
            borderRadius={10}
            renderContent={renderContent}
      />
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#212121',
        color: '#fff',
    },
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