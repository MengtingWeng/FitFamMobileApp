import React from 'react';
import {Text, View, Image} from 'react-native';
const Header = () =>{
  return(
    <View style={styles.viewStyle}>
      <Image style={styles.imageStyle} source={{uri: 'http://i281.photobucket.com/albums/kk212/emeryryan1/fitfam_rgb_v2_colors.png'}}/>
    </View>
  )
}
const styles = {
  viewStyle: {
    justifyContent: 'flex-start',
    backgroundColor: '#4f00b1',
    alignItems: 'center',
    height: 80,
    paddingTop: 15,
    position: 'relative'
  },
  imageStyle : {
    width: 200,
    height: 60,
    resizeMode: 'stretch'
  },
  textStyle : {
    alignItems: 'center',
    fontSize: 24,
    color: 'white'
  }
}
export default Header;
