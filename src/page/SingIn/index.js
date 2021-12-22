import React, {useState, useEffect} from 'react'
import { View, Text,  Animated} from 'react-native';
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

    useEffect(()=>{
        Animated.parallel([
            Animated.spring(translateX, {
                toValue: 0,
                duration:1000,
                useNativeDriver:false,
                mass:true,
            }).start(),
    
            Animated.spring(opacity,{
                toValue:1,
                duration:1000,
                useNativeDriver:false,
            }).start(),
        ])
      
    },[])

    return (
        <Container>
            <ContainerFormInput
                    style={{transform:[{translateX}], opacity}}            
            >
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
                        secureTextEntry={!lookPassword ? true:false}                  
                    />
                    <Entypo onPress={()=>setLookPassword(!lookPassword)} 
                        name={lookPassword?'eye-with-line': 'eye'} 
                        size={26} 
                        color="#fff"/>                    
                </InputForm>
                <ButtonSingUp
                >
                    <ButtonSingUpText>Login</ButtonSingUpText>
                </ButtonSingUp>
                <ButtomMessage
                >
                    <ButtonMessageText>Não possui uma  conta?</ButtonMessageText>
                    <ButtonMessageText style={{fontWeight:'bold', color:'#eee'}}>Então faça login</ButtonMessageText>
                </ButtomMessage>
            </ContainerFormInput>   
        </Container>
    )
}


export default SingUp
