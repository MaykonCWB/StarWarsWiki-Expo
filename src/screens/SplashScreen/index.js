import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text, Logo } from '../../components';
import logoImage from '../../../assets/logowars.png';

export const SplasshScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Text>StarWars Wiki Blade.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
