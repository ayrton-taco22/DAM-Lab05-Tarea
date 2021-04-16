import React, {Component} from 'react';
import {View,FlatList,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';

import NavigationBar from './navigationBar';


function Item({title,image}) {
    return (
        <View style={styles.item}>
            <Image source={{uri:image}} style={{height: 60, width: 60, borderRadius: 400/ 2, }} />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}


export default class ConexionFetch extends Component {
    constructor (props){
        super(props);
        
        this.state = {
            textValue: 0,
            count: 0,
            items: [],
            error: null,
        };
    }
    async componentDidMount() {
        await fetch('https://yts.mx/api/v2/list_movies.json')
            .then(res => res.json())
            .then(
                result => {
                    console.warn('result', result.data.movies);
                    this.setState({
                        items:result.data.movies,
                    });
                },
                error => {
                    this.setState({
                        error: error,
                    });
                },
            );
    }
    
    render() {
        const {navigate} = this.props.navigation;

        return (

            <View style={styles.container}>
                <NavigationBar navigate={navigate} />
                <FlatList
                    data={this.state.items.length > 0 ? this.state.items:[]}
                    renderItem={({item}) => {
                        return(
                            <TouchableOpacity onPress={() => navigate('Details', {itemObject: item,navigateObject:navigate})}>
                                <Item title={item.title} image={item.medium_cover_image} navigation={this.props.navigation}/>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={item => item.id}
                    navigation={this.props.navigation}
                />
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
        flexDirection:'row',
        padding: 10,
        borderColor: 'gray',
        borderBottomWidth: 1,
    },
    title: {
        paddingLeft: 10,
        fontSize: 20,
    },
});