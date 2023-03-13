import * as React from 'react';
import { Avatar, Button, Card, Text, IconButton, ProgressBar } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

import * as HabitHelper from '../utilities/HabitHelper';

function HabitCard({ onPress, habit }) {
    const [toggleIsRunning, isRunningVal] = HabitHelper.toggleIsRunning();
    
    const sheetContent = () => (
        <View>
            {(isRunningVal) ? (
                "00:00"
            ) : (
                habit.hours + 'hrs ' + habit.minutes + 'min per week.'
            )}
        </View>
    )
    
    return (
        <Card
            style={(isRunningVal) ? ( styles.habitRunning ) : ( styles.habitCard )}
            elevation={0}
            onPress={() => onPress(
                {habit: habit}
            )}
        >
            <Card.Title
                title={habit.title}
                titleVariant="titleLarge"
                subtitle={(isRunningVal) ? (
                        "00:00"
                    ) : (
                        habit.hours + 'hrs ' + habit.minutes + 'min per week.'
                    )
                }
                // right={(props) => <IconButton icon={(isRunningVal) ? ( "pause" ) : ( "clock" )} onPress={toggleIsRunning} />}
            />
            <Card.Content>
                <ProgressBar progress={0.5} />
            </Card.Content>
        </Card>
    );
    
}

const styles = StyleSheet.create({
    habitCard: {
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    habitRunning: {
        marginBottom: 20,
        backgroundColor: '#fff',
        borderWidth: '1px',
        borderColor: 'green',
    },
    timer: {
        display: 'flex',
        flexDirection: 'row',
    }
});

export default HabitCard;