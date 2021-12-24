import Reactfetch,{useState, useEffect, useRef} from 'react'
import { 
    StyleSheet,  
    Animated 
} from 'react-native'

import { 
    Container,
    Scroller, 
    SwiperDot,
    SwiperActive,
    AnimeContainer,
    ScrollerTitle,
    ScrollerTop,
    ScrollList
} from './styled';
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-swiper';

import api from '../../../api';
import ListAnime from '../../components/ListAnime';
import ListTop from '../../components/ListTop';



const home = () => {

    const scrollY = new Animated.Value(0);
    const [arrRandonNumber] = useState([])
    const [req, setReq] = useState(api.getAll())
        let img=[
            {
                img: require('../../assests/imag/84631.jpg'),
                name: 'Dragon Ball'        
            },
            {
                img: require('../../assests/imag/122219.jpg'),
                name:'Bleach'
        },
        {
            img: require('../../assests/imag/564835.jpg'),
            name:'One Pice',
        },
        
        {
            img:require('../../assests/imag/481903.png'),
            name:'Poker Mon'
        },
        {
            img:require('../../assests/imag/593476.png'),
            name:'Dragon Ball Super'
        }
        
    ]
    
    const max = req.length - 1;

    useEffect(()=>{
        for(let i = 0; i <= 4; i++){
            let numberRandon = Math.floor(Math.random()* max);
            arrRandonNumber.push(numberRandon)
        }
        //setReq(api.getAll())
        
      },[])


    return (
        <Scroller
            onScroll={Animated.event([
                {nativeEvent:{contentOffset:{y:scrollY}}}
            ], {useNativeDriver:false})}>
            <Swiper
                style={{
                    height: 300, 
                    zIndex:1111,
                    
                    }}
                dot={<SwiperDot/>} 
                activeDot={<SwiperActive/>} 
                autoplay>
                {img.map((item, index)=>(
                <Animated.Image
                    key={index}
                    source={item.img}
                    style={{
                        height:300, 
                        width:'100%',
                        opacity: scrollY.interpolate({
                            inputRange:[0, 150],
                            outputRange:[1, 0],
                            extrapolate:'clamp'
                        })
                    }}
                    resizeMode="cover">
                </Animated.Image>
                    ))} 
            </Swiper>
                <AnimeContainer                
                    style={{
                        transform: [{translateY:scrollY.interpolate({
                        inputRange:[0, 150],
                        outputRange:[0, -150],
                        extrapolate:'clamp'
                    })}]}}
                >
                    <LinearGradient
                        colors={['#434343', '#232526']}
                        style={{
                            flex:1, 
                            borderTopLeftRadius:30, 
                            borderTopRightRadius:30,
                            }}>
                        <ScrollerTitle>Os mais Assistidos</ScrollerTitle>
                    <ScrollerTop
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        contentContainerStyle={styles.contentContainer}
                    >
                        {req.slice(arrRandonNumber[0], max).map((item, index )=>(
                            <ListTop 
                            data={item} 
                            index={index} 
                            key={item.mal_id}/>
                        ))}
                    </ScrollerTop>
                    <ScrollerTitle>Lançamentos</ScrollerTitle>
                    <ScrollList
                        showsHorizontalScrollIndicator={false}
                        horizontal          
                    >
                        {req.slice(arrRandonNumber[0], max).map((item, index)=>(
                            <ListAnime data={item} key={item.mal_id}/>
                        ))}
                    </ScrollList>
                    <ScrollerTitle>Lançamentos</ScrollerTitle>
                    <ScrollList
                        showsHorizontalScrollIndicator={false}
                        horizontal          
                    >
                        {req.slice(arrRandonNumber[1], max).map((item, index)=>(
                            <ListAnime data={item} key={item.mal_id}/>)
                        )}
                    </ScrollList>
                    <ScrollerTitle>Animes da Temporada</ScrollerTitle>
                    <ScrollList
                        showsHorizontalScrollIndicator={false}
                        horizontal          
                    >
                        {req.slice(arrRandonNumber[2], max).map((item, index)=>(
                            <ListAnime data={item} key={item.mal_id}/>
                        ))}
                    </ScrollList>
                    <ScrollerTitle>Ultimos Episodios Lançados</ScrollerTitle>
                    <ScrollList
                        showsHorizontalScrollIndicator={false}
                        horizontal          
                    >
                        {req.slice(arrRandonNumber[3], max).map((item, index)=>(
                            <ListAnime data={item} key={item.mal_id}/>
                        ))}
                    </ScrollList>
                    </LinearGradient> 
                </AnimeContainer>
        </Scroller>
        
    )
}

export default home
const styles = StyleSheet.create({
    contentContainer: {
        justifyContent:'center',
        alignItems:'center'
    }
})      