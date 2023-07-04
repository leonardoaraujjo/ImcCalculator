import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex:1,
        backgroundColor:"#ffffff",
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop:10,
        marginTop:15
        
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop:20,
        padding:10
    },
    formLabel:{
        color:"#000000",
        fontSize:18,
        paddingLeft:20
    },
    imput:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:5,
        margin:10,
        paddingLeft:10,
        marginBottom:0
    },
    buttonCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#FF0043",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:30,
        marginBottom:0
    },
    textButtonCalculator:{
        fontSize:20,
        color:"#ffffff",
    },
    errorMenssage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20
    },
    exhibitionResultImc:{
        width:"100%",
        height:"50%"
    },
    resultImcItem:{
        fontSize:30,
        color:"red",
        height:50,
        width:"100%",
        paddingRight:20,
        marginTop:0
    },
    textResultItemList:{
        color:"red",
        fontSize:18
    }
})

export default styles
