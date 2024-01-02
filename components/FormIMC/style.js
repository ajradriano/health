import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxTitle: {
        alignItems: "center",
    },
    
    textTitle: {
        color: '#1b1a4f',
        fontSize: 18,
        fontWeight: "bold",
        paddingBottom: 10
    },
    
    label: {
        marginTop: 10,
    },
    
    input: {
        backgroundColor: '#fff',
        borderRadius: 14,
        borderColor: '#cecece',
        borderWidth: 1,
        height: 40,
        padding: 5,
        marginBottom: 5,
    },

    inputError: {
        color: '#c31e1e',
        fontSize: 12
    },  

    inputContainer: {
        marginTop: 0,
        marginBottom: 20,
    },
    
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems  : 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 32,
        height: 52,
        width: '100%',
        text: {
            color: '#eee',
            fontWeight: 'bold',
            fontSize: 24
        },
        
        textBlack: {
            color: '#000',
            fontWeight: 'bold',
        }
    },
    
    confirmButton: {
        backgroundColor: '#1584d3',
    },

});

export default styles