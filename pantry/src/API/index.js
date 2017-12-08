import axios from "axios";

const recipeURL = "https://api.yummly.com/v1/api/recipe" 
// /Winter-Citrus-_-Pomegranate-Fruit-Salad-2219269?_app_id=a614db60&_app_key=0ba60db8aaab204b3ad2fc3ec749f92b&q=&requirePictures=true

const queryURL = "https://api.yummly.com/v1/api/recipes";

const _app_id = "a614db60";
const _app_key = "0ba60db8aaab204b3ad2fc3ec749f92b";

export default {
  searchRecipes: function(query, allowed) {
    allowed = allowed || [];
    return axios.get(
        queryURL,
    { params: {
        _app_id,
        _app_key,
        q: query,
        allowedIngredient:allowed,
        requirePictures: true
    }
    });
  },

  getRecipe: function(id) {
    return axios.get(
        recipeURL + "/" + id,
    { params: {
        _app_id,
        _app_key,
        requirePictures: true
    }
    });
  },

  getRecipe: function(id) {
    return axios.get(
        recipeURL + "/" + id,
    { params: {
        _app_id,
        _app_key,
        requirePictures: true
    }
    });
  }
}