import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, } from 'react-native';
import styled from 'styled-components/native';


const Container = styled.View`
    height 100px;
    width:100px;
    padding:0px 5px;
`;
    
const Background = styled.ImageBackground`
    flex:1;
    overflow:hidden;
    border-radius:50px;
   
    `;
const BackgrounDark = styled.View`
    background-color:rgba(0, 0, 0, .3);
    height:100%;
    width:100%;
    justify-content:center;
    align-items:center;
`;

const TextTop = styled.Text`
    color:#fff;
    font-size:16px;
    font-weight:700;
`;
const TextTitle = styled.Text`
    color:#fff;
    font-weight:bold;
    font-size:25px;z
`;
const ListTop = ({data,index}) => {
    return (
        <Container>
             <LinearGradient
                    colors={['#333', '#232526']}
                    style={{
                        flex:1, 
                        padding:5,
                        borderRadius:50,
                       
                    }}>
            <Background
                blurRadius={5}
                source={{uri:data.image_url}}
                resizeMode="cover"
            >
                <BackgrounDark>
                    <TextTitle>Top</TextTitle>
                    <TextTop>
                        {index + 1}
                    </TextTop>
                </BackgrounDark>
            </Background>
            </LinearGradient>
        </Container>
    )
}

export default ListTop

const styles = StyleSheet.create({})
