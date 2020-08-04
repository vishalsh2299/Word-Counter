const express = require("express");
const request = require("request");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const buildPath = path.join(__dirname, "..", "build");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(buildPath));

var value = 0;

var countWords = {};
var result = [];

function sortByCount(countWords) {
  // sort by count in descending order
  var finalWordsArray = [];
  finalWordsArray = Object.keys(countWords).map(function (key) {
    return {
      name: key,
      total: countWords[key],
    };
  });

  finalWordsArray.sort(function (a, b) {
    return b.total - a.total;
  });

  return finalWordsArray;
}

app.get("/count", (req, res) => {
  //console.log(value);
  request(
    {
      uri: "https://terriblytinytales.com/test.txt",
    },
    (error, response, body) => {
      //console.log(body);
      countWords = {};
      if (error) res.send(error);

      var wordsArray = body.split(/\s+/);
      wordsArray.forEach((key) => {
        if (countWords.hasOwnProperty(key)) {
          countWords[key]++;
        } else {
          countWords[key] = 1;
        }
      });
      countWords = sortByCount(countWords);
      result = countWords.splice(0, value).map((item) => {
        return item;
      });

      res.send({ data: result });
    }
  );
});

app.post("/count", (req, res) => {
  console.log(req.body);
  value = parseInt(req.body.name);
  res.send(req.body);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
