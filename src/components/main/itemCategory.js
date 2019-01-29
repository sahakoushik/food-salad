import React from 'react';
import {AppRegistry,View,Text,Image,ScrollView} from 'react-native';


const ItemCategory = ()=>{
    return (
        <View>
            <ScrollView horizontal={true} style={{marginHorizontal: 20}}>
                <View style={{flexDirection: "row"}}>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/fast-food.png')}/>
                        <Text>Burger</Text>
                    </View>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/fast-food.png')}/>
                        <Text>Burger</Text>
                    </View>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/fast-food.png')}/>
                        <Text>Burger</Text>
                    </View>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/fast-food.png')}/>
                        <Text>Burger</Text>
                    </View>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/fast-food.png')}/>
                        <Text>Burger</Text>
                    </View>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/fast-food.png')}/>
                        <Text>Burger</Text>
                    </View>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/fast-food.png')}/>
                        <Text>Burger</Text>
                    </View>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/fast-food.png')}/>
                        <Text>Burger</Text>
                    </View>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/fast-food.png')}/>
                        <Text>Burger</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles={
    imageStyle:{
        width:"100%",
        height:120,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    restCard:{
        flex:1,
        marginHorizontal:10,
        backgroundColor:"white",
        borderRadius:10,
        elevation:5
    },
    restName:{
        paddingHorizontal:5,
        paddingVertical:10,
        fontWeight:"bold",
        fontSize:14
    },
    restStat:{
        width:60,
        marginRight:10,
        justifyContent:"center",
        alignItems:"center"
    },

}

export default ItemCategory;