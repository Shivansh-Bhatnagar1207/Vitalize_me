import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <>
      <View style={styles.Header}>
        <Text style={[styles.Heading]}>Vitalize Me</Text>
      </View>
      <View style={styles.banner}>
        <ImageBackground
          source={require('../assets/background.png')}
          style={[styles.welcome]}
          resizeMode="cover">
          <Text style={styles.Heading}>
            Welcome {'\n'} Fitness {'\n'} Freak
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.actionArea}>
        <TouchableOpacity
          onPress={() => {
            navigation.push('Steps');
          }}>
          <View style={[styles.TilesArea]}>
            <ImageBackground
              source={require('../assets/steps.png')}
              style={[styles.actionCard, styles.Steps]}
              resizeMode="cover"
            />
            <Text style={styles.cardInfo}>Steps</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.push('More');
          }}>
          <View style={[styles.TilesArea]}>
            <ImageBackground
              source={require('../assets/more.png')}
              style={[styles.actionCard, styles.more]}
            />
            <Text style={styles.cardInfo}>More Activites</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#f35469',
  },
  banner: {
    height: 200,
  },
  Heading: {
    textAlign: 'center',
    fontSize: 26,
    paddingVertical: 20,
    fontWeight: 'bold',
    color: '#ffff',
    fontFamily: 'Roboto',
  },
  welcome: {
    height: 500,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroText: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
  },
  actionArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 100,
    backgroundColor: 'white',
  },
  TilesArea: {
    gap: 20,
    height: 200,
  },
  actionCard: {
    height: 150,
    flex: 1,
    aspectRatio: 1,
    borderRadius: 10,
  },
  Steps: {
    backgroundColor: 'red',
  },
  more: {
    backgroundColor: 'green',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 4,
  },
  cardInfo: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  footer: {
    backgroundColor: 'black',
    height: 45,
  },
});

export default Home;
