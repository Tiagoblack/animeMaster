import React, {useState, useEffect} from 'react';
import { View, Text,  Animated, Keyboard} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { useDispatch } from 'react-redux';
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


import { Ionicons, AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';


const SingUp = () => {

    const translateX = new Animated.Value(-100);
    const opacity = new Animated.Value(0); 
    const[lookPassword, setLookPassword] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const navigation = useNavigation();
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

    const handleClickSingIn = ()=>{
        if (name && email && password) {
            dispatch({type:'set_name',payload:{name}});
            dispatch({type:'set_email',payload:{email}});
            dispatch({type:'set_password',payload:{password}});
            navigation.reset({routes:[{name:'HomeTab'}]});
        }else{
            alert('email ou nome inavalidos')
        }
    }

    return (
        <Container>
            <ContainerFormInput
                    style={{transform:[{translateX}], opacity}}            
            >
                <View
                    style={{
                        justifyContent:'center', 
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
                        
                    />
                </View>
                <InputForm>
                    <Input
                        value={name}
                        placeholderStyle={{fontFamily:'sans-serif', borderColor:'red'}}
                        placeholder="Digite se nome"
                        placeholderTextColor="#fff"
                        onChangeText={t=>setName(t)}             
                    />
                    <Ionicons name="person" size={26} color="#fff" />  
                </InputForm>
                <InputForm>
                <Input
                    value={email}
                    placeholderStyle={{fontFamily:'sans-serif', borderColor:'red'}}
                    placeholder="Digite seu email"
                    placeholderTextColor="#fff"          
                    onChangeText={t=>setEmail(t)}             

                />
               <MaterialIcons name="email" size={24} color="black" />      
                </InputForm>
                <InputForm>
                    <Input
                        value={password}
                        placeholder="Digite sua senha"
                        placeholderTextColor="#fff"
                        secureTextEntry={lookPassword ? true:false} 
                        onChangeText={t=>setPassword(t)}            
                    />
                    <Entypo onPress={()=>setLookPassword(!lookPassword)} 
                        name={lookPassword?'eye': 'eye-with-line'} 
                        size={26} 
                        color="#fff"/>                    
                </InputForm>
                <ButtonSingUp
                >
                    <ButtonSingUpText
                        onPress={handleClickSingIn}                    
                    >Cadastre-se</ButtonSingUpText>
                </ButtonSingUp>
                <ButtomMessage
                    onPress={()=>navigation.navigate('SingUp')}
                >
                    <ButtonMessageText>Não possui uma  conta?</ButtonMessageText>
                    <ButtonMessageText style={{fontWeight:'bold', color:'#eee'}}>Então faça login</ButtonMessageText>
                </ButtomMessage>
            </ContainerFormInput>   
        </Container>
    )
}


export default SingUp
