import React, {useState} from 'react'
import {ScrollView, View, Image, Text, StyleSheet, StatusBar, Dimensions} from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import { AppLoading } from 'expo';
import * as Font from 'expo-font'

const loadFont = () => {
    return Font.loadAsync({
        'poppins-medium': require('../assets/font/Poppins-Medium.ttf'),
        'poppins-bold': require('../assets/font/Poppins-Bold.ttf'),
        'poppins-semibold': require('../assets/font/Poppins-SemiBold.ttf'),
        'poppins-light': require('../assets/font/Poppins-Light.ttf')
    })
}
let screenHeight = Dimensions.get('window').height
const Profile = () => {
    const [fontLoaded, setFontLoaded] = useState(false)
    
    if(!fontLoaded) {
        return (
            <AppLoading startAsync={loadFont} onFinish={() => setFontLoaded(true)} />
        );
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{backgroundColor: '#f1efd8', marginTop: StatusBar.currentHeight, height: screenHeight}}>
                <View>
                    <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIcUHqpf88Rq-eW8LwxaZOLc2ESPDBnklexw&usqp=CAU' }} style={{ height: 300, width: '100%' }} />
                </View>
                <View style={styles.absCont}>
                    <View style={styles.imageCont}>
                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRN1TxWGPfaC1jI69SN_CQoGz9rFgX1rRHhDQ&usqp=CAU' }} style={styles.image} />
                    </View>
                    <View style={styles.profInfo}>
                        <Text style={styles.name}>
                            Jane Frost
                        </Text>
                        <Text style={styles.username}>
                            jane_123
                        </Text>
                    </View>
                    <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <View style={styles.countCont}>
                                <Text style={styles.postCount}>
                                    20
                                </Text>
                                <Text style={styles.postCountHead}>
                                    Posts
                                </Text>
                            </View>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <View style={styles.countCont}>
                                <Text style={styles.postCount}>
                                    80
                                </Text>
                                <Text style={styles.postCountHead}>
                                    Followers
                                </Text>
                            </View>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <View style={styles.countCont}>
                                <Text style={styles.postCount}>
                                    100
                                </Text>
                                <Text style={styles.postCountHead}>
                                    Following
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{paddingHorizontal: 15, flex: 1}}>
                    <Text style={{fontSize: 18, color: '#26282a', marginTop: 275, fontFamily: 'poppins-semibold'}}>
                        Popular Posts
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    
    imageCont: {
        width: '100%',
        textAlign: 'center',
        // justifyContent: 'center',
        alignItems: 'center',

        height: 200,
        
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
        // marginHorizontal: 'auto',
        // marginTop:
    },
    profInfo: {
        padding: 10
    },
    name: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 20,
        fontFamily: 'poppins-semibold',
        // lineHeight: 1,
        justifyContent: 'center',
        color: '#000',
        lineHeight: 21
    },
    username: {
        fontSize: 15,
        color: 'rgba(0, 0, 0, 0.6)',
        textAlign: 'center',
        fontFamily: 'poppins-medium'
    },
    postCount: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'poppins-semibold',
        marginBottom: 0,
        color: '#fff',
        lineHeight: 20
        // fontWeight: '700'
    },
    postCountHead: {
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'poppins-semibold',
        color: '#fff'
        // fontWeight: '700'
    },
    countCont: {
        marginTop: 15,
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#4b6f61',
        borderRadius: 10,
        width: 90,
        marginHorizontal: 'auto',
        shadowOpacity: 0.7,
        shadowColor: '#4b6f61',
        shadowRadius: 10,
        elevation: 5
    },
    absCont: {
        position: 'absolute',
        left: 0,
        right: 0,
        marginHorizontal: 15,
        backgroundColor: '#aec7bc',
        top: 150,
        padding: 15,
        borderRadius: 20,
        elevation: 5
    }
})

export default Profile