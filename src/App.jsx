import React, {useState} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import CarrinhoCompra from './screens/carrinhoCompra';
import Teste from './screens/Teste';

const Stack = createStackNavigator();

function App(){
    return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Teste" component={Teste} />
      <Stack.Screen name="Carrinho de compra" component={CarrinhoCompra} />
    </Stack.Navigator>

    )
}

export default App;