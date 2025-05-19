import { ScreenSliderType } from '@/utils/TextWelcomeScreen';
import React from 'react';
import { Dimensions, Text, View } from 'react-native';

type Props = {
  item: ScreenSliderType;
  index: number;
};

const { width } = Dimensions.get('screen');

const WelcomeScreenItem = ({ item, index }: Props) => {
  const Logo = item.image;
  return (
    <View
      className='justify-center items-center gap-10'
      style={{ width }}
    >
      <Logo
        width={200}
        height={200}
        fill='#3f7d58'
      />
      <Text className='font-dmsans font-bold text-2xl text-titleGreen '>{item.title}</Text>
      <Text className='font-dmsans text-textGrey text-center p-10'>{item.text}</Text>
    </View>
  );
};

export default WelcomeScreenItem;
