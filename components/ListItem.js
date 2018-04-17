import React, { Component } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {COCKTAIL_DETAILS} from "../config/RouteConstant";
import CardSection from './CardSection';
import Card from './Card';

class ListItem extends Component {

    selectCocktail() {
      Actions.push(COCKTAIL_DETAILS, {idDrink:this.props.cocktail.idDrink})
    }

    render() {
        const { strDrink, strDrinkThumb, idDrink  } = this.props.cocktail;
        return (
            <Card>
                <TouchableOpacity
                    onPress= {this.selectCocktail.bind(this)}
                >
                    <CardSection>
                        <Text style={styles.textStyle} >
                          {strDrink}
                        </Text>
                        <Image
                            style={styles.imageStyle}
                            prefetch={{ uri: strDrinkThumb }}
                            source={{ uri: strDrinkThumb }}
                            resizeMode="contain"
                        />
                    </CardSection>
                </TouchableOpacity>
            </Card>

        );
    }
}

const styles = {
    imageStyle: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        height: 200,
        flex: 1,
        width: null
    },
    textStyle: {
        fontSize: 18,
        fontFamily: 'Roboto Medium',
        color: 'black',
        fontWeight: '500'
    },
    viewStyleContent: {
        padding: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderColor: '#ddd',
        justifyContent: 'flex-start',
        flex: 1,
        position: 'relative'
    },
    viewStyleFirts: {
        padding: 1,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        position: 'relative',
        justifyContent: 'space-around',
        borderRightWidth: 1,
        flex: 0.6
    },
    viewStyleSecond: {
        padding: 1,
        paddingLeft: 5,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        flex: 0.4,
        justifyContent: 'space-around',
        position: 'relative'
    },
    textPriceStyle: {
        color: 'black',
        fontWeight: '700'
    }
};

const mapStateToProps = state => {
    return {
        cocktailDetailId: state.selectedCocktailId
    };
};

export default connect(mapStateToProps, null)(ListItem);
