import * as React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Text } from 'react-native-paper';
import HabitCard from '../components/HabitCard';

function HabitList({onPressItem, db}) {
    const [habits, setHabits] = React.useState(null);

    React.useEffect(() => {
        db.transaction(tx => {
            // sending 4 arguments in executeSql
            tx.executeSql('SELECT * FROM habits', null, // passing sql query and parameters:null
                // success callback which sends two things Transaction object and ResultSet Object
                (txObj, { rows: { _array } }) => setHabits(_array),
                // failure callback which sends two things Transaction object and Error
                (txObj, error) => console.log('Error ' + error)
            ) // end executeSQL
        }) // end transaction
    }, []);

    if (habits === null || habits.length === 0) {
        return (
            <View style={styles.container}>
                <Text variant='displaySmall'>Hit the '+' icon to create your first habit</Text>
            </View>
        )
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={{paddingBottom: 50}}>
            {
                habits.map((habit) => {
                    return <HabitCard
                        key={habit.id}
                        habit={habit}
                        cardTitle={habit.title}
                        cardSubTitle={habit.hours + 'hrs ' + habit.minutes + 'min per week.'}
                        onPress={onPressItem}
                    />;
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f6f6f6',
    },
});

export default HabitList;