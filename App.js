import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

const PlaceholderImage = require('./assets/tesla.jpg');

export default function App() {
  return (
    <View style={styles.container}>
          <Text style={styles.header}>Tesla</Text>
          <View style={styles.imageContainger}>
              <ImageViewer placeholderImageSource={PlaceholderImage} />
          </View>
          <View style={styles.footerContainer}>
              <Button theme="primary" label="Choose a photo" />
              <Button label="Use this photo" />
          </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        color: '#fff',
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 24,
    },
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
    },
});
