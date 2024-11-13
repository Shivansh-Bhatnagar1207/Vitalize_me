import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const More = () => {
  return (
    <View>
      <Text style={styles.text}>More Options</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});

export default More;
