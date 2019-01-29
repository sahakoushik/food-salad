import React from 'react';
import {AppRegistry,View,Text,Image} from 'react-native';


const Restaurants = ()=>{
    return(

        <View style={{flexDirection: "row", margin: 20}}>
            <View style={styles.restCard}>
                <Image source={require('../../assets/1.jpg')} style={styles.imageStyle}/>
                <Text style={styles.restName}>The Bhoj Factory</Text>
                <View style={{flexDirection: "row"}}>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/star.png')}/>
                        <Text>4.6</Text>
                    </View>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/support.png')}/>
                        <Text>12</Text>
                    </View>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/favorite-heart-button.png')}/>
                        <Text>1.2k</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row", paddingHorizontal: 5, marginBottom: 10,}}>
                    <View style={styles.restTag}>
                        <Text style={styles.restTagText}>INDIAN</Text>
                    </View>
                </View>
            </View>
            <View style={styles.restCard}>
                <Image source={require('../../assets/2.jpg')} style={styles.imageStyle}/>
                <Text style={styles.restName}>The Star</Text>
                <View style={{flexDirection: "row"}}>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/star.png')}/>
                        <Text>4.6</Text>
                    </View>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/support.png')}/>
                        <Text>12</Text>
                    </View>
                    <View style={styles.restStat}>
                        <Image source={require('../../assets/favorite-heart-button.png')}/>
                        <Text>1.2k</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row", paddingHorizontal: 5, marginBottom: 10,}}>
                    <View style={styles.restTag}>
                        <Text style={styles.restTagText}>LUNCH</Text>
                    </View>
                    <View style={styles.restTag}>
                        <Text style={styles.restTagText}>BREAKFAST</Text>
                    </View>
                </View>
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
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    restTag:{
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical:5,
        backgroundColor: "#E6F7D8",
        marginRight:10
    },
    restTagText:{
        color:"#2bbc11"
    },
}

export default Restaurants;