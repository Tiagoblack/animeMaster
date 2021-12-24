import React, {useState, useEffect} from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
//import api from '../../../api';
import { 
    Container, 
    Input, 
    ContentAnime, 
    ButtonSearch, 
    ContainerIcon 
} from './styled';

//<ContainerIcon onPress={()=>handleClickGetFecth(animeText)}>
//<FontAwesome name="search" size={24} color="white" />
//</ContainerIcon>
import ListAnimeSearch from'../../components/ListAnimeSearch';
const Search = () => {
    const api_base = `https://api.jikan.moe/v3/search/anime`;
    const [getSearch, setGetSearch] = useState([]);
    const [animeText, setAnimeText] = useState('');

    useEffect(()=>{
        const getFecth = async()=>{
            const req = await fetch(`${api_base}?q=${animeText.toLocaleLowerCase()}`);
            const res = await req.json();        
            if(res.status != 200){
                setGetSearch(res.results);
                console.log('api')
                console.log(getSearch);
            }
        }

        getFecth()
    
    },[animeText])
        //console.log(animeText)
    
return (
    <Container>
        <LinearGradient 
            colors={['#434343', '#232526']}
            style={{
                flex:1, 
                padding:20,
                justifyContent:'flex-start',
                alignItems:'center'
            }}
        >
        <ButtonSearch>
            <Input
                value={animeText}
                placeholder="Pesquise algum anime"
                placeholderTextColor="#fff"
                onChangeText={t=>setAnimeText(t)}          
            />
        </ButtonSearch>
            <ContentAnime>
                {animeText != '' && getSearch.map(item=>(
                    <ListAnimeSearch  data={item} key={item.mal_id}/>
                ))}
            </ContentAnime>

        </LinearGradient>
    </Container>
)
}

export default Search

