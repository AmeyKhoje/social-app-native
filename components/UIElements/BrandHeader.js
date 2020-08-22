import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const BrandHeader = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.brandText}>
                Social App
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        width: '100%',
        height: 40,
        justifyContent: 'center',
        backgroundColor: '#4b6f61',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9
    },
    brandText: {
        fontSize: 22,
        textAlign: 'center'
    }
})

export default BrandHeader