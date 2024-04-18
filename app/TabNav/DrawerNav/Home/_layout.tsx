import { Stack } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";
export default function Layout(){
    return(
        <Stack>
            <Stack.Screen name="inventarios" options={{
                headerLeft: () =>( <DrawerToggleButton/> 
                ),
                headerSearchBarOptions:{
                    placeholder:"Pesquisar"
                }
            }}/>
        </Stack>
    )
}
