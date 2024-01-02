import React from "react";
import { Text, Touchable, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./styles";

export default function Main({navigation}) {
    return (
        <LinearGradient       
            colors={['rgba(218,215,205,1)', 'rgba(81,148,181,1)']}
            style={styles.gradientBackground}>
            <View style={styles.viewContainer}>
                <Text style={styles.title}>Bem-Vindo ao Health</Text>
                <Text style={styles.subTitle}>
                    Esta aplicação ajuda você a calcular seu Indice de Massa Corporal (IMC)
                </Text>
                <TouchableOpacity onPress={()=> {navigation.navigate('Índice de Massa Corporal', {screen: 'FormIMC'})}}>
                    Índice de Massa Coporal
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> {navigation.navigate('Metabolismo Basal')}}>
                    Metabolismo Basal
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}
