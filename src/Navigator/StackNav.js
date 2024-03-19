import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Main from '../screens/Main';
import Feature from '../screens/Feature';
import Search from '../screens/Search';
import Learning from '../screens/Learning';
import Wishlist from '../screens/Wishlist';
import User from '../screens/User';
import ViewCourse from '../screens/ViewCourse';

const StackNav = () => {
  const STACK = createStackNavigator();
  return (
    <NavigationContainer>
      <STACK.Navigator>
        <STACK.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <STACK.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <STACK.Screen
          name="Feature"
          component={Feature}
          options={{headerShown: false}}
        />
        <STACK.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
        <STACK.Screen
          name="Learning"
          component={Learning}
          options={{headerShown: false}}
        />
        <STACK.Screen
          name="Wishlist"
          component={Wishlist}
          options={{headerShown: false}}
        />
        <STACK.Screen
          name="User"
          component={User}
          options={{headerShown: false}}
        />

        <STACK.Screen
          name="ViewCourse"
          component={ViewCourse}
          options={{headerShown: false}}
        />

        <STACK.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </STACK.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
