import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native'
import { Container } from './styled'
import ListGenre from '../../components/ListGenre';

const Genre = () => {

    let genre = [
        'Action',	
        'Adventure',	
        'Cars',	
        'Comedy',	
        'Avante',
        'Demons',	
        'Mystery',	
        'Drama',	
        'Ecchi',	
        'Fantasy',	
        'Game',	
        'Hentai',	
        'Historical',	
        'Horror',	
        'Kids',	
        'Martial:',	
        'Mecha',	
        'Music',	
        'Parody',	
        'Samurai',	
        'Romance',	
        'School',	
        'Sci',
        'Shoujo',	
        'Girls:',	
        'Shounen',	
        'Boys',	
        'Space',	
        'Sports',	
        'Super',	
        'Vampire',	
        'Harem',	
        'Slice Life',
        'Supernatural',	
        'Military',	
        'Police',	
        'Psychological',	
        'Suspense',	
        'Seinen',	
        'Josei',	
        'Gender',
        'Suspense',
        'Award',	
        'Gourmet',	
        'Work',	
        'Erotica',
    
    ]


return (
    <Container>
        <LinearGradient
            style={{
                width:"100%",
                flex:1, 
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'center',
                paddingVertical: 50,
            }}
            colors={['#434343', '#232526']}            
        >
            {genre.map((item, index)=>( 
            <ListGenre 
                data={item}  
                index={index} 
                key={index}/>))}
            
        </LinearGradient>
    </Container>
)
}

export default Genre

