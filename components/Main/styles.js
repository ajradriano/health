import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    viewContainer: {
                alignItems: 'center',
        top: 0,
        justifyContent: 'start',
        height: '100%',
        width: '100%',
        paddingTop: 60
    },
    title: {
        fontSize: 32,
        color: '#1b1a4f',
        fontWeight: 'bold',
        marginBottom: 20
    },
    subTitle: {
        fontSize: 16,
        marginHorizontal: 50,
        textAlign: 'justify',
        marginBottom: 40
    },
    references: {
        width:'85%',
        height:120,
        padding:5,
        marginBottom:20,
    },
    referenceItem: {
        color: '#000',
        fontSize:12,
        height: 35,
    }
})

export default Styles