import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { Slot, Stack, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { AuthContextProvider, useAuth } from '../context/authContext';
import { Text, View } from 'react-native';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return <Text>Loadning..</Text>;
  }

  

  return (
      // <SafeAreaProvider>
      //   <Stack/>
    // </SafeAreaProvider>
    

      <Stack/>

  );
}

function Layout() {
  const value = useAuth()
  const segments = useSegments()

  
  // useEffect(() => {

  //   if (typeof authenticated === 'undefined') return;
  //   const inApp = segments[0] == '(app)';
  //   if(authenticated && !inApp){
  //     segments.push('(app)')
  //   }
    
  // }, [authenticated])
  
  return <Slot/>
}
