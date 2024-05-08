import React from "react";
import { View, StyleSheet, Text} from "react-native";
import {MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from "expo-router";


const Descricao = () => {
    return(
        <View style={styles.container}>
            <View style={styles.corpo}>
                <Text style={styles.tittle}>N° do Inventario:</Text>
                <Text style={styles.item}> 957689 </Text>
                <Text style={styles.tittle}>Descrição:</Text>
                <Text style={styles.item}> CADEIRA GIRATÓRIA </Text>
                <Text style={styles.tittle}>Local:</Text>
                <Text style={styles.item}> SALA C13 </Text>
                <Text style={styles.tittle}>Responsável:</Text>
                <Text style={styles.item}> THIAGO </Text>
                <Text style={styles.tittle}>Data de Registro:</Text>
                <Text style={styles.item}> 05/03/2024 </Text>
            </View>

            <View style={styles.addButton}>
                <Link href="./Editar" asChild>
                    <MaterialCommunityIcons name="pencil-circle" size={60} color="red" />
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: "#ffff",
        fontSize: 16,
    },
    corpo: {
        flex: 1,
        marginTop: 50,
    },
    addButton: {
        position: "absolute",
        bottom: 20,
        right: 0,
        margin: 20,
        marginBottom: 50,
        height: 60,
    },
    tittle : {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        alignContent: 'center',
        marginLeft: 25,
        marginTop: 20,
    },
    item: {
        fontSize: 15,
        fontWeight: '500',
        color: 'lightgray',
        alignContent: 'center',
        marginLeft: 25,
        marginBottom: 20,
    },
});

export default Descricao;
