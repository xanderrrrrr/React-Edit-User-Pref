const axios = require("axios");
const router = require("express").Router();
const APICALL = ".my.workfront.com/attask/api-unsupported/userpf/search?&$$LIMIT=5&fields=*&"
const SESSION = ""

// will need to add own API here in the interim
// until I can use proper sessionIDs

router.get("/userPreferences", (req, res) => { 

  var url_array

  function getSession(requestURLGoesHere) {
    var url_array = requestURLGoesHere.split('&')
    console.log(url_array);
    console.log("-------")
    return url_array[1]
    // getUserPreferenceAPI(url_array)
  }

  function getDomain(requestURLGoesHere) {

    var url_array = requestURLGoesHere.split('&')
    tempArray = [];

    for (i = 0; i < url_array.length; i++) {
      
      str = url_array[i]
      indexOfEquals = str.search("=")
      var niceString = str.slice(indexOfEquals+1)
      tempArray.push(niceString)
      console.log("lol1", tempArray)
    }
    return tempArray[2]

  }

  // by default the API in WF returns userPreferences based on the user who made the call
  // if no userID is specified 
  // I could code out the userID param but as of now the code to parse the URl is not dry, so don't want to make
  // it a third unnecessary function
  // I'll have to figure out the easy way to make it dry, but for now it escapes me
  
  axios
    .get("https://" + getDomain(req.query.q) + APICALL + getSession(req.query.q))
    // .then(console.log(req.query.q , "watlol"))
    // .then(parseUrlElements(req.query.q))
    .then(({ data: { data } }) => res.json(data))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
