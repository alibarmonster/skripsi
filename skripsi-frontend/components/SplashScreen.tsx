import { View, Animated } from 'react-native';
import React from 'react';

const SplashScreen = () => {
  const imageScale = new Animated.Value(0.1);
  const imagePosition = new Animated.Value(-200);

  Animated.parallel([
    Animated.timing(imageScale, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }),
    Animated.timing(imagePosition, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }),
  ]).start();

  return (
    <View className='flex-1 justify-center items-center bg-titleGreen'>
      <Animated.Image
        source={require('../assets/Splash/logo.png')}
        style={[
          {
            transform: [{ scale: imageScale }, { translateY: imagePosition }],
            width: 500,
            height: 500,
          },
        ]}
      />
    </View>
  );
};

export default SplashScreen;
