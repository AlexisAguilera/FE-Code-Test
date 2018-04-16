import CocktailsConfig from './CocktailsConfig'
import axios from "axios";

export default class CocktailService {

	static getCocktails() {
		return new Promise((resolve, reject) => {
			try {
				let endpoint = CocktailsConfig.endpointGetCocktails;
				let response = axios.get(endpoint);
				resolve(response);
			} catch (e) {
				reject(e);
			}

		})
	}

	static getDetailCocktails(id) {
		return new Promise((resolve, reject)=> {
			try{
				let endpoint = CocktailsConfig.endpointGetDetailCocktail + "?i="+id;
				let response = axios.get(endpoint);
			}
			catch(err) {
				reject(err);
			}
		})
	}

}
