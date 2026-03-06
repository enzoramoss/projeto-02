import { StyleSheet, Text, View } from 'react-native';

import { useState, useEffect } from 'react';

import Login from './components/Login';
import CadastroDeClientes from './components/CadastroDeClientes';
import ListaProdutos from './components/ListaProdutos';
import Carrinho from './components/Carrinho';
import AreaAdmin from './components/AreaAdmin';

export default function App() {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [registeredName, setRegisteredName] = useState('');
  const [registeredPassword, setRegisteredPassword] = useState('');

  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
