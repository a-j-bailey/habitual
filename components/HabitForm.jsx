import { StyleSheet, View, TextInput } from 'react-native';
import { Text, Divider, IconButton } from 'react-native-paper';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const HabitView = () => (
    <View>
        <View style={{
                flexDirection: 'row',
            }}
        >
            <Text style={styles.title}>I want to </Text>
            <TextInput
                style={styles.input}
                autoCapitalize={'words'}
                placeholder={'do something epic...'}
            />
            
        </View>
        <View style={{
                flexDirection: 'row',
            }}
        >
            <Text style={styles.title}>for </Text>
            <TextInput
                style={styles.input}
                placeholder={'00'}
                keyboardType={'number-pad'}
                maxLength={2}
            />
            <Text style={styles.title}> hrs </Text>
            <TextInput
                style={styles.input}
                placeholder={'00'}
                keyboardType={'number-pad'}
                maxLength={2}
            />
            <Text style={styles.title}> minutes </Text>
        </View>
        <View style={{
                flexDirection: 'row',
            }}
        >
            <Text style={styles.title}>per </Text>
            <TextInput
                style={styles.input}
                autoCapitalize={'words'}
                placeholder={'Week'}
            />
        </View>
        
        
    </View>
    
);

export default HabitView;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
    },
    input: {
        fontSize: 24,
        fontWeight: 'bold',
    }
});