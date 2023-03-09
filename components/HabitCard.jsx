import { Avatar, Button, Card, Text, IconButton, ProgressBar } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";

const HabitCard = ({ cardTitle, cardSubTitle, onPress }) => (
    <Card
        style={styles.habitCard}
        elevation={0}
        onPress={() => onPress(
            {sheetName: cardTitle}
        )}
    >
        <Card.Title
            title={cardTitle}
            titleVariant="titleLarge"
            subtitle={cardSubTitle}
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