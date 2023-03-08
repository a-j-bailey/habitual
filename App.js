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
import HabitForm from './components/HabitForm';

const sheetRef = React.createRef();

export default function App() {
    const [newHabit, setNewHabit] = React.useState(false);
    const [curHabit, setCurHabit] = React.useState('');
    
    const createHabit = () => {
        setNewHabit(true);
        sheetRef.current.snapTo(2);
    }

    const openSheet = ({sheetName}) => {
        setNewHabit(false);
        setCurHabit(sheetName);
        sheetRef.current.snapTo(1);
    };

    const renderContent = () => (
        <View style={{
            backgroundColor: '#fff',
            padding: 16,
            height: 800,
          }}
        >
            { newHabit ? (
                <HabitForm />
            ) : (
                <HabitView
                    sheetRef={sheetRef}
                    title={curHabit}
                />
            )}
        </View>
        
    );

    return (
        <SafeAreaProvider>
            <Header
                onPress={createHabit}
            />
            <View style={styles.container}>
                <HabitCard
                    cardTitle="Programming"
                    cardSubTitle="5hrs per Week"
                    onPress={openSheet}
                />
                <HabitCard
                    cardTitle="Biking"
                    cardSubTitle="1hr per Week"
                    onPress={openSheet}
                />
                <HabitCard
                    cardTitle="Medium Length Title"
                    cardSubTitle="30min per Week"
                    onPress={openSheet}
                />
                <HabitCard
                    cardTitle="Some really long title that's sure to cause problems."
                    cardSubTitle="5hrs per Week"
                    onPress={openSheet}
                />
                <StatusBar style="auto" />
            </View>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[0, 450, 800]}
                borderRadius={10}
                overdragResistanceFactor={10}
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