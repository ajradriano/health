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
        backgroundColor: '#eee',
        borderRadius: 7,
        height: 40,
        padding: 10,
    },
    buttonContainer: {
        justifyContent: 'space-evenly',
        alignItems  : 'center',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        height: 32,
        width: 65,
        text: {
            color: '#eee',
            fontWeight: 'bold',
        }
    },
    confirmButton: {
        backgroundColor: '#1584d3',
    },
    clearButton: {
        backgroundColor: '#d36315',
    },
});

export default styles