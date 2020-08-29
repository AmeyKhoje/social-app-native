import React, {useState} from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import { AppLoading } from 'expo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Font from 'expo-font'

const loadFont = () => {
    return Font.loadAsync({
      'poppins-medium': require('../../assets/font/Poppins-Medium.ttf'),
      'poppins-bold': require('../../assets/font/Poppins-Bold.ttf'),
      'poppins-semibold': require('../../assets/font/Poppins-SemiBold.ttf'),
      'poppins-light': require('../../assets/font/Poppins-Light.ttf')
    })
}
  

const Card = (props) => {
    const [fontLoaded, setFontLoaded] = useState(false)
    let views = 10;
    if(!fontLoaded) {
        return (
          <AppLoading startAsync={loadFont} onFinish={() => setFontLoaded(true)} />
        );
      }
    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.card}>
                <View style={{width: '100%', paddingHorizontal: 5, paddingVertical: 12, justifyContent: 'space-between', flex: 1, flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row',alignItems: 'center'  }}>
                        <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCosNE8U8r4l6IY0NHJ7icaHynM8gFLQimNg&usqp=CAU"}} style={{width: 25, height: 25, borderRadius: 100, marginRight: 5}} />
                        <Text style={{fontSize: 17,  fontFamily: 'poppins-semibold', margin: 0}}>Jane Frost</Text>
                    </View>
                    <TouchableOpacity style={{ padding: 5, borderRadius: 100 }} touchSoundDisabled={false} activeOpacity={0.5}>
                        <MaterialCommunityIcons name="dots-vertical" color="#000" size={20} />
                    </TouchableOpacity>
                </View>
                <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCosNE8U8r4l6IY0NHJ7icaHynM8gFLQimNg&usqp=CAU"}} style={styles.image} />
                <View style={styles.cardCont}>
                    <Text style={styles.cardHead}>
                        {props.title}
                    </Text>
                    <Text style={styles.cardText}>
                        {props.desc}
                    </Text>
                </View>
                <View style={{ paddingHorizontal: 10, flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, marginRight: 7, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20 }}>
                        <MaterialCommunityIcons name="heart-outline" color="#080e2c" size={24} />
                        <Text style={{ fontSize: 16, fontFamily: 'poppins-semibold', marginLeft: 5, marginBottom: -2, color: '#080e2c' }}>Like</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20 }}>
                        <MaterialCommunityIcons name="send" color="#080e2c" size={24} style={{ transform: [{ rotate: "-10deg" }], marginTop: -2 }} />
                        <Text style={{ fontSize: 16, fontFamily: 'poppins-semibold', marginLeft: 5, marginBottom: -2, color: '#080e2c' }}>Send</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.newEl}>
                    <Text style={{color: '#080e2c', fontFamily: 'poppins-semibold', margin: 0, backgroundColor: 'transparent'}}>Likes: {views}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        marginHorizontal: 'auto',
        position: 'relative',
        marginBottom: 20,
        // position: 'relative',
        // backgroundColor: '#d1e0db',
    },
    image: {
        width: '100%',
        height: 220,
    },
    cardHead: {
        fontSize: 24,
        color: '#080e2c',
        fontFamily: 'poppins-semibold'
    },
    cardCont: {
        padding: 10,
        marginBottom: 2
    },
    cardText: {
        fontSize: 16,
        // lineHeight: 1,
        marginBottom: 2,
        fontFamily: 'poppins-medium',
        color: '#080e2c',
    },
    newEl: {
        padding: 10,
        position: 'absolute',
        zIndex: 9,
        top: 250,
        right: 20,
        width: 'auto',
        height: 'auto',
        backgroundColor: '#d1e0db',
        borderRadius: 5,
        elevation: 3,
        shadowOpacity: 0.7,
        shadowColor: 'rgba(0, 100, 0, 0.2)',
        shadowRadius: 10,
        fontFamily: 'poppins-medium',

    
    }
})

export default Card