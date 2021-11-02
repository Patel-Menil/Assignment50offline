import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView,Button,TouchableOpacity } from 'react-native';

export default function LoginButton() {
return(
    <View>
       <TouchableOpacity style={styles.btndesign}><Text style={styles.tdesign}>Login</Text></TouchableOpacity>
    </View>



);


}
const styles=StyleSheet.create({
    btndesign:{
        backgroundColor:'#2E4DF9',
        borderRadius:8,
        width:200,
        padding:10

    },
    tdesign:{
        justifyContent:'center',
        textAlign:'center',
    }
})