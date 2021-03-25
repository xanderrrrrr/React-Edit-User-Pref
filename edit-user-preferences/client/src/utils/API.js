import axios from "axios";

// The getUserPreferences method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {

  getUserPreferences: function(query) {
    return axios.get("/api/userPreferences", { params: {q : query } });
  }
};


// if i do my handling in here, I don't need