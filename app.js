const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

const header_title = "Donec Massa Sapien";
const header_content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor orci eu lobortis elementum nibh. Dolor sit amet consectetur adipiscing elit ut aliquam. Tellus molestie nunc non blandit massa. Et ligula ullamcorper malesuada proin libero nunc. Orci nulla pellentesque dignissim enim. Donec massa sapien faucibus et molestie ac feugiat sed lectus. In mollis nunc sed id semper risus in hendrerit gravida. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Suspendisse sed nisi lacus sed viverra tellus in. Tincidunt tortor aliquam nulla facilisi. Consequat ac felis donec et odio pellentesque diam volutpat. Neque vitae tempus quam pellentesque nec nam. Sit amet risus nullam eget felis."

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

//----------------------GET------------------------------

app.get("/", function(req, res){
  res.render('home',{
    titleHeader: header_title,
    titleContent: header_content

});
})


app.listen(150, function(){
  console.log("Hosted on 150");
});
