import React, {useState, useEffect} from 'react'
import Card from '../components/UIElements/Card'
import { ScrollView, View, StyleSheet, StatusBar, SafeAreaView, Dimensions } from 'react-native'
// import { createStackNavigator } from '@react-navigation/stack';

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getData = async() => {
            await fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(resp => resp.json())
                    .then(resp => {
                        // alert(resp)
                        setPosts(resp)
                    })

            // setPosts(finalPosts)
        }
        getData()
    }, [])
    // const Stack = createStackNavigator()
    return (
        <SafeAreaView>
            <ScrollView style={{ backgroundColor: '#ecf4f1', minHeight: Dimensions.get('window').height - 70, paddingBottom: 30 }} showsVerticalScrollIndicator={false}>
                <View style={styles.home}>
                    <Card title="Hello There Amey" desc="This is trial of app with rouoting" />
                    <Card title="Hello There Amey" desc="This is trial of app with rouoting" />
                    <Card title="Hello There Amey" desc="This is trial of app with rouoting" />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    home: {
        // paddingTop: 20,
        paddingBottom: 20,
        flex: 1
    }
})
export default Home