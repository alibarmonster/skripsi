import WelcomeScreen from '@/components/WelcomeScreen';
import { SafeAreaView, Text, View } from 'react-native';

const OnboardingScreen = () => {
  return (
    <SafeAreaView className='flex-1 justify-center align-middle bg-custom-screen'>
      {/* <View className='align-middle justify-center'>
        <View className='flex-row justify-between mb-20 '></View>
        <Text>Asal Ayam Terverifikasi</Text>
        <Text>
          Kami melacak ayam dari peternakan terpercaya yang memenuhi standar kebersihan dan
          kesejahteraan hewan.
        </Text>
      </View> */}
      <WelcomeScreen />
    </SafeAreaView>
  );
};

export default OnboardingScreen;
