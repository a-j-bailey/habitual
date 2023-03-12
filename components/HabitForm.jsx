import { StyleSheet, View, TextInput } from 'react-native';
import { Text, Divider, IconButton, Button } from 'react-native-paper';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import DropDownPicker from 'react-native-dropdown-picker';
import * as React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

function HabitForm() {
    const [title, setTitle] = React.useState('');
    const [hours, setHours] = React.useState('');
    const [minutes, setMinutes] = React.useState('');
    const [frequency, setFrequency] = React.useState('');

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('week');
    const [items, setItems] = React.useState([
        {label: 'Day', value: 'day'},
        {label: 'Week', value: 'week'},
        {label: 'Month', value: 'month'}
    ]);
    
    const saveHabit = ({
        title,
        hours,
        minutes,
        frequency
    }) => {
        alert(title + '\n' + hours + '\n' + minutes + '\n' + frequency);
    };
    
    return(
        <View style={{
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <View>
                <Text style={styles.title}>Get started on something new today: </Text>
                <Divider style={{
                    marginTop: 20,
                    marginBottom: 20,
                }} />
                <TextInput
                    style={{
                        fontSize: 22,
                    }}
                    autoCapitalize={'words'}
                    placeholder={"I'll do something epic..."}
                    onChangeText={(title) => setTitle(title)}
                    value={title}
                />
                <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingTop: 10,
                        paddingBottom: 10,
                    }}
                >
                    <Text style={styles.title}>for </Text>
                    <TextInput
                        style={styles.numInput}
                        placeholder={'00'}
                        keyboardType={'number-pad'}
                        maxLength={2}
                        onChangeText={(hours) => setHours(hours)}
                        value={hours}
                    />
                    <Text style={styles.title}> hours </Text>
                    <TextInput
                        style={styles.numInput}
                        placeholder={'00'}
                        keyboardType={'number-pad'}
                        maxLength={2}
                        onChangeText={(min) => setMinutes(min)}
                        value={minutes}
                    />
                    <Text style={styles.title}> minutes per </Text>
                </View>
                <View style={{
                        flexDirection: 'row',
                    }}
                >
                    <DropDownPicker
                        scrollViewProps={{
                            decelerationRate: "fast"
                        }}
                        items={items}
                        open={open}
                        setOpen={setOpen}
                        value={value}
                        setValue={setValue}
                        setItems={setItems}
                        textStyle={{
                            fontSize: 20,
                        }}
                        zIndex={100}
                        onChangeValue={(value) => {setFrequency(value)}}
                    />
                </View>
            </View>
            <View style={{
                padding: 40,
            }}>
                <Button mode="contained" onPress={() => saveHabit({
                        title: title,
                        hours: hours,
                        minutes: minutes,
                        frequency: frequency,
                    })} >
                    CREATE
                </Button>
            </View>
        </View>
    )
};

export default HabitForm;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
    },
    numInput: {
        fontSize: 22,
    }
});