import React, {useState} from 'react'
import Button from '../components/Form Elements/Button'
import { ScrollView, StatusBar, View, StyleSheet, Text, Dimensions } from 'react-native'
import Input from '../components/Form Elements/Input'

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
        console.log(formValues);
    }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginTop: StatusBar.currentHeight, paddingHorizontal: 15, height: heightScreen - StatusBar.currentHeight, backgroundColor: '#f1eed8', flex: 1, paddingVertical: 30 }}>
                <Text style={styles.head}>
                    Login
                </Text>
                <View style={styles.inputCont}>
                    <Text style={styles.label}>Enter Your Email:</Text>
                    <Input name="email" value={formValues.email} onChange={changeHandler} />
                </View>
                <View style={styles.inputCont}>
                    <Text style={styles.label}>Enter Your Password:</Text>
                    <Input name="pass" value={formValues.pass} onChange={changeHandler} />
                </View>
                <Button value="Submit" primary onPress={() => navigation.navigate('Home')} />
            </View>
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
        marginBottom: 5 
    },
    head: {
        fontSize: 26,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 15,
        fontWeight: "700",
        color: '#4b6f61',
        // borderBottomWidth: 1,
        // borderBottomColor: 'rgba(0,0,0,0.5)'
    }
})

export default Auth