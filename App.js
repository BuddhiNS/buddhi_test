/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {createStackNavigator, createAppContainer} from 'react-navigator';
import Home from './app/components/Home';
import SignIn from './app/components/SignIn';

const  MainNavigator = createStackNavigator({
   home:Home,
   signin: SignIn
});

const loginApp = createAppContainer(MainNavigator);

export default loginApp;



