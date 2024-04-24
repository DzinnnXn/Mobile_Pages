import { Stack } from "expo-router";

export default function layout() {
  return (
    <Stack>

      <Stack.Screen name="index" options={{
        headerShown: false, 
        statusBarColor: "black" }} />

      <Stack.Screen name="TelasIniciais/RecuperarSenha" options={{
        headerTitle: "" ,
        statusBarColor: "#011E83",
        headerTintColor: "#fff", 
        headerTransparent: true }} />

      <Stack.Screen name="TelasIniciais/Cadastro" options={{
        headerTitle: "" , 
        statusBarColor: "red",
        headerTintColor: "#fff",
        headerTransparent: true }} />

    <Stack.Screen name="TelasIniciais/Login" options={{
        headerTitle: "" , 
        statusBarColor: "red",
        headerTintColor: "#fff",
        headerTransparent: true }} />

      <Stack.Screen name="TabNav" options={{
        headerShown: false, 
      }} />
    </Stack>
    
  )
}
