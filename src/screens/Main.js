import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Feature from './Feature';
import Search from './Search';
import Learning from './Learning';
import Wishlist from './Wishlist';
import User from './User';

const Main = () => {
  const [isSelectedTab, setIsSelectedTab] = useState(0);
  return (
    <View style={{flex: 1}}>
      {isSelectedTab == 0 ? (
        <Feature />
      ) : isSelectedTab == 1 ? (
        <Search />
      ) : isSelectedTab == 2 ? (
        <Learning />
      ) : isSelectedTab == 3 ? (
        <Wishlist />
      ) : (
        <User />
      )}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          width: '100%',
          height: 60,

          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          onPress={() => setIsSelectedTab(0)}>
          <Image
            source={
              isSelectedTab == 0
                ? require('../Images/StarTwo.png')
                : require('../Images/StarOne.png')
            }
            style={{height: 24, width: 24, marginBottom: 5}}
          />
          <Text> Featured</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          onPress={() => setIsSelectedTab(1)}>
          <Image
            source={
              isSelectedTab == 1
                ? require('../Images/searchTwo.png')
                : require('../Images/search.png')
            }
            style={{height: 24, width: 24, marginBottom: 5}}
          />
          <Text> Search</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          onPress={() => setIsSelectedTab(2)}>
          <Image
            source={
              isSelectedTab == 2
                ? require('../Images/play-button.png')
                : require('../Images/play.png')
            }
            style={{height: 24, width: 24, marginBottom: 5}}
          />
          <Text> My Learning</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          onPress={() => setIsSelectedTab(3)}>
          <Image
            source={
              isSelectedTab == 3
                ? require('../Images/heartTwo.png')
                : require('../Images/heartOne.png')
            }
            style={{height: 24, width: 24, marginBottom: 5}}
          />
          <Text> Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setIsSelectedTab(4)}>
          <Image
            source={
              isSelectedTab == 4
                ? require('../Images/user.png')
                : require('../Images/UserTwo.png')
            }
            style={{height: 24, width: 24, marginBottom: 5}}
          />
          <Text> User</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Main;
