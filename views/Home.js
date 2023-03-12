import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import * as React from 'react';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Header from '../components/HeaderBar';
import HabitCard from '../components/HabitCard';
import HabitView from '../components/HabitView';
import HabitForm from '../components/HabitForm';

const sheetRef = React.createRef();

function Home() {
    const dummyHabits = [
        {
            title: 'Biking',
            time: {
                hrs: 1,
                min: 30,
            },
        },
        {
            title: 'Programming',
            time: {
                hrs: 5,
                min: 0,
            },
        },
        {
            title: 'Medium Length Title',
            time: {
                hrs: 5,
                min: 0,
            },
        },
        {
            title: "Super long title that's sure to break something.",
            time: {
                hrs: 5,
                min: 0,
            },
        },
        {
            title: 'Drink Coffee',
            time: {
                hrs: 5,
                min: 0,
            },
        },
        {
            title: 'Watch Ted Lasso',
            time: {
                hrs: 5,
                min: 0,
            },
        },
        {
            title: 'Sleep',
            time: {
                hrs: 5,
                min: 0,
            },
        },
    ];
    
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

    return(
        <SafeAreaProvider>
            <Header
                onPress={createHabit}
            />
            <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 50}}>
                {dummyHabits.map((habit) => {
                    return <HabitCard
                        key={habit.id}
                        cardTitle={habit.title}
                        cardSubTitle={habit.time.hrs + 'hrs ' + habit.time.min + 'min per week.'}
                        onPress={openSheet}
                    />;
                })}
                <StatusBar style="auto" />
            </ScrollView>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[0, 450, 800]}
                borderRadius={10}
                overdragResistanceFactor={10}
                renderContent={renderContent}
            />
        </SafeAreaProvider>
    )
};

export default Home;

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