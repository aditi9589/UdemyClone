import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const ViewCourse = () => {
  const route = useRoute();
  // taking out data which we have passed in last screen using "useRoute Hook"  through params
  return (
    <View style={{flex: 1}}>
      <Image
        source={{uri: route.params.data.image}}
        style={{width: '90%', height: 200, alignSelf: 'center', marginTop: 20}}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
          marginLeft: 20,
          marginTop: 10,
          color: '#000',
        }}>
        {route.params.data.title}
      </Text>
      <Text style={{fontSize: 16, fontWeight: '400', marginLeft: 20}}>
        {
          'Master Python by building 100 projects in 100 days,Learn Data science, automation, build websites,games and apps!'
        }
      </Text>
      <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 10}}>
        <Text> {route.params.data.rating}</Text>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
          }}>
          <Image
            source={require('../Images/star.png')}
            style={{width: 10, height: 10, marginLeft: 8}}
          />
          <Image
            source={require('../Images/star.png')}
            style={{width: 10, height: 10, marginLeft: 2}}
          />
          <Image
            source={require('../Images/star.png')}
            style={{width: 10, height: 10, marginLeft: 2}}
          />
          <Image
            source={require('../Images/star.png')}
            style={{width: 10, height: 10, marginLeft: 2}}
          />
          <Text> {'(' + route.params.data.totalrating + ')'}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 10}}>
        <Text style={{fontWeight: '500', color: '#000'}}> Created By</Text>
        <Text style={{fontWeight: '500', color: 'blue'}}>
          {' '}
          {route.params.data.tutor}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 16}}>
        <Image
          source={require('../Images/changes.png')}
          style={{width: 22, height: 22}}
        />
        <Text style={{fontSize: 14, color: '#000', marginLeft: 5}}>
          Last Updated 03/2024
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 5}}>
        <Image
          source={require('../Images/globe.png')}
          style={{width: 22, height: 22}}
        />
        <Text style={{fontSize: 14, color: '#000', marginLeft: 5}}>
          English
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 5}}>
        <Image
          source={require('../Images/closed-caption.png')}
          style={{width: 22, height: 22}}
        />
        <Text style={{fontSize: 14, color: '#000', marginLeft: 5}}>
          English,Arabic,Dutch
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 20}}>
        <Text style={{color: '#000', fontWeight: 600, fontSize: 26}}>
          {'₹'} {route.params.data.discountPrice}
        </Text>
        <Text
          style={{
            textDecorationLine: 'line-through',
            color: '#8e8e8e',
            fontWeight: 600,
            fontSize: 16,
            marginLeft: 5,
            marginTop: 8,
          }}>
          {route.params.data.price}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'purple',
          height: 50,
          width: '90%',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          Buy Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewCourse;
