import React, { useState, useEffect } from "react";
import { TextInput, Text, View, Pressable  } from "react-native";
import ResultIMC from "./ResultIMC";
import styles from "./style";

export default function FormIMC() {

    const defaultMessage = 'Preencha os campos.'
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [message, setMessage] = useState(defaultMessage);
    const [imc, setIMC] = useState(null);

    useEffect(() => {
        if (imc !== null) {
            setMessage(`Seu IMC é de:`);
        }
    }, [imc]);

    function calculate() {
        let result = weight / (Math.pow((height / 100), 2));
        setIMC(result.toFixed(2));
    }

    function validate() {
        if (weight == null || height == null) {
            setMessage("Valores inválidos para os campos.");
        } else {
            calculate();
        }
    }

    function clear() {
        setHeight(null)
        setWeight(null)
        setIMC(null)
        setMessage(defaultMessage)
    }

    return (
        <View>
            <View>
                <Text style={[styles.boxTitle, styles.textTitle]}>Calculo de Índice de Massa Corporal (IMC)</Text>
                <Text style={styles.label}>Altura</Text>
                <TextInput
                    style={styles.input}
                    placeholder="cm"
                    keyboardType="numeric"
                    value={height}
                    onChangeText={setHeight}
                />
                <Text style={styles.label}>Peso</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Kg"
                    keyboardType="numeric"
                    value={weight}
                    onChangeText={setWeight}
                />
                <View style={styles.buttonContainer}>
                    <Pressable style={[styles.button, styles.confirmButton]} title="Calcular" onPress={validate}>
                        <Text style={styles.button.text}>Calcular</Text>
                    </Pressable>
                    <Pressable style={[styles.button, styles.clearButton]} title="Limpar" onPress={clear}>
                        <Text style={styles.button.text}>Limpar</Text>
                    </Pressable>
                </View>
            </View>
            <ResultIMC message={message} result={imc}/>
        </View>
    )
}
