import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Screens/Login';
import Dashboard from '../Screens/Dashboard';
import Receivings from '../Screens/Receivings';
import DailyExpenses from '../Screens/DailyExpenses';
import Cumulative from '../Screens/cumulative';
import SearchCommulative from '../Screens/SearchCommulative';
import VacantList from '../Screens/vacantList';
import AccountLedger from '../Screens/AccountLedger';
import CancelSummary from '../Screens/CancelSummary';

const AuthStack = createStackNavigator();

const Stack1 = (navigation) => {

return (

<AuthStack.Navigator screenOptions={{ headerShown: false }}>

<AuthStack.Screen name='Login' component={Login}></AuthStack.Screen>
<AuthStack.Screen name='Dashboard' component={Dashboard}></AuthStack.Screen>
<AuthStack.Screen name='Receiving' component={Receivings}></AuthStack.Screen>
<AuthStack.Screen name='Exp' component={DailyExpenses}></AuthStack.Screen>
<AuthStack.Screen name='Cumulative' component={Cumulative}></AuthStack.Screen>

<AuthStack.Screen name='SearchCommulative' component={SearchCommulative}></AuthStack.Screen>

<AuthStack.Screen name='VacantList' component={VacantList}></AuthStack.Screen>

<AuthStack.Screen name='AccountLedger' component={AccountLedger}></AuthStack.Screen>
<AuthStack.Screen name='CancelSummary' component={CancelSummary}></AuthStack.Screen>

</AuthStack.Navigator>

);
};
export { Stack1}; 