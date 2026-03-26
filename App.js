import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/Login';
import CadastroDeClientes from './components/CadastroDeClientes';
import Carrinho from './components/Carrinho';
import AreaAdmin from './components/AreaAdmin';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={CadastroDeClientes} />
        <Stack.Screen name='AdminArea' component={AreaAdmin} />
        <Stack.Screen name='Cart' component={Carrinho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
