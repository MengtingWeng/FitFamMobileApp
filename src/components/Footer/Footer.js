import React from 'react';
import {Text, View} from 'react-native';
import Button from './Button';

const Footer = (props) =>{
  return(
    <View style={styles.viewStyle}>
      <Button />
      <Button />
      <Button />
    </View>
  );
};
const styles = {
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: '#4f00b1',
    allignItems: 'center',
    height: 65,
  },
}
export default Footer;
