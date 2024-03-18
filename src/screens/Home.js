import {View, Text} from 'react-native';
import React from 'react';
import CommonCom from './CommonCom';

const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CommonCom bgcolor={'yellow'} />
    </View>
  );
};

export default Home;
