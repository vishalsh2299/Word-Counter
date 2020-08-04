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

var wordsMap = {};

function sortByCount(wordsMap) {
  // sort by count in descending order
  var finalWordsArray = [];
  finalWordsArray = Object.keys(wordsMap).map(function (key) {
    return {
      name: key,
      total: wordsMap[key],
    };
  });

  finalWordsArray.sort(function (a, b) {
    return b.total - a.total;
  });

  return finalWordsArray;
}

app.post("/count", (req, res) => {
  console.log(req.body);
  value = parseInt(req.body.name);
  res.send(req.body);
});

app.get("/send", (req, res) => {
  var result;
  //console.log(value);
  request(
    {
      uri: "https://terriblytinytales.com/test.txt",
    },
    (error, response, body) => {
      //console.log(body);
      wordsMap = {};
      if (error) res.send(error);

      var wordsArray = body.split(/\s+/);
      wordsArray.forEach((key) => {
        if (wordsMap.hasOwnProperty(key)) {
          wordsMap[key]++;
        } else {
          wordsMap[key] = 1;
        }
      });
      wordsMap = sortByCount(wordsMap);
      result = wordsMap.splice(0, value).map((item) => {
        return item;
      });

      res.send({ data: result });
    }
  );
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
