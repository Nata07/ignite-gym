import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';
import { SignUp } from '@screens/SignUp';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { Loading } from './src/components/Loading';
import { SignIn } from './src/screens/SignIn';
import { THEME } from './src/theme';


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        style="light" 
        backgroundColor='transparent' 
        translucent 
      />
      {fontsLoaded ? <SignUp /> : <Loading />}
    </NativeBaseProvider>
  );
}