const axios = require("axios");
const router = require("express").Router();
// this is the base-call that will return all the user preferences
const APICALL = ".my.workfront.com/attask/api-unsupported/userpf/search?&$$LIMIT=5&fields=*&"
const UPDATE_CALL = '.my.workfront.com/attask/api-unsupported/userpf?updates={"objCode":"USERPF","value":"","name":'

  // function to get the sessionID from the request
  function getSession(requestURLGoesHere) {
    var url_array = requestURLGoesHere.split('&')
    console.log(url_array);
    console.log("-------")
    // will return just the sessionID
    return url_array[1]
  }
  
  // function to get the domain from the request
  // yes this isn't dry but I cba to fix this for now
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
    // will return just the domain
    return tempArray[2]

  }

// whenever we go to /userPreferences this is what is available
// TODO: have to put in the DELETE method

// this is the GET 
router.get("/userPreferences", (req, res) => { 

  // // function to get the sessionID from the request
  // function getSession(requestURLGoesHere) {
  //   var url_array = requestURLGoesHere.split('&')
  //   console.log(url_array);
  //   console.log("-------")
  //   // will return just the sessionID
  //   return url_array[1]
  // }
  
  // // function to get the domain from the request
  // // yes this isn't dry but I cba to fix this for now
  // function getDomain(requestURLGoesHere) {

  //   var url_array = requestURLGoesHere.split('&')
  //   tempArray = [];

  //   for (i = 0; i < url_array.length; i++) {
      
  //     str = url_array[i]
  //     indexOfEquals = str.search("=")
  //     var niceString = str.slice(indexOfEquals+1)
  //     tempArray.push(niceString)
  //     console.log("lol1", tempArray)
  //   }
  //   // will return just the domain
  //   return tempArray[2]

  // }

  // if not userID is specified, by default the API in WF returns userPreferences based on the user who made the call
  // I could code out the userID param but as of now the code to parse the URL is not dry, so don't want to make
  // it a third unnecessary function
  // I'll have to figure out the easy way to make it dry, but for now it escapes me
  
  axios
    .get("https://" + getDomain(req.query.q) + APICALL + getSession(req.query.q))
    // .then(console.log(req.query.q , "watlol"))
    // .then(parseUrlElements(req.query.q))
    .then(({ data: { data } }) => res.json(data))
    .catch(err => res.status(422).json(err));
})

// this is the delete function
.post("/userPreference", (req, res) => { 
  // code goes here
  console.log("hitting the delete API function")
  // multiple params from API.js seem to be stored in the req.body
  console.log("yeet " + "https://" + getDomain(req.body.params.u) + UPDATE_CALL + '"' + req.body.params.q + '"}&' + getSession(req.body.params.u))

  axios
    .post("https://" + getDomain(req.body.params.u) + UPDATE_CALL + '"' + req.body.params.q + '"}&' + getSession(req.body.params.u))
    // .then(console.log(req.body.params, "lol"))
    .then((res) => {
      console.log("WF response " + res.status);
    }, (error) => {
      console.log(error);
    });
  
})

module.exports = router;
