export default class CocktailConfig {

	static get base() {
		return "http://www.thecocktaildb.com/api/json/v1/1/";
    }

    static get endpointGetCocktails(){
        return `${CocktailConfig.base}/filter.php?g=Cocktail_glass`;
    }

    static get endpointGetDetailCoctails() {
        return `${CocktailConfig.base}/lookup.php`;
    }
}
