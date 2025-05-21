import { Stack } from 'expo-router';
import '../global.css';
import { useEffect, useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import * as ExpoSplashScreen from 'expo-splash-screen';

export default function RootLayout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cegah splash screen hilang otomatis
    const prepare = async () => {
      try {
        await ExpoSplashScreen.preventAutoHideAsync();
        // Simulasi loading, bisa ganti dengan load font, data, dll
        await new Promise((resolve) => setTimeout(resolve, 4000));
      } catch (e) {
        console.warn(e);
      } finally {
        setLoading(false);
      }
    };

    prepare();
  }, []);

  useEffect(() => {
    if (!loading) {
      // Sembunyikan splash screen setelah loading selesai
      ExpoSplashScreen.hideAsync();
    }
  }, [loading]);

  if (loading) {
    return <SplashScreen />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
