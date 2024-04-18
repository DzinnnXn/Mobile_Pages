import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Header from "@comp/header";
import { useColorScheme } from "react-native";
import Input from "@comp/input";
import { Link } from 'expo-router';
import LinkBtn from "@comp/button";
import { useColor } from "../../temas/Temas";


export default function Login(){

    const cores = useColor()

    const styles = StyleSheet.create({
        contaienr: {
            flex: 1,
        },
    })


    return(
        <>
        <View>
        <Header color={cores.bgPrimary} texto="Login"/>
        </View>

        <View style={styles.container}>
        <Text style={styles.texto} >Faça Login Para Acessar O Sistema!</Text>
        <Input nome="Email:" placeholder="Insira o seu email:"/>
        <Input nome="Senha:" placeholder="Insira a sua senha::"/>
        <LinkBtn title="Login" href="TabNav" />

        <View style={styles.container2}>
        <Link href="telasIniciais/cadastro" asChild>
        <TouchableOpacity>
        <Text style={styles.texto2}>Cadastre-se</Text>
        </TouchableOpacity>
        </Link>

        <Link href="telasIniciais/RecuperarSenha" asChild>
            <TouchableOpacity>
            <Text style={styles.texto2}>Esqueceu a senha?</Text>
            </TouchableOpacity>
        </Link>

        </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        marginTop: 50,
        gap: 20,
        
    },

    texto:{

        marginBottom: 30,
        fontSize: 18,
        fontWeight: '500',

    },

    container2:{
        flexDirection: 'row',
        gap: 110,
    },

    texto2:{
        color: '#011E83',
        fontSize: 15,
    }
})
