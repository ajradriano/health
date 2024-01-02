import React, { useState, useEffect } from "react";
import { TextInput, Text, View, Keyboard, TouchableOpacity, Vibration, Pressable } from "react-native";
import ResultIMC from "./ResultIMC";
import styles from "./style";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FormIMC() {

    const defaultMessage = 'Preencha os campos.'
    const [height,      setHeight]      = useState(null);
    const [weight,      setWeight]      = useState(null);
    const [message,     setMessage]     = useState(defaultMessage);
    const [imc,         setIMC]         = useState(null);
    const [errorHeight, setErrorHeight] = useState(null);
    const [errorWeight, setErrorWeight] = useState(null);

    /**
     * Verifica o estado da variavel imc redefinindo a mensagem quando o calculo é feito.
     * @returns {void}
     */
    useEffect(() => {
        if (imc !== null) {
            setMessage(`Seu IMC é de:`);
        }
    }, [imc]);

    /**
     * A funcao calcular vai converter o peso e a altura para evitar erros no calculo.
     * Para isso ela remove '.' e ',' dos valores passados e faz o calculo,
     * definindo assim a constante imc, pelo setIMC()
     * Quando um peso é informado com decimal (123,321), o replace remove todo
     * valor após a primeira ocorrencia de '.' e ','.
     * @returns {void}
     */
    function calculate() {
        let result = weight.replace(/[,.].*/, '') / (Math.pow((height.replace(/[,.]/g, '') / 100), 2));
        setIMC(result.toFixed(2));
    }

    /** 
    * Funcao que valida se os campos estão preenchidoe e define a mensagem de erro para os campos em branco.
    * Tambem invoca funcao para vibrar o dispositivo quando há um campo vazio.
    * @return {void}
    */
    function validate() {
        if (weight == null || height == null) {
            height == null ? setErrorHeight('Campo Obriatório.') : setErrorHeight(null)
            weight == null ? setErrorWeight('Campo Obriatório.') : setErrorWeight(null)
            setMessage("Valores inválidos para os campos.");
            Vibration.vibrate() //  Vibra o dispositivo por 1 segundo.
        } else {
            setErrorHeight(null)
            setErrorWeight(null)
            Keyboard.dismiss()
            calculate();
        }
    }

    /** 
    * Funcao que define todos os campos como null e define a mensagem padrão para a variavel message.
    * @return {void}
    */
    function clear() {
        setHeight(null)
        setWeight(null)
        setIMC(null)
        setMessage(defaultMessage)
    }

    return (
        <Pressable onPress={Keyboard.dismiss}>
            <View>
                <Text style={[styles.boxTitle, styles.textTitle]}>Calculo de Índice de Massa Corporal (IMC)</Text>
                
                <View style={styles.inputContainer}>

                    <Text style={styles.label}><Icon name='human-male-height' size={16} color='#000' /> Altura</Text>
                    <Text style={styles.inputError}>{errorHeight}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="cm"
                        keyboardType="numeric"
                        value={height}
                        onChangeText={setHeight}
                    />

                    <Text style={styles.label}><Icon name='weight-kilogram' size={16} color='#000' /> Peso</Text>
                    <Text style={styles.inputError}>{errorWeight}</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Kg"
                        keyboardType="numeric"
                        value={weight}
                        onChangeText={setWeight}
                    />

                </View>

                <ResultIMC message={message} result={imc}/>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, styles.confirmButton]} title="Calcular" onPress={validate}>
                        <Text style={styles.button.text}>Calcular</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button]} title="Limpar" onPress={clear}>
                        <Text style={styles.button.textBlack}>Limpar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Pressable>
    )
}
