//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// const uri = "mongodb+srv://austinjb32:28%40augustine@cluster0.qw08n.mongodb.net/blogDB?retryWrites=true&w=majority";
mongoose.connect("mongodb://127.0.0.1:27017/personDB", {useNewUrlParser: true});
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const postSchema = {
  title: String,
  content: String,
  src: String,
  no:Number
};

const Post = mongoose.model("Juice", postSchema);

app.get("/", async function(req, res){
 
  try{
    res.render('home', { title: 'My Juice Website',
    images:['https://th.bing.com/th/id/OIP.6su8pOok8jm0bg6tNeSylwHaHa?pid=ImgDet&rs=1','https://drive.google.com/file/d/1pTkKyCWf14ar3_aJ7jCqOWyhzPKY70S_/view?usp=share_link','https://drive.google.com/file/d/1pTkKyCWf14ar3_aJ7jCqOWyhzPKY70S_/view?usp=share_link'], 
    products: ['Apple Juice', 'Orange Juice', 'Grape Juice','Apple Juice', 'Orange Juice', 'Grape Juice'],
    bestsellers: ['Apple Juice', 'Orange Juice', 'Grape Juice','Apple Juice', 'Orange Juice', 'Grape Juice'],
    banner:['https://i.pinimg.com/originals/75/07/53/750753764a9bc8c81e7cd589c8731648.jpg','https://i.pinimg.com/originals/a8/bc/9a/a8bc9a1550a1081e6155b3d9e83399ba.jpg'] });
  }
  catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving posts");
    }
});

app.get("/juices", async function(req, res){
 
  try{
    res.render('juices', { title: 'My Juice Website',
    images:['https://th.bing.com/th/id/OIP.6su8pOok8jm0bg6tNeSylwHaHa?pid=ImgDet&rs=1','https://drive.google.com/file/d/1pTkKyCWf14ar3_aJ7jCqOWyhzPKY70S_/view?usp=share_link','https://drive.google.com/file/d/1pTkKyCWf14ar3_aJ7jCqOWyhzPKY70S_/view?usp=share_link'], 
    products: ['Apple Juice', 'Orange Juice', 'Grape Juice','Apple Juice', 'Orange Juice', 'Grape Juice'],
    bestsellers: ['Apple Juice', 'Orange Juice', 'Grape Juice','Apple Juice', 'Orange Juice', 'Grape Juice'],
    banner:['https://i.pinimg.com/originals/e9/a4/91/e9a491dac3fa91acef1aeabad9ddd4dc.jpg','https://1.bp.blogspot.com/-TtXhiQJq9TY/Wd26Yn4qYxI/AAAAAAAEqGA/HPAzQ9fq0QMC0qOEn0p1A6EzhSz1oprcQCLcBGAs/s1600/FG3_Juice5.jpg'] });
  }
  catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving posts");
    }
});

app.get("/smoothies", async function(req, res){
 
  try{
    res.render('smoothies', { title: 'My Juice Website',
    images:['https://th.bing.com/th/id/OIP.6su8pOok8jm0bg6tNeSylwHaHa?pid=ImgDet&rs=1','https://drive.google.com/file/d/1pTkKyCWf14ar3_aJ7jCqOWyhzPKY70S_/view?usp=share_link','https://drive.google.com/file/d/1pTkKyCWf14ar3_aJ7jCqOWyhzPKY70S_/view?usp=share_link'], 
    products: ['Apple Juice', 'Orange Juice', 'Grape Juice','Apple Juice', 'Orange Juice', 'Grape Juice'],
    bestsellers: ['Apple Juice', 'Orange Juice', 'Grape Juice','Apple Juice', 'Orange Juice', 'Grape Juice'],
    banner:['https://th.bing.com/th/id/R.0bf83e1f7f3bcd9eb46b6a82e3e17609?rik=0ZEbDdkui9AWyw&riu=http%3a%2f%2fwww.purecanvascompany.co.uk%2fstore%2fimage%2fdata%2fSmoothies+Banner.jpg&ehk=7xRXX5rWcxGVy5In0XeVzI%2b7IRG%2bAHloi5whklfvars%3d&risl=&pid=ImgRaw&r=0','https://image.freepik.com/free-vector/smoothies-bar-banner-template_23-2148911239.jpg'] });
  }
  catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving posts");
    }
});

app.get("/signup", async function(req, res){
 
  try{
    res.render('signup')}
  catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving posts");
    }
});

app.get("/login", async function(req, res){
 
  try{
    res.render('login')}
  catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving posts");
    }
});

app.get("/complaint", async function(req, res){
 
  try{
    res.render('complaint')}
  catch (error) {
      console.log(error);
      res.status(500).send("Error retrieving posts");
    }
});

app.get("/home", async function(req, res){
  try{
  res.redirect("/");
}
  catch(e){
    console.log(e)
  }
});

app.get("/cart", function(req, res){
  res.render("cart",{
  image:'https://th.bing.com/th/id/OIP.6su8pOok8jm0bg6tNeSylwHaHa?pid=ImgDet&rs=1', 
  products: ['Apple Juice'],
    similarProducts: ['Apple Juice', 'Orange Juice', 'Grape Juice','Apple Juice', 'Orange Juice', 'Grape Juice'],
});
});

app.get("/product", function(req, res){
  res.render("juice_page",{
  image:'https://th.bing.com/th/id/OIP.6su8pOok8jm0bg6tNeSylwHaHa?pid=ImgDet&rs=1', 
  product: 'Apple Juice',
    similarProducts: ['Apple Juice', 'Orange Juice', 'Grape Juice','Apple Juice', 'Orange Juice', 'Grape Juice'],
});
});

app.post("/compose", function(req, res){
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });


  post.save(function(err){
    if (!err){
        res.redirect("/");
    }
  });
});

app.get("/posts/:postId", function(req, res){

const requestedPostId = req.params.postId;

  Post.findOne({_id: requestedPostId}, function(err, post){
    res.render("post", {
      title: post.title,
      content: post.content
    });
  });

});

app.get("/about", function(req, res){
  res.render("about", {aboutContent: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContent: contactContent});
});


app.listen(4000, function() {
  console.log("Server started on port 4000");
});
