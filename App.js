import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Card } from 'react-native-paper';

import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import ImageViewer from './components/ImageViewer';
import Header from './components/HeaderBar';
import HabitCard from './components/HabitCard';
import HabitView from './components/HabitView';

const sheetRef = React.createRef();

export default function App() {
    let curHabit = null;

    const openSheet = ({sheetName}) => {
//        curHabit = sheetName;
        sheetRef.current.snapTo(0);
    };

    const renderContent = () => (
        <HabitView
            sheetRef={sheetRef}
            title={'curHabit'}
        />
    );

    return (
        <SafeAreaProvider>
            <Header />
            <View style={styles.container}>
                <HabitCard
                    cardTitle="Programming"
                    cardSubTitle="5hrs per Week"
                    onPress={openSheet}
                />
                <HabitCard
                    cardTitle="Reading"
                    cardSubTitle="1hr per Week"
                    onPress={openSheet}
                />
                <HabitCard
                    cardTitle="Writing"
                    cardSubTitle="30min per Week"
                    onPress={openSheet}
                />
                <HabitCard
                    cardTitle="Biking"
                    cardSubTitle="5hrs per Week"
                    onPress={openSheet}
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
        backgroundColor: '#f6f6f6',
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