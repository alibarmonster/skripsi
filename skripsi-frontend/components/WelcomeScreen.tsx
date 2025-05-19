import { FlatList, View, ViewToken } from 'react-native';
import React, { useRef, useState } from 'react';
import { ScreenSlider } from '@/utils/TextWelcomeScreen';
import WelcomeScreenItem from './WelcomeScreenItem';
import Pagination from './Pagination';
import { useSharedValue } from 'react-native-reanimated';

const WelcomeScreen = () => {
  const scrollX = useSharedValue(0);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems[0].index !== undefined && viewableItems[0].index !== null) {
      setPaginationIndex(viewableItems[0].index);
    }
  };
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };
  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }]);
  return (
    <View>
      <FlatList
        data={ScreenSlider}
        renderItem={({ item, index }) => {
          return (
            <WelcomeScreenItem
              item={item}
              index={index}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <Pagination
        items={ScreenSlider}
        scrollX={scrollX}
        paginationIndex={paginationIndex}
      />
    </View>
  );
};

export default WelcomeScreen;
