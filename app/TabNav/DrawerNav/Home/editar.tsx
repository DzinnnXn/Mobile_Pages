import { View } from "react-native";
import Input2 from "@comp/input2";
import Nav from "@comp/nav";
import { AntDesign } from '@expo/vector-icons';
import Footer from "@comp/footer";

export default function Editar(){
    return(
        <>
        <View>

                <Input2 nome="N° Inventário" />
                <Input2 nome="Descrição" />
                <Input2 nome="Local" />
                <Input2 nome="Responsável" />
                <Input2 nome="Data de registro" />

        </View>
        <Footer cor='#fff' corele="#000" />
        
        </>
    )
}
