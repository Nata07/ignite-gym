import { Center, Image, VStack, Text, Heading, ScrollView } from 'native-base'
import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function SignUp() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1} bg="gray.700" px={4} pb={16}>
        <Image
          source={BackgroundImg}
          alt="Pessoas treinando"
          resizeMode="contain"
          position="absolute"
        />

        <Center my={24}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Treine sua mente e seu corpo
          </Text>
        </Center>

        <Center mt={16}>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>
          <Input 
            placeholder='Nome completo'
          />
          <Input 
            placeholder='Email'
            keyboardType='email-address'
            autoCapitalize='none'
          />
          <Input 
            placeholder='Senha'
            secureTextEntry
          />
          <Button title='Criar conta' />
        </Center>

        <Center mt={20}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Já possui conta?
          </Text>

          <Button title='Fazer Login' variant="outline" />
        </Center>
      </VStack>
    </ScrollView>
  )
}