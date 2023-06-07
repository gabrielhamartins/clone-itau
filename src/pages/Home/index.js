import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Gabriel" />
        <Text></Text>
        <StatusBar style="auto" />
        <Footer></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee9e5',
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
