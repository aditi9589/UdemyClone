import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CommonCom = ({bgcolor}) => {
  return (
    <TouchableOpacity>
      <Text style={{backgroundColor: bgcolor}}> This Common Button</Text>
    </TouchableOpacity>
  );
};

export default CommonCom;
