import * as React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Text, Divider, IconButton, ProgressBar, Button } from 'react-native-paper';
import FontAwesome from "@expo/vector-icons/FontAwesome";

import * as HabitHelper from '../utilities/HabitHelper';

function HabitView({sheetRef, habit, onDelete}) {
    const [toggleIsRunning, isRunningVal] = HabitHelper.toggleIsRunning();
    const [seconds, setSeconds] = React.useState(0);

    React.useEffect(() => {
        if (isRunningVal) {
            const ticker = setInterval(() => {
                setSeconds(seconds + 1);
            }, 1000);

            return () => clearInterval(ticker);
        }
    });

    return (
        <View style={styles.outerContainer}>
            <View>
                <View style={styles.headerContainer}>
                    <View>
                        <Text variant="headlineLarge">{habit.title}</Text>
                        {
                            (isRunningVal) ? (
                                <Text variant="titleMedium">{HabitHelper.secondsToTime(seconds)}</Text>
                            ) : (
                                <Text variant="titleMedium">{habit.hours + 'hrs ' + habit.minutes + 'min / ' + habit.frequency}</Text>
                            )
                        }
                    </View>
                    <View>
                        <IconButton icon={(isRunningVal) ? ( "pause" ) : ( "clock" )} onPress={toggleIsRunning} />
                    </View>
                </View>
                <ProgressBar progress={0.5} />
                <Text style={{textAlign: 'right'}}>0:00 of {habit.hours}:{habit.minutes}</Text>
                <Text>{JSON.stringify(habit)}</Text>
            </View>
            <Button
                textColor={'#ff8080'}
                onPress={() => {
                    Alert.alert(
                        'Wow! Hold up',
                        'Are you sure you want to delete ' + habit.title,
                        [
                            {
                                text: 'Yes, Delete',
                                onPress: () => onDelete({id: habit.id}),
                            },
                            {
                                text: 'Cancel',
                                style: 'cancel',
                            },
                        ],
                        {
                            cancelable: true,
                            onDismiss: () => Alert.alert(
                                'This alert was dismissed by tapping outside of the alert dialog.',
                            ),
                        },
                    );
                }}
            >
                Delete Habit
            </Button>
        </View>

    );
}

export default HabitView;

const styles = StyleSheet.create({
    outerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        paddingBottom: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
    }
});