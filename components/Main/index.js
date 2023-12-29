import React from "react";
import { Text, View, StyleSheet } from "react-native";
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
                <Text style={Styles.subTitle}>
                    Referencia:
                    <ul>
                        <li>Valores de IMC abaixo de 18,5: adulto com baixo peso.</li>
                        <li>Valores de IMC maior ou igual a 18,5 e menor que 25,0: adulto com peso adequado (eutrófico).</li>
                        <li>Valores de IMC maior ou igual a 25,0 e menor que 30,0: adulto com sobrepeso.</li>
                        <li>Valores de IMC maior ou igual a 30,0: adulto com obesidade.</li>
                    </ul>
                </Text>
                <FormIMC />
            </View>
        </LinearGradient>
    )
}
