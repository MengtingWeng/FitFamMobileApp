import React from 'react';
import {Image, View, Text} from 'react-native';

const PhotoSection = () => {
  return(
  <View>
    <Text style = {styles.textStyle}> Your Runspiration </Text>
    <Image style = {styles.imageStyle} source= {{uri:'https://i.pinimg.com/736x/13/b4/c5/13b4c5412d00a017ccfc912a2ddcb3d2--fitnessmotivation-trains.jpg'}} />
  </View>
)
}

const styles = {
  textStyle : {
    fontSize: 24,
    alignItems: 'center'
  },
  imageStyle : {
    height: 300,
    width: null,
    margin: 10,
  }
}
export default PhotoSection
