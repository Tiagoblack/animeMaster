import React, {useState, useEffect} from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import uuid from 'react-native-uuid';
//import api from '../../../api';
import { 
    Container, 
    Input, 
    ContentAnime, 
    ButtonSearch, 
    ContainerIcon ,
    ContentContainerAnimation,
} from './styled';

import ListAnimeSearch from'../../components/ListAnimeSearch';
const Search = () => {
    const api_base = `https://api.jikan.moe/v3/search/anime?q=`;
    const [getSearch, setGetSearch] = useState([]);
    const [animeText, setAnimeText] = useState('');
    
    const handleClickGetFecth = async()=>{
        if (animeText) {
            const req = await fetch(`${api_base}${animeText}`);
            const res = await req.json();        
            setGetSearch(res);
            console.log('api')
            console.log(getSearch);
        }
       
        }

        //console.log(animeText)
        
        return (
    <Container>
        <LinearGradient 
            colors={['#434343', '#232526']}
            style={{
                flex:1, 
                width:'100%',
                paddingHorizontal:20
            }}
            >
    <ContentContainerAnimation>
        <ButtonSearch
            style={{elevation:10, shadowColor:'#eee'}}
        
        >
            <Input
                value={animeText}
                placeholder="Pesquise algum anime"
                placeholderTextColor="#fff"
                onChangeText={t=>setAnimeText(t)}          
            />
                <ContainerIcon onPress={handleClickGetFecth}>
                    <FontAwesome name="search" size={24} color="white" />
                </ContainerIcon>
        </ButtonSearch>    
            <FlatList
                    data={getSearch.results}
                    keyExtractor={()=>uuid.v4()}
                    renderItem={({item, index})=> <ListAnimeSearch  data={item}/>}
                    horizontal={false}
                    style={{
                        flex:1,
                        width:'100%', 
                        paddingTop:60,
                        paddingBottom: 100,
                    }}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{
                        flexDirection:'row',
                        paddingBottom:30,
                        flex:1,
                        width:'100%',
                        zIndex:2222,
                        justifyContent:'center',
                        alignItems:'center'
                    }}
                />
            </ContentContainerAnimation>
        </LinearGradient>
    </Container>
)
}

export default Search


            //<ContentAnime>
                
               // {getSearch >= 1?
                   // { getSearch.map((item, index)=>(
                   
               // ))}
               // <Text>Procure seu anime favorito</Text>}
           // </ContentAnime>