import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, TextInputProps } from 'react-native';
import { useColor } from "../temas/Temas";

interface InputProps extends TextInputProps {
    title: string,
}

export default function Input({ title, ...props }: InputProps) {
    const cores = useColor();


    const [hover, setHover] = useState("F5F5F5");
    const styles = StyleSheet.create({
        container: {
            margin: 8,
            
        },
        input: {
            height: 38,
            width: 350,
            borderRadius: 5,
            padding: 10,
            borderWidth: 1,
            borderColor: hover,
        },
        textInput: {
            fontSize: 15,
            fontWeight: 'bold',
            margin: 5,
        },
    });

    return (
        <View style={styles.container}>
            <Text style={[styles.textInput, {color: cores.textColorPrimaryVariant}]}>{title}</Text>
            <TextInput {...props} style={[styles.input, {color: cores.bgPrimaryVariant}]} placeholderTextColor="#808080" onFocus={() => {setHover("#F39200");}} onBlur={() => {setHover("#f5f5f5");}} />
        </View>
    );
}
