import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import  Spinner  from "../components/Spinner";
import { selectCocktail } from "../actions";
import CardSection from '../components/CardSection';
import Card from '../components/Card';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from "../components/Header";

class CocktailDetails extends Component {

  renderPreparation(cocktail) {
    let detailsAux = cocktail;
    let ingerdients = [];
    let measures = [];
    let list = [];
      console.log("detailAux",detailsAux);
    for (let key in detailsAux) {
            if (key.includes("strIngredient")) {
                ingerdients.push(detailsAux[key])
            }
            if (key.includes("strMeasure")) {
                measures.push(detailsAux[key])
            }

        }
        measures.forEach((measure, index) => {
            if (measure !== null && !!measure.trim()) {
                list.push(<View style={{ flexDirection: 'row' }} key={index}>
                    <Text>{measure} - </Text>
                    <Text>{ingerdients[index]}</Text>
                </View>)
            }
        });
        console.log("list", list);
        return list
  }

  componentWillMount() {
     let id = this.props.idDrink;
     console.log("id", id);
     this.props.selectCocktail(id)
 }

 render() {
   console.log("this.props.cocktail", this.props.cocktail);
    const { strDrink, strInstructions, strDrinkThumb } = this.props.cocktail;
    return (
      <View style={{ flex: 1 }}>
        <Header showBack/>
        {this.props.loading ?
          <Spinner />:
          <Card>
          <Image
              style = {{ marginTop: 10, height: 300, width: null}}
              prefetch={{ uri: strDrinkThumb }}
              source={{ uri: strDrinkThumb }}
              resizeMode="contain"
          />
            {this.renderPreparation(this.props.cocktail)}
            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, marginTop: 10 }}>
              <Icon name='circle' size={10} color='grey' style={{ alignSelf: 'center', marginRight: 5 }} />
              <Text style={{ color: 'grey' }}>How to prepare</Text>
            </View>
            <Text style={{ color: 'grey' }}>{strInstructions}</Text>
            </Card>
          }
        </View>);
 }

}


function mapStateToProps(store) {
	return { cocktail: store.cocktails.cocktailDetail, loading: store.appReducer.loading };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			selectCocktail
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(CocktailDetails);
