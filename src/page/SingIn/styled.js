import  styled from 'styled-components/native';
import {Animated} from 'react-native'



export const Container = styled.SafeAreaView`
    flex:1;
    background-color:#434343;
    justify-content:center;
    align-items:center;
    padding:20px
`;

export const ContainerFormInput = styled(Animated.View)`
    width:100%;
    height:100%
    justify-content:center;
    align-items:center;

`;
export const InputForm = styled.View`
    width:100%;
    height:55px;
    background-color: #000;
    margin-bottom:20px;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    padding:0px 10px;
    border-radius:20px  
`;

export const Input = styled.TextInput`
    flex:1;
    color:#fff;
`;

export const ButtonSingUp = styled.TouchableOpacity`
    width:100%
    height:55px
    margin-top:20px;
    background-color:#000;
    justify-content:center;
    align-items:center;
    border-radius:20px;
    
`;
export const ButtonSingUpText= styled.Text`
    font-size:16px;
    color:#fff;
    text-transform: uppercase;
    font-weight:bold;
`;

export const ButtomMessage = styled.TouchableOpacity`
    width:100%;
    height:60px;
    justify-content:center;
    align-items:center;
    flex-direction:row;
    margin-top:50px;

`;
export const ButtonMessageText = styled.Text`
    font-size:16px;
    margin-left:5px;
    color:#fff;
`;

