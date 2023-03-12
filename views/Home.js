import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import * as React from 'react';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import Header from '../components/HeaderBar';
import HabitView from '../components/HabitView';
import HabitForm from '../components/HabitForm';
import HabitList from './HabitList';

const sheetRef = React.createRef();

function useForceUpdate() {
    const [value, setValue] = React.useState(0);
    return [() => setValue(value + 1), value];
}

function Home({db}) {
    const [newHabit, setNewHabit] = React.useState(false);
    const [curHabit, setCurHabit] = React.useState(null);
    const [forceUpdate, forceUpdateId] = useForceUpdate();
    
    const createHabit = () => {
        setNewHabit(true);
        sheetRef.current.snapTo(2);
    };

    const saveHabit = ({
        title,
        hours,
        minutes,
        frequency
    }) => {
        db.transaction(
            (tx) => {
                tx.executeSql("INSERT INTO habits (title, hours, minutes, frequency) values (?, ?, ?, ?)", [
                    title,
                    hours,
                    minutes,
                    frequency
                ]);
            },
            null,
            forceUpdate
        );
        sheetRef.current.snapTo(0);
        forceUpdate();
    };

    const openSheet = ({habit}) => {
        setNewHabit(false);
        console.log(habit);
        setCurHabit(habit.title);
        sheetRef.current.snapTo(1);
    };

    const sheetContent = () => (
        <View style={{
            backgroundColor: '#fff',
            padding: 16,
            height: 800,
          }}
        >
            { newHabit ? (
                <HabitForm
                    saveHabit={saveHabit}
                />
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
            <Text>{forceUpdateId}</Text>
            <HabitList
                key={forceUpdateId}
                onPressItem={openSheet}
                db={db}
            />
            <StatusBar style="auto" />
            <BottomSheet
                ref={sheetRef}
                snapPoints={[0, 450, 800]}
                borderRadius={10}
                overdragResistanceFactor={10}
                renderContent={sheetContent}
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
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
    },
});