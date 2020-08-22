import React from 'react'
import Card from '../components/UIElements/Card'
import { ScrollView, View, StyleSheet, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

const Home = () => {
    const Stack = createStackNavigator()
    return (
        <ScrollView style={{ marginTop: StatusBar.currentHeight, backgroundColor: '#f1efd8' }} showsVerticalScrollIndicator={false}>
            <View style={styles.home}>
                <Card />
                <Card />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    home: {
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1
    }
})
export default Home