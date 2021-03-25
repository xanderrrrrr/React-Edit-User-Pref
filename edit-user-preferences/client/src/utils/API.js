import axios from "axios";

// The getUserPreferences method retrieves userPreferences from the pointed API in apiRoutes
// It accepts a "query" or term to search the recipe api for
// which in this case is the entire URL
export default {

  getUserPreferences: function(query) {
    return axios.get("/api/userPreferences", { params: {q : query } });
  }
};
