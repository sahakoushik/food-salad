import React from 'react';
import {AppRegistry,View,Text,Image,ScrollView} from 'react-native';


const Header = ()=>{
    return (
        <View style={{height:60,elevation:3,backgroundColor:"white"}}>
            <View>
                <Text style={{color:"#2bbc11",fontSize:20,justifyContent:"center",alignItems:"center"}}>Food Salad</Text>
            </View>
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

}

export default Header;