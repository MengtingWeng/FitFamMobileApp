import React from 'react';
import {View, Text} from 'react-native';
import CardSection from './CardSection';
import PhotoSection from './PhotoSection';

const Card = () =>{
  return(
  <View style = {styles.viewStyle}>
    <PhotoSection  />
    <CardSection text= "You need to run faster or you will be a loser forever" author= "Ryan Emery"/>
  </View>
)
}
const styles = {
  viewStyle: {
    backgroundColor: 'white',
    margin: 10,
    marginTop: 20,
    marginBottom: 20,
    flex: 1,
    allignSelf: 'stretch',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 5 , height: 5 },
    shadowOpacity: 0.9,
    shadowRadius: 2,

  }
}
export default Card;
