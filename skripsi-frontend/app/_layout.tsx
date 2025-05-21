import { Stack } from 'expo-router';
import '../global.css';
import { useEffect, useState } from 'react';
import SplashScreen from '@/components/SplashScreen';

export default function RootLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
