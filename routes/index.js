var express = require("express");
var router = express.Router();
var path = require("path");
var images = "https://needxp-bmrvuqxjxg.now.sh/images/";

var data = [
  {
    title: "You Need, Justin Bieber Songs",
    url: images + "Justin-Bieber-Songs.jpg"
  },
  { title: "You Need, Fantasy", url: images + "Fantacy.jpg" },
  { title: "You Need, Perfume", url: images + "Perfume.jpg" },
  { title: "You Need, Few Drinks", url: images + "Few-Drinks.jpg" },
  { title: "You Need, A Nap", url: images + "A-Nap.jpg" },
  { title: "You Need, Our Page", url: images + "Our-Page.jpg" },
  { title: "You Need, A Miracle", url: images + "A-Miracle.jpg" },
  { title: "You Need, Cuddle", url: images + "Cuddle.jpg" },
  { title: "You Need, Pizza", url: images + "Pizza.jpg" },
  {
    title: "You Need, Change In Lifestyle",
    url: images + "Change-In-Lifestyle.jpg"
  },
  { title: "You Need, Coffee", url: images + "Coffee.jpg" },
  { title: "You Need, Love", url: images + "Love.jpg" },
  { title: "You Need, Parents", url: images + "Parents.jpg" },
  { title: "You Need, A Holiday", url: images + "A-Holiday.jpg" },
  { title: "You Need, Adventure Trip", url: images + "Adventure-Trip.jpg" },
  { title: "You Need, Brain", url: images + "Brain.jpg" },
  {
    title: "You Need, Getting Out of Comfort Zone",
    url: images + "Getting-Out-of-Comfort-Zone.jpg"
  },
  { title: "You Need, A Date", url: images + "A-Date.jpg" },
  { title: "You Need, Blessings", url: images + "Blessings.jpg" },
  { title: "You Need, A Chance", url: images + "A-Chance.jpg" },
  { title: "You Need, A Shower", url: images + "A-Shower.jpg" },
  { title: "You Need, A Good Book", url: images + "Good-Book.jpg" },
  { title: "You Need, Ice Cream", url: images + "Ice-Cream.jpg" },
  { title: "You Need, Poems", url: images + "Poems.jpg" },
  { title: "You Need, Friends", url: images + "Friends.jpg" },
  { title: "You Need, Slap", url: images + "Slap.jpg" },
  { title: "You Need, No One", url: images + "No-One.jpg" },
  { title: "You Need, A Diet Plan", url: images + "A-Diet-Plan.jpg" },
  { title: "You Need, A Hug", url: images + "A-Hug.jpg" },
  { title: "You Need, Money", url: images + "Money.jpg" },
  {
    title: "You Need, Time With Your Partner",
    url: images + "Time-With-Your-Partner.jpg"
  },
  { title: "You Need, Luck", url: images + "Luck.gif" },
  { title: "You Need, PS4", url: images + "PS4.png" },
  { title: "You Need, Soulmate", url: images + "Soulmate.jpg" },
  { title: "You Need, An Advice", url: images + "An-Advice.jpg" }
];

/* GET home page. */
router.get("/:name", function(req, res, next) {
  var name = req.params;
  var newdata = data[Math.floor(Math.random() * data.length)];
  res.render("index", { data: newdata });
});

module.exports = router;
