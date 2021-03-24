const axios = require("axios");
const router = require("express").Router();

router.get("/userPreferences", (req, res) => {
  axios
    .get("https://xandercanedo.my.workfront.com/attask/api-unsupported/task/search?apiKey=idg05pslhoepllwtjarvq7x1avv0bsb9&$$LIMIT=5")
    .then(({ data: { data } }) => res.json(data))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
