import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import {  Stack, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { AuthContextProvider, useAuth } from '../context/authContext';
import { Text,  } from 'react-native';


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
    <SafeAreaProvider>
      <AuthContextProvider>
        <Layout/>
      </AuthContextProvider>
    </SafeAreaProvider>

  );
}

function Layout() {
  const {isAuthenticated} = useAuth()
  const segments = useSegments()

  const router=useRouter()

  
  useEffect(() => {

    if (typeof isAuthenticated === 'undefined') return;
    const inApp = segments[0] == '(app)';
    if(isAuthenticated && !inApp){
      router.replace('home')
    }else if(!isAuthenticated){
      router.replace('login')
    }
    
  }, [isAuthenticated])
  
  return <Stack screenOptions={{headerShown:false}}/>
}
