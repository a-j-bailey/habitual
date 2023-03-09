import { StyleSheet, View, TextInput } from 'react-native';
import { Text, Divider, IconButton, Button } from 'react-native-paper';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import DropDownPicker from 'react-native-dropdown-picker';
import * as React from 'react';



function HabitForm() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('week');
    const [items, setItems] = React.useState([
        {label: 'Day', value: 'day'},
        {label: 'Week', value: 'week'},
        {label: 'Month', value: 'month'}
    ]);
    
    return(
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
                />
                <Text style={styles.title}> hours </Text>
                <TextInput
                    style={styles.numInput}
                    placeholder={'00'}
                    keyboardType={'number-pad'}
                    maxLength={2}
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
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    textStyle={{
                        fontSize: 20,
                    }}
                />
            </View>
            <View style={{
                padding: 20,
                
            }}>
                <Button mode="contained" onPress={() => console.log('Pressed')}>
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