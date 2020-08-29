import React from 'react'
import {TouchableHighlight, StyleSheet, Text} from 'react-native'

const Button = (props) => {
    return (
        <TouchableHighlight style={[styles.button, props.primary && styles.primary, props.danger && styles.danger, props.success && styles.success]} activeOpacity={0.1} underlayColor="#ddd" onPress={props.onPress}>
            <Text style={styles.btnText}>{props.value}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 25,
        paddingVertical: 7,
        fontSize: 18,
        fontWeight: '500',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f14c76',
        borderRadius: 3,
        color: '#080e2c',
        shadowColor: '#000',
        shadowOpacity: 1.0,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 3},
        elevation: 4,
        marginVertical: 5,
    },
    primary: {
        backgroundColor: '#44d6e9',
        color: '#080e2c',
    },
    danger: {
        backgroundColor: '#c61e2d',
    },
    success: {
        backgroundColor: 'green'
    },
    btnText: {
        color: '#080e2c',
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default Button