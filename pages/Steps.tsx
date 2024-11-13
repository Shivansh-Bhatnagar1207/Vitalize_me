import React from 'react';
import { StyleSheet, Text, View} from 'react-native';


const Steps = () => {
  
  return (
    <View>
      <Text style={styles.smallText}>Steps: </Text>
      {/* <Button
        title="Go to Home"
        // onPress={() => navigation.navigate("Home")}
        onPress={() => navigation.goBack()}
      /> */}
      {/* <Button
        title="Go back to first scren"
        // onPress={() => navigation.pop(2)}
        onPress={() => navigation.popToTop()}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
  },
});

export default Steps;
