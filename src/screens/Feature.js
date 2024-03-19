import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';

// created data

const featuredCourses = [
  {
    title: 'learn python in 30 days easily',
    image:
      'https://trisectinstitute.com/wp-content/uploads/2021/12/best-python-training.png',
    tutor: 'Aditi Luthra',
    price: '3999',
    discountPrice: '599',
    rating: '4.1',
    totalrating: '150',
  },
  {
    title: 'React Native Full Course',
    image: 'https://www.filepicker.io/api/file/4C6yPDywSUeWYLyg1h9G',
    tutor: 'Free Code Camp',
    price: '5999',
    discountPrice: '699',
    rating: '4.2',
    totalrating: '250',
  },
  {
    title: 'JavaScript Full Course',
    image:
      'https://www.freecodecamp.org/news/content/images/2021/06/javascriptfull.png',
    tutor: 'Free Code Camp',
    price: '3999',
    discountPrice: '599',
    rating: '4.1',
    totalrating: '150',
  },
  {
    title: 'Nodejs Full Course',
    image:
      'https://miro.medium.com/v2/resize:fit:1400/1*xdo0UBpyszvD7-7EH4TkIA.png',
    tutor: 'Aditi Luthra',
    price: '3999',
    discountPrice: '599',
    rating: '4.1',
    totalrating: '150',
  },
];

const Feature = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Image
          source={require('../Images/women.jpg')}
          style={{width: '100%', height: 200}}
        />
        <Text
          style={{fontSize: 27, color: '#000', fontWeight: 500, margin: 20}}>
          {' Learning that fits'}
        </Text>
        <Text style={{marginLeft: 20, marginRight: 20, marginTop: -15}}>
          {
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum'
          }
        </Text>
        <View
          style={{
            width: '90%',
            height: 60,
            backgroundColor: '#e6e600',
            alignSelf: 'center',
            marginTop: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#000'}}> Learn From Experts</Text>
          <Text style={{color: '#000', fontWeight: 800}}> Ends in 10 Days</Text>
        </View>
        <Text
          style={{
            color: '#000',
            marginTop: 16,
            marginLeft: 20,
            fontSize: 20,
            fontWeight: '700',
          }}>
          Featured
        </Text>
        <View
          style={{
            width: '100%',
            marginBottom: 130,
            marginTop: 10,
          }}>
          <FlatList
            data={featuredCourses}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity style={{width: 250, marginLeft: 10}}>
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                    }}>
                    <Image
                      source={{
                        uri: item.image,
                      }}
                      style={{
                        width: '100%',
                        height: 120,
                      }}
                    />
                    <Text
                      style={{color: '#000', fontSize: 16, fontWeight: '500'}}>
                      Learn Python in 30 days Easily
                    </Text>

                    <Text
                      style={{
                        color: '#8e8e8e',
                        fontSize: 14,
                        fontWeight: '500',
                      }}>
                      {item.tutor}
                    </Text>
                    <View style={{flexDirection: 'row', width: '100%'}}>
                      <Text> {item.rating}</Text>
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
                        <Text> {'(' + item.totalrating + ')'}</Text>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{color: '#000', fontWeight: 600, fontSize: 18}}>
                        {'₹'} {item.discountPrice}
                      </Text>
                      <Text
                        style={{
                          textDecorationLine: 'line-through',
                          color: '#8e8e8e',
                          fontWeight: 600,
                          fontSize: 16,
                          marginLeft: 5,
                          marginTop: 2,
                        }}>
                        {item.price}
                      </Text>
                    </View>

                    {/* {isbestseller  ? (<view> </view>) : null} */}
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 50,
          backgroundColor: '#000',
          position: 'absolute',
          bottom: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}> Sign in</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Feature;
