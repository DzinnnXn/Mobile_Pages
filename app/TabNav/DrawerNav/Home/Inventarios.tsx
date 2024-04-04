import { Tabs } from "expo-router";

export default function Layout(){
    return(
        <Tabs>
            <Tabs.Screen name="Scanner"/>
            <Tabs.Screen name="DrawerNav"/>
        </Tabs>
    )
}