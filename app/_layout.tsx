import { View, Text} from 'react-native'
import { Stack } from 'expo-router'

export default function layout() {
    return (
        <Stack>
            <Stack.Screen name = "TabNav" options = {{
                headerShown: false
            }}/>
            <Stack.Screen name = "TelasIniciais/RecuperarSenha" options = {{ 
                headerTitle: "",
                headerTransparent: true,
                headerTintColor: "#fff"
            }} />
            <Stack.Screen name = "TelasIniciais/Cadastro" options = {{ 
                headerTitle: "",
                headerTransparent: true,
                headerTintColor: "#fff"
            }} />
        </Stack>
    )
}