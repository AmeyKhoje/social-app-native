import React, {useState} from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from '@expo-google-fonts/poppins'
import { AppLoading } from 'expo';
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
                <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCosNE8U8r4l6IY0NHJ7icaHynM8gFLQimNg&usqp=CAU"}} style={styles.image} />
                <View style={styles.cardCont}>
                    <Text style={styles.cardHead}>
                        Card Head
                    </Text>
                    <Text style={styles.cardText}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, deleniti sapiente. Consectetur molestias odit et at magnam minima. Itaque suscipit perspiciatis voluptatibus hic soluta quis asperiores maiores quasi sunt dignissimos.
                    </Text>
                </View>
                <View style={styles.newEl}>
                    <Text style={{color: '#fff', fontFamily: 'poppins-medium', margin: 0}}>Views: {views}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '95%',
        marginHorizontal: 'auto',
        position: 'relative',
        marginBottom: 20,
        // position: 'relative',
        backgroundColor: '#aec7bc',
        elevation: 5,
        shadowColor: '#26282a',
        shadowOpacity: 1
    },
    image: {
        width: '100%',
        height: 220,
    },
    cardHead: {
        fontSize: 24,
        color: '#26282a',
        fontFamily: 'poppins-semibold'
    },
    cardCont: {
        padding: 10,
        marginBottom: 7
    },
    cardText: {
        fontSize: 16,
        // lineHeight: 1,
        marginBottom: 5,
        fontFamily: 'poppins-medium',
        color: '#26282a',
    },
    newEl: {
        padding: 10,
        position: 'absolute',
        zIndex: 9,
        top: 200,
        right: 20,
        width: 'auto',
        height: 'auto',
        backgroundColor: '#4b6f61',
        borderRadius: 10,
        elevation: 7,
        shadowOpacity: 0.7,
        shadowColor: 'rgba(0, 100, 0, 0.2)',
        shadowRadius: 10,
        fontFamily: 'poppins-medium'
    
    }
})

export default Card