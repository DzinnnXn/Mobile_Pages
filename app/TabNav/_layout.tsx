import { Tabs } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function layout(){
    return(
        <Tabs screenOptions={{tabBarShowLabel: false}}>
            <Tabs.Screen name="scanner" options={{
                headerShown: false,
                tabBarIcon: ({color,size}) => (
                    <AntDesign name="camera" size={size} color={color} />
                )
            }} />


            <Tabs.Screen name="DrawerNav" options={{ 
                headerShown: false,
                tabBarStyle:{
                    backgroundColor: "#ff0000"
                },
                tabBarIcon: ({color,size}) => (
                    <MaterialCommunityIcons name="format-list-bulleted" size={size} color={color} />
                ),
                tabBarInactiveTintColor: "#fff"
            }}/>
        </Tabs>
    )
}
