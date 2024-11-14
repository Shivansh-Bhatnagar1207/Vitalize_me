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
import tw from 'twrnc';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <>
      <View style={tw`bg-[#00712D] py-2`}>
        <Text style={tw`text-center font-bold text-white text-3xl`}>
          Vitalize Me
        </Text>
      </View>
      <View style={styles.banner}>
        <ImageBackground
          source={require('../assets/background.jpg')}
          style={tw`flex-1 items-center justify-center`}
          resizeMode="cover">
          <Text
            style={[
              styles.bg_opacity,
              tw`text-center font-bold text-white text-3xl p-2 rounded-2`,
            ]}>
            Welcome {'\n'} Fitness Freak
          </Text>
        </ImageBackground>
      </View>
      <View style={tw`bg-[#D5ED9F] h-full py-15 items-center gap-10`}>
        <TouchableOpacity
          onPress={() => {
            navigation.push('Steps');
          }}>
          <View style={tw`h-[200px]`}>
            <ImageBackground
              source={require('../assets/steps.png')}
              style={tw`h-[160px] aspect-square bg-red-600 rounded-t-lg`}
              resizeMode="cover"
            />
            <Text
              style={[
                styles.bg_opacity,
                tw`text-white text-xl text-center font-bold`,
              ]}>
              Steps
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.push('More');
          }}>
          <View style={tw`h-[200px]`}>
            <ImageBackground
              source={require('../assets/more.png')}
              style={tw`h-[160px] aspect-square bg-green-600 rounded-t-lg`}
            />
            <Text
              style={[
                styles.bg_opacity,
                tw`text-white text-xl text-center font-bold`,
              ]}>
              More Activites
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#00712D',
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
  bg_opacity: {
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  actionArea: {
    gap: 20,
    alignItems: 'center',
    paddingVertical: 100,
    backgroundColor: '#D5ED9F',
  },
  TilesArea: {
    height: 200,
  },
  actionCard: {
    height: 150,
    flex: 1,
    aspectRatio: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
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
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default Home;
