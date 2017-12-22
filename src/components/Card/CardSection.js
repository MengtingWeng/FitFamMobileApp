import React from "react";
import {Text, View} from 'react-native';

const CardSection = (props) => {
  return  (
    <View style={styles.viewStyle}>
      <Text> {props.text} - {props.author} </Text>
    </View>
  )
}
const styles = {
  viewStyle : {
    margin: 10,
    marginRight: 0,
    marginLeft: 0,
    alignItems: 'center',
    padding: 4,
    borderTopWidth: 2,
    borderColor: '#dbd1b1'
  },
}
export default CardSection;
