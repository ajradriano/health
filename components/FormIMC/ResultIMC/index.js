import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

export default function ResultIMC(props) {
    /**
     * Valores de IMC abaixo de 18,5: adulto com baixo peso.
     * Valores de IMC maior ou igual a 18,5 e menor que 25,0: adulto com peso adequado (eutrófico).
     * Valores de IMC maior ou igual a 25,0 e menor que 30,0: adulto com sobrepeso.
     * Valores de IMC maior ou igual a 30,0: adulto com obesidade.
     * @returns {String}
     */
    function calculateImcDegree() {
        const value = props.result
        let color = '#000'
        let opinion = ''
        if (value >= 30) {
            color = '#c31e1e'
            opinion = '(Obesidade)'
        }
        if (value < 30 && value >= 25) {
            color = '#ce6708'
            opinion = '(Sobrepeso)'
        }
        if (value < 25 && value >= 18.5) {
            color = '#00680c'
            opinion = '(Peso Adequado)'
        }
        if (value < 18.5 && value != null) {
            color = '#c602c2'
            opinion = '(Baixo peso)'
        }
        return {color: color, opinion: opinion}
    }

    return (
        <View style={styles.resultContainer}>
            <Text style={styles.messageText}>{props.message}</Text>
            <Text style={[{ fontWeight: 'bold', fontSize:24, color: calculateImcDegree().color }]}>{props.result} {calculateImcDegree().opinion}</Text>
        </View>
    )
}