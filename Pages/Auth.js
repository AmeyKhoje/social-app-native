import React, {useState} from 'react'
import Button from '../components/Form Elements/Button'
import { ScrollView, StatusBar, View, StyleSheet, Text, Dimensions } from 'react-native'
import Input from '../components/Form Elements/Input'
import {LinearGradient} from 'expo-linear-gradient'

const Auth = ({ navigation }) => {
    const [formValues, setFormValues] = useState({
        email: '',
        pass: ''
    })
    let heightScreen = Dimensions.get('window').height
    const changeHandler = (e) => {
        console.log(e);
        const value = e.target.value
        console.log(value);
        setFormValues({
            ...formValues,
            [e.target.name]: value
        })
    }
    const submitHandler = () => {
        // console.log(formValues);
        // alert(formValues.email)
        if (formValues.email === 'ameykhoje@gmail.com' && formValues.pass === '12345678') {
            navigation.navigate('Dashboard')
        } else {
            alert('Invalid Input')
        }
        // navigation.navigate('Dashboard')
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {/* <LinearGradient colors={["#6979f8", "#9ba6fa"]} start={[0.2, 0.1]} style={{flex: 1, width: '100%', height: '100%'}}> */}
            <View style={{ paddingHorizontal: 15, height: heightScreen , backgroundColor: '#ecf4f1', flex: 1, paddingVertical: 30 }}>
                {/* <LinearGradient colors={["#09203f", "#537895"]} start={[0.1, 0.1]} style={{opacity: 0.85, width: '100%', height: '100%', justifyContent: 'center'}}> */}
                <Text style={styles.head}>
                    Login
                </Text>
                <View style={styles.inputCont}>
                    <Text style={styles.label}>Enter Your Email:</Text>
                    <Input name="email" value={formValues.email} onChange={(text) => setFormValues({...formValues, email: text})} />
                </View>
                <View style={styles.inputCont}>
                    <Text style={styles.label}>Enter Your Password:</Text>
                    <Input name="pass" value={formValues.pass} onChange={(text) => setFormValues({...formValues, pass: text})} />
                </View>
                <Button value="Submit" primary onPress={ submitHandler } />
                {/* </LinearGradient> */}
            </View>
            {/* </LinearGradient> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    inputCont: {
        paddingVertical: 10,
    },
    label: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 5,
        color: '#080e2c',
    },
    head: {
        fontSize: 26,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 15,
        fontWeight: "700",
        color: '#080e2c',
        // borderBottomWidth: 1,
        // borderBottomColor: 'rgba(0,0,0,0.5)'
    }
})

export default Auth