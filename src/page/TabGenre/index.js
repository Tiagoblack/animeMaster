import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList} from 'react-native'
import { Container,ContainerFlalist, ButtonGoBack,ButtonGoBackText } from './styled';
import { useRoute, useNavigation } from '@react-navigation/native';
import ListGenreCategories from '../../components/ListGenreCategories';
import uuid from   'react-native-uuid'

const TabGenre = () => {
    const routes = useRoute();
    const genre = routes.params.res;
    const item = routes.params.data;
return (
    <Container>
        <LinearGradient
            style={{
                width:"100%",
                flex:1, 
            }}
            colors={['#434343', '#232526']}            
        >
        <ContainerFlalist>
          
            <ButtonGoBack>
                <ButtonGoBackText>{item}</ButtonGoBackText>
            </ButtonGoBack>
            <FlatList
                data={genre.anime}
                keyExtractor={()=>uuid.v4()}
                renderItem={({item, index})=><ListGenreCategories data={item} key={index}/>}
                horizontal={false}
                style={{flex:1, 
                        width:'100%',
                    }}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{
                    flexDirection:'row',
                    paddingBottom:10,
                    justifyContent:'center',
                    zIndex:1111,
                    paddingVertical:50
                }}          
            />
        </ContainerFlalist>
        </LinearGradient>
    </Container>
)
}

export default TabGenre

