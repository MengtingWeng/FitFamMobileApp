import React from 'react';
import {Text, View} from 'react-native';

const Button = (props) => {
  return(
    <View style = {styles.buttonStyle} >

    </View>
  );
};

const styles = {
  buttonStyle : {
    flex: 1,
    height: 62,
    allignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#F5C43A',
    flexDirection: 'row'
  }
}
export default Button;
