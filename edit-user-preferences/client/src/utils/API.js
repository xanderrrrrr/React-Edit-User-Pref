import axios from "axios";

// The getUserPreferences method retrieves userPreferences from the pointed API in apiRoutes
// It accepts a "query" so that I can parse the queries out
// in this case the "q" is the entire URL
export default {

  getUserPreferences: function(query) {
    console.log('hitting api.js')
    return axios.get("/api/userPreferences", { params: {q : query } });
  },
  // deletes user preference with a POST call
  deleteUserPreference: function(name, requestURL) {
    return axios.post("/api/userPreference", { params: {q : name, u : requestURL } });
  }
};

// TODO: Will need to add the method for delete in here