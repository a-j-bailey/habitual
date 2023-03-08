import { StyleSheet, View } from 'react-native';
import { Text, Divider, IconButton } from 'react-native-paper';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const HabitView = ({sheetRef, title}) => (
    <View
      style={{
        backgroundColor: '#fff',
        padding: 16,
        height: 800,
      }}
    >
        <View style={styles.headerContainer}>
            <View>
                <Text variant="headlineLarge">{title}</Text>
                <Text variant="titleMedium">5 hrs / Week</Text>
            </View>
            <View>
                <IconButton icon="clock" onPress={() => {}} />
            </View>
        </View>
        <Divider />
        <Text>Persistance is the key! Just keep working at it.</Text>
    </View>
    
);

export default HabitView;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});