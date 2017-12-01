import axios from "axios";

const queryURL = "https://api.yummly.com/v1/api/recipes";

const _app_id = "a614db60";
const _app_key = "0ba60db8aaab204b3ad2fc3ec749f92b";

export default {
  searchRecipes: function(query) {
    return axios.get(
        queryURL,
    { params: {
        _app_id,
        _app_key,
        q: query,
        requirePictures: true
    }
    });
  }
}