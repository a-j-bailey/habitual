import { Avatar, Button, Card, Text, IconButton, ProgressBar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const HabitCard = ({ onPress, habit }) => (
    <Card
        style={styles.habitCard}
        elevation={0}
        onPress={() => onPress(
            {habit: habit}
        )}
    >
        <Card.Title
            title={habit.title}
            titleVariant="titleLarge"
            subtitle={habit.hours + 'hrs ' + habit.minutes + 'min per week.'}
            right={(props) => <IconButton {...props} icon="clock" onPress={() => {}} />}
        />
        <Card.Content>
            <ProgressBar progress={0.5} />
        </Card.Content>
    </Card>
);

const styles = StyleSheet.create({
    habitCard: {
        marginBottom: 20,
        backgroundColor: '#fff',
    }
});

export default HabitCard;