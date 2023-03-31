import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './App';
import Checkoutpage from './cheoutpage';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Checkout" component={Checkoutpage} />
        
      </Stack.Navigator> 
    </NavigationContainer>
  );
}
export default App;