import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native'

const Input = (props) => {
    const [ isFocused, setIsFocused ] = useState(false)

    const handleFocus = () => {
        setIsFocused(prevMode => !prevMode)
    }

    return (
        <TextInput style={[styles.input, isFocused ? styles.inputFocused : null]} onFocus={handleFocus} onBlur={handleFocus} onChange={props.onChange} />
    );
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 7,
        paddingVertical: 5,
        borderRadius: 5,
        borderColor: '#26282a',
        borderWidth: 2,
        width: '100%',
        marginVertical: 5
    },
    inputFocused: {
        borderWidth: 3,
        borderColor: '#000999'
    }
})

export default Input;
