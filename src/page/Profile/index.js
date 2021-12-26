import React,{useEffect, useState, useRef} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation} from '@react-navigation/native'
import { 
    Container, 
    ContainerProfile,
    ImageProfile,
    ContainerImageProfile,
    BagdeProfile,
    ContainerBagde,
    ImageProfileMedia,
    ContentProfile,
    Input,
    ButtonEdit,
    ButtonEditText,
    TextName,
    TextWecome
} from './styled';






const Profile = () => {
    const Bheight = new Animated.Value(0);
    const opacity = new Animated.Value(0)
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();
    const img = useSelector(state=> state.userReducer.img);
    const name = useSelector(state=> state.userReducer.name);
    const newName = name.split(" ")[0];
    const [editName, setEditName] = useState('');
    const [editEmail, setEditEmail] = useState('');
    const [editPassword, setEditPassword] = useState('');

    const navigation = useNavigation();

    const handleClickEditProfile =()=>{
        dispatch({type:'set_name', payload:{name:editName}});
        dispatch({type:'set_email', payload:{email:editEmail}});
        dispatch({type:'set_password', payload:{password:editPassword}});

    };
    const handleClickResertProfile = ()=>{
        dispatch({type:'set_name', payload:{name:''}});
        dispatch({type:'set_email', payload:{email:''}});
        dispatch({type:'set_password', payload:{password:''}});
        dispatch({type:'set_image', payload:{img:null}});
        navigation.reset({routes:[{name:'Preload'}]})
    }
    useEffect(()=>{
        Animated.parallel([
            Animated.spring(Bheight,{
                toValue:300,
                duration:500,
                useNativeDriver:false,
                speed:2,
                bounciness:10
            }).start(),
            Animated.spring(opacity,{
                toValue:1,
                duration:500,
                useNativeDriver:false,

            }).start()

        ])
    },[])
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        dispatch({type:'set_image', payload:{img:image}});
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
return (
    <Container>
        <LinearGradient 
            colors={['#434343', '#232526']}
            style={{flex:1, width:'100%'}}           
        >
            <ContainerProfile
                style={{
                    elevation:10, 
                    shadowColor:'#eee',
                    height:Bheight
                }}>   
                <ContainerImageProfile>
                    { img == null?
                    <ImageProfile
                        source={require('../../assests/imag/placeholder.png')}
                        resizeMode="cover"                        
                        />:
                        <ImageProfileMedia
                        source={{uri:img}}
                        resizeMode="cover"                        
                        /> 
                    }
                    <ContainerBagde onPress={pickImage}>
                        <BagdeProfile>+</BagdeProfile>
                    </ContainerBagde>    
                    <TextWecome>Óla,  <TextName>{newName}</TextName>, seja bem-vindo</TextWecome>   
                </ContainerImageProfile>
            </ContainerProfile>
            <ContentProfile>
                <Input
                    placeholder="Deseja editar seu nome completo?"
                    placeholderTextColor="#fff"
                    onChangeText={t=>setEditName(t)}
                    value={editName}                    
                />
                <Input
                    placeholder="Deseja editar seu email?"
                    placeholderTextColor="#fff"
                    onChangeText={t=>setEditEmail(t)}
                    value={editEmail}                    
                />
                <Input
                    placeholder="Deseja editar sua senha?"
                    placeholderTextColor="#fff"
                    onChangeText={t=>setEditPassword(t)}
                    value={editPassword}                    
                />
                <ButtonEdit
                    style={{elevation:5, shadowColor:'#eee'}}           
                    onPress={handleClickEditProfile}
                >
                    <ButtonEditText>Editar</ButtonEditText>
                </ButtonEdit>
                <ButtonEdit
                    style={{elevation:5, shadowColor:'#eee'}}
                    onPress={handleClickResertProfile}              
                >
                    <ButtonEditText>Resertar</ButtonEditText>
                </ButtonEdit>
            </ContentProfile>
        </LinearGradient>
    </Container>
)
}

export default Profile

