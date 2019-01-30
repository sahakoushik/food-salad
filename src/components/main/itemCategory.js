import React from 'react';
import {AppRegistry,View,Text,Image,ScrollView} from 'react-native';


const ItemCategory = ()=>{
    return (
        <View>
            <ScrollView horizontal={true} style={{marginVertical: 20}}>
                <View style={{flexDirection: "row"}}>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/burger.png')} style={{width:48,height:48,elevation:2}}/>
                        <Text>Burger</Text>
                    </View>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/pizza-slice.png')} style={{width:48,height:48,elevation:2}}/>
                        <Text>Pizza</Text>
                    </View>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/cheese.png')} style={{width:48,height:48,elevation:2}}/>
                        <Text>Cake</Text>
                    </View>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/french-fries.png')} style={{width:48,height:48,elevation:2}}/>
                        <Text>Fries</Text>
                    </View>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/fried-chicken.png')} style={{width:48,height:48,elevation:2}}/>
                        <Text>Chicken</Text>
                    </View>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/noodles.png')} style={{width:48,height:48,elevation:2}}/>
                        <Text>Noodles</Text>
                    </View>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/burger.png')} style={{width:48,height:48,elevation:10,backgroundColor:"white"}}/>
                        <Text>Burger</Text>
                    </View>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/pizza-slice.png')} style={{width:48,height:48}}/>
                        <Text>Pizza</Text>
                    </View>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/cheese.png')} style={{width:48,height:48,elevation:2}}/>
                        <Text>Cake</Text>
                    </View>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/french-fries.png')} style={{width:48,height:48,elevation:2}}/>
                        <Text>Fries</Text>
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
        width:80,
        marginRight:20,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        marginBottom:5,
        marginTop:5,
        paddingVertical:5,
        elevation:2,
        borderRadius:5,
    },

}

export default ItemCategory;