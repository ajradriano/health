import { StyleSheet } from 'react-native';
import Main from './components/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Components/Pages
import FormIMC from './components/FormIMC';
import FormMetabolismoBasal from './components/FormMetabolismoBasal';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Índice de Massa Corporal" component={FormIMC} />
        <Stack.Screen name="Metabolismo Basal" component={FormMetabolismoBasal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cecece',
  },
});
