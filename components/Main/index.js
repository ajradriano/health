import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import FormIMC from "../FormIMC";
import Styles from "./styles";

export default function Main() {
    return (
        <LinearGradient       
            colors={['rgba(218,215,205,1)', 'rgba(81,148,181,1)']}
            style={Styles.gradientBackground}>
            <View style={Styles.viewContainer}>
                <Text style={Styles.title}>Bem-Vindo ao Health</Text>
                <Text style={Styles.subTitle}>Esta aplicação ajuda você a calcular seu Indice de Massa Corporal (IMC)</Text>
                <FormIMC />

            </View>
        </LinearGradient>
    )
}
