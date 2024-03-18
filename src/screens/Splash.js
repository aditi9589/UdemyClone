import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const nav1 = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      nav1.navigate('Main');
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={require('../Images/Udemy.png')}
        style={{width: 260, height: 200}}
      />
    </View>
  );
};

export default Splash;
