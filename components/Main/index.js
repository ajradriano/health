import React from "react";
import { Text, View, FlatList, ScrollView, VirtualizedList } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import FormIMC from "../FormIMC";
import Styles from "./styles";

export default function Main() {
    const references = [
        {key: 'IMC abaixo de 18,5: adulto com baixo peso.'},
        {key: 'IMC maior ou igual a 18,5 e menor que 25,0: adulto com peso adequado (eutrófico).'},
        {key: 'IMC maior ou igual a 25,0 e menor que 30,0: adulto com sobrepeso.'},
        {key: 'IMC maior ou igual a 30,0: adulto com obesidade.'},
    ]
    return (
        <LinearGradient       
            colors={['rgba(218,215,205,1)', 'rgba(81,148,181,1)']}
            style={Styles.gradientBackground}>
            <View style={Styles.viewContainer}>
                <Text style={Styles.title}>Bem-Vindo ao Health</Text>
                <Text style={Styles.subTitle}>Esta aplicação ajuda você a calcular seu Indice de Massa Corporal (IMC)</Text>
                <FormIMC />
                <Text>Referencia:</Text>
                <FlatList 
                    style={Styles.references} 
                    data={references} 
                    renderItem={({item})=><Text style={Styles.referenceItem}>{item.key}</Text>}/>
            </View>
        </LinearGradient>
    )
}
