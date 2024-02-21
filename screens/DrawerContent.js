import React from 'react';
import {View, Text, Button} from 'react-native';

const DrawerContent = ({navigation}) => {
  return (
    <View>
      <Text>Drawer Content</Text>
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button
        title="Dark Mode"
        onPress={() => navigation.navigate('DarkMode')}
      />
    </View>
  );
};

export default DrawerContent;
