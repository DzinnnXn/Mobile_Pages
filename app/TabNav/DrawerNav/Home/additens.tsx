import { StyleSheet, Text, View, ScrollView} from "react-native";
import Nav from "@comp/nav";
import Input2 from "@comp/input2";
import { AntDesign } from '@expo/vector-icons';
import Footer from "@comp/footer";

export default function Add() {
    return (
        <>

            <ScrollView style={style.container}>
                <Input2 nome="N° Inventário" />
                <Input2 nome="Descrição" />
                <Input2 nome="Local" />
                <Input2 nome="Responsável" />
                <Input2 nome="Data de registro" />
            </ScrollView>

            <Footer cor={'#ffffff'} corele="#000"/>
        </>
    );
}

const style = StyleSheet.create({
    container:{
        marginTop: 50,
    }
})
