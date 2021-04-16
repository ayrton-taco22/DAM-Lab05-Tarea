import React from 'react';
import {View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';

export default function NavigationBar({navigate}) {
    return(
        <View style={styles.topBar}>
            <TouchableOpacity onPress={()=>{navigate('Login')}}>
                <Image source={{uri:'https://png.pngtree.com/png-clipart/20190516/original/pngtree-vector-house-icon-png-image_4013710.jpg'}} style={{height: 40, width: 40 }} />
            </TouchableOpacity>
            <Text style={{color:'white',textAlign: 'center',textAlignVertical: 'center',fontSize:20}}>Movies</Text>
            <Image source={{uri:'https://png.pngtree.com/png-clipart/20190611/original/pngtree-movies-and-popcorn-png-image_2656224.jpg'}} style={{height: 40, width: 80 }} />
        </View>
    )
}

const styles = StyleSheet.create({  
    topBar: {
        alignSelf: 'stretch',
        height: 52,
        flexDirection: 'row', // row
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-between', // center, space-around
        paddingLeft: 10,
        paddingRight: 10
    },
});