import React, {Component} from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';
import NavigationBar from './navigationBar';


export default class Details extends Component {
    render() {
        const {params} = this.props.route;
        return ( 
            <View>
                <NavigationBar navigate={params.navigateObject} />
                <View  style={styles.item}>
                    <Text style={styles.title}>{params.itemObject.title}</Text>
                    <View style={{justifyContent: 'center',alignItems: 'center'}}>
                        <Image source={{uri:params.itemObject.medium_cover_image}} style={{height: 200, width: 200, textAlignt: 'center'}} />
                    </View>
                    <Text style={styles.summary}>{params.itemObject.summary}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    summary: {
        fontSize: 20,
    },
});