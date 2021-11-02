import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

export default function SignUp(){
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>SignUp</Text>
            <View style={styles.form}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                style={styles.inputField}
                placeholder='Enter Your Name'
                ></TextInput>
                <View style={styles.divider}></View>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                placeholder='Enter Your Email'
                style={styles.inputField}
                />
                <View style={styles.divider}></View>
                <Text  style={styles.label}>Password</Text>
                <TextInput
                placeholder='Enter Your Password'
                style={styles.inputField}
                />
                <View style={styles.divider}></View>
                <Text  style={styles.label}>Confirm Password</Text> 
                <TextInput
                placeholder='Enter Password Again'
                style={styles.inputField}
                />

            </View>










        </ScrollView>


    );



}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 60,
        paddingHorizontal: 30,
    },
    title: {
        fontWeight: '500',
        fontSize: 20,
        letterSpacing: 0.1,
        color: '#2E2E2E',
    },
    inputField: {
        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#BFBFBF',
        paddingVertical: 6,
    },
    label: {
        fontSize: 16,
        lineHeight: 18,
        color: '#666666',
        marginBottom: 3,
    },
    form: {
        marginVertical: 35,
    },
})