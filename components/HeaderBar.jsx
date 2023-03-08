
import { Appbar } from 'react-native-paper';

const Header = ({onPress}) => (
    <Appbar.Header mode="small">
        <Appbar.Content title="🕰️ Habitual" />
        <Appbar.Action icon="plus" onPress={() => onPress()} />
    </Appbar.Header>
);

export default Header;