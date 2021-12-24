import React, {useState, useEffect, useRef} from 'react';
import { View, Text,  Animated, } from 'react-native';
import {useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'
import {
    Container, 
    InputForm, 
    Input,
    ContainerFormInput, 
    ButtonSingUp,
    ButtonSingUpText,
    ButtomMessage,
    ButtonMessageText
} from './styled';


import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';


const SingUp = () => {

    const translateX = new Animated.Value(-100);
    const opacity = new Animated.Value(0); 
    const[lookPassword, setLookPassword] = useState(true);
    const refAnimation = useRef(null).current;
    const navigation = useNavigation()
    useEffect(()=>{
        Animated.parallel([
            Animated.spring(translateX, {
                toValue: 0,
                duration:1000,
                useNativeDriver:false,
                speed:4,
                bounciness:20
            }).start(),
            Animated.spring(opacity,{
                toValue:1,
                duration:1000,
                useNativeDriver:false,
                speed:4,
                bounciness:20
            }).start(),
        ])
      
    },[])

    useEffect(()=>{
            refAnimation?.play()
    },[])


    return (
        <Container>
            <ContainerFormInput
                    style={{transform:[{translateX}], opacity}}            
            >
                <View
                     style={{justifyContent:'center', 
                     alignItems:'center', 
                     width:'100%', 
                     height:150,
                      
                     }}                                
                >
                    <LottieView
                        style={{height:100, width:200,}}
                        source={require('../../assests/profile.json')} 
                        autoPlay    
                        loop={false}  
                        ref={refAnimation}        
                    />
                </View>
                <InputForm>
                    <Input
                        placeholderStyle={{fontFamily:'sans-serif', borderColor:'red'}}
                        placeholder="Digite seu email"
                        placeholderTextColor="#fff"                    
                    />
                    <Ionicons name="person" size={26} color="#fff" />            
                </InputForm>
                <InputForm>
                    <Input
                        placeholder="Digite sua senha"
                        placeholderTextColor="#fff"
                        secureTextEntry={lookPassword ? true:false}                  
                    />
                    <Entypo onPress={()=>setLookPassword(!lookPassword)} 
                        name={lookPassword?'eye': 'eye-with-line'} 
                        size={26} 
                        color="#fff"/>                    
                </InputForm>
                <ButtonSingUp
                    onPress={()=>{}}                
                >
                    <ButtonSingUpText>Login</ButtonSingUpText>
                </ButtonSingUp>
                <ButtomMessage
                    onPress={()=>navigation.navigate('SingIn')}
                >
                    <ButtonMessageText>Não possui uma  conta?</ButtonMessageText>
                    <ButtonMessageText style={{fontWeight:'bold', color:'#eee'}}>Então cadastre-se</ButtonMessageText>
                </ButtomMessage>
            </ContainerFormInput>   
        </Container>
    )
}
export default SingUp
