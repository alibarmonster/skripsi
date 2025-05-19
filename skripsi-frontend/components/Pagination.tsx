import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { ScreenSliderType } from '@/utils/TextWelcomeScreen';
import { SharedValue } from 'react-native-reanimated';
import { router } from 'expo-router';

type Props = {
  items: ScreenSliderType[];
  paginationIndex: number;
  scrollX: SharedValue<number>;
};

const Pagination = ({ items, paginationIndex, scrollX }: Props) => {
  return (
    <View className='w-full items-center relative'>
      <View className='flex-row justify-center align-middle h-10'>
        {items.map((_, index) => {
          return (
            <View
              className={`h-3 w-3 mx-1 rounded-full ${
                paginationIndex === index ? 'border-2 border-green-600 bg-white' : 'bg-green-600'
              }`}
              key={index}
            ></View>
          );
        })}
      </View>

      {paginationIndex === 2 && (
        <Pressable
          onPress={() => router.push('/')}
          className='absolute top-20 mt-4 px-10 py-4 bg-green-700 rounded-full'
        >
          <Text className='text-white text-sm font-medium'>NEXT</Text>
        </Pressable>
      )}
    </View>
  );
};

export default Pagination;
