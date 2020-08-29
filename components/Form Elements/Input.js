import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native'

const Input = (props) => {
    const [ isFocused, setIsFocused ] = useState(false)

    const handleFocus = () => {
        setIsFocused(prevMode => !prevMode)
    }

    return (
        <TextInput style={[styles.input, isFocused ? styles.inputFocused : null]} onFocus={handleFocus} onBlur={handleFocus} onChangeText={props.onChange} value={props.value} name={props.name} />
    );
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 7,
        paddingVertical: 5,
        borderRadius: 5,
        borderColor: '#777f8a',
        borderWidth: 1,
        width: '100%',
        marginVertical: 5
    },
    inputFocused: {
        borderWidth: 3,
        borderColor: '#e0e0e0'
    }
})

export default Input;
