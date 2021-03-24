const axios = require("axios");
const router = require("express").Router();

// will need to add own API here in the interim
// until I can use proper sessionIDs

router.get("/userPreferences", (req, res) => {
  axios
    .get("https://xandercanedo.my.workfront.com/attask/api-unsupported/userpf/search?apiKey=xxx&$$LIMIT=5&fields=*")
    .then(({ data: { data } }) => res.json(data))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
