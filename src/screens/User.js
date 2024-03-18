import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const User = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffff'}}>
      {/* creating header  */}
      <View
        style={{
          width: '100%',
          height: 55,
          borderBottomWidth: 0.2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
          Account
        </Text>
      </View>
      <Text style={{marginLeft: 15, marginTop: 24, fontSize: 14}}>Support</Text>
      <View>
        <FlatList
          data={[
            {title: 'About Udemy', isIcon: true},
            {title: 'About Udemy Business', isIcon: true},
            {title: 'Help and Support', isIcon: false},
            {title: 'Share Udemy App', isIcon: false},
          ]}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 50,
                  borderBottomWidth: 0.5,
                  borderColor: '#8e8e8e',
                }}>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 6,
                  }}>
                  <Text
                    style={{
                      marginLeft: 15,
                      fontSize: 16,
                      color: 'black',
                      fontWeight: 'bold',
                    }}>
                    {item.title}
                  </Text>
                  {item.isIcon ? (
                    <Image
                      source={require('../Images/right-arrow.png')}
                      style={{height: 16, width: 16, marginRight: 20}}
                    />
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <TouchableOpacity
        style={{
          alignItems: 'center',
          marginTop: 26,
        }}>
        <Text style={{fontWeight: '700', color: '#8000ff', fontSize: 16}}>
          Sign Out
        </Text>
      </TouchableOpacity>
      <View
        style={{
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text>Udemy v8.23.0.1461 </Text>
      </View>
    </View>
  );
};

export default User;
