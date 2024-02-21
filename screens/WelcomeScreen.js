import React from 'react';
import {View, Text, Button} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  const handleNextPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Welcome Screen</Text>
      <Button title="Next" onPress={handleNextPress} />
    </View>
  );
};

export default WelcomeScreen;
