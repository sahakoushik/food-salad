import React from 'react';
import {AppRegistry,View,Text,Image,ScrollView} from 'react-native';


const Header = ()=>{
    return (
        <View style={{height:60,elevation:3,backgroundColor:"white"}}>
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"#364951",fontSize:26,}}>Food Salad</Text>
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