import {Drawer} from 'expo-router/drawer'

export default function layout() {
    return(
        <Drawer>
            <Drawer.Screen name = "Home" />
        </Drawer>
    )
}