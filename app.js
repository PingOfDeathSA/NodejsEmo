//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require('passport-local-mongoose');
const MongoStore = require('connect-mongo')(session);
const LocalStrategy = require('passport-local').Strategy;
// const encrypt= require("mongoose-encryption");
// const bcrypt = require("bcrypt");
// const saltRounds = 10;
// const date = require(__dirname + "/date.js");
mongoose.set('strictQuery', true);




const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('trust proxy', 1);


app.use(session({
  secret: 'THeTerminatorIsHere',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    collectionName: 'sessions',
    ttl: 60 * 60 // 1 hour
  })
}));


app.use(passport.initialize());
app.use(passport.session());
mongoose.connect('mongodb+srv://PingOfDeathSA:Ronald438@cluster0.kqlfkdc.mongodb.net/ECom');



const userschema= new mongoose.Schema({
  email: String,
  password: String,
  companyname: String,
  Company_image: String,
  ContactDetails: String
});


userschema.plugin(passportLocalMongoose);


const UserModel = mongoose.model("User", userschema);

passport.use(UserModel.createStrategy());
passport.use(new LocalStrategy({ username: 'email' }, UserModel.authenticate()));
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());



const UserSave = new UserModel({
  username: "StoreManager@gmail.com",
  password: "testing@443547",
  Company_Name: 'ChromaWear',
  Company_image: "https://www.freepnglogos.com/uploads/company-logo-png/company-logo-transparent-png-19.png",
});

const ProductSchema = mongoose.Schema({
  Product_Number:{
    type: String || Number,
  },
  was_Price:{
    type: String || Number,
  },
Product_Name: {
    type: String || Number,
  },
  imageProductMain: {
    type: String || Number,
  },
  imageProduct1: {
    type: String || Number,
  },
  imageProduct2: {
    type: String || Number,
  },
  imageProduct3: {
    type: String || Number,
  },
  slug: {
    type: String || Number,
  },
  price: {
    type: String || Number,
  },
  details: {
    type: String || Number,
  },
});
const BannerSchema = mongoose.Schema({
  banner: {
      type: String || Number,
    },
    imageBannerMain: {
      type: String || Number,
    },
    imageBanner1: {
      type: String || Number,
    },
    imageBanner2: {
      type: String || Number,
    },
    imageBanner3: {
      type: String || Number,
    },
    Available_Sizes: {
      type: String || Number,
    },
    buttonText: {
      type: String || Number,
    },
    product: {
      type: String || Number,
    },
    desc: {
      type: String || Number,
    },
    smallText: {
      type: String || Number,
    },
 
    
    largeText2: {
      type: String || Number,
    },
    discount: {
      type: String || Number,
    },
    saleTime: {
      type: String || Number,
    }, saleTime1: {
      type: String || Number,
    },
  });

const Productmodel = mongoose.model("prodcut_collec", ProductSchema);
const Bannermodel = mongoose.model("Banner_collec", BannerSchema);
// Loading product data

var GenerateNumber = Math.floor(Math.random() * 906089) + 100;
// Combine the year and student number to create the employee number
var ProductNumberModel = "" + GenerateNumber;


const  ProductSave = new Productmodel({
  Product_Name: "Adidas Hat",

  imageProductMain: "https://thefoschini.vtexassets.com/arquivos/ids/45184783-1200-1200?v=638157036716730000&width=1200&height=1200&aspect=true",
  imageProduct1: "https://thefoschini.vtexassets.com/arquivos/ids/45184793-1200-1200?v=638157036727930000&width=1200&height=1200&aspect=true",
  imageProduct2: "https://thefoschini.vtexassets.com/arquivos/ids/45184809-1200-1200?v=638157036736970000&width=1200&height=1200&aspect=true",
  imageProduct3: "https://thefoschini.vtexassets.com/arquivos/ids/45184783-1200-1200?v=638157036716730000&width=1200&height=1200&aspect=true",
  slug: "Panama has not lost its popularity since the 80s.",
  price: "269,00", 
  was_Price: "(was R 499,95 save R 230,95)",
  Product_Number: ProductNumberModel,
  details: "adidas Originals Pink Bucket Hat"
});
// ProductSave.save(function (err) {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log("Product added");
//           }
// });

const  BunnerSave = new Bannermodel({
  imageBannerMain: "https://www.tradeinn.com/f/13825/138253546/nike-park-fleece-sweatshirt.jpg",
  imageBanner1: "https://www.tradeinn.com/f/13825/138253547_2/nike-park-fleece-sweatshirt.jpg",
  imageBanner2: "https://www.tradeinn.com/f/13825/138253546/nike-park-fleece-sweatshirt.jpg",
  imageBanner3: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS3QJPjVS3o_Mtand3VsdrAo-l0tn-daTBS--326PqmoV-6zjY4BAYIbnaNprIaSu9kqaitIFtBfjPNtb1vP8cmflSQ50NqEt66hOEQJCW031ROIDB8jNyv1w&usqp=CAE",
  banner: "SUMMNER SALE",
  buttonText: "BUY NOW",
  product: "Nike Park Fleece Sweatshirt",
  desc: "Buy now and receive it between Wed. 5 Apr. and Thu. 6 Apr.",
  smallText:"Limited Stock",
  largeText2: "BICK SALE",
  discount: "40%",
  saleTime: "404.99",
  saleTime1: "40% OFF",
  Available_Sizes: "XXL XL L S SS"

});
// BunnerSave.save(function (err) {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log("Banner added");
//           }
// });

app.get("/",function(req, res){
  Productmodel.find(
    { },
    function (err, ProductDetails) {
    if (err) {
      console.log(err) 
    } else {
        // console.log(ProductDetails)
    }
    Bannermodel.find({}, function(err, BannerDetails) {
      if (err) {
        console.log(err);
        res.render("error"); // or some other error handling mechanism
      } else {
        console.log(BannerDetails);
        let Banner = '';
        BannerDetails.forEach(element => {
          Banner = element.banner;
          console.log(Banner);
        });
        res.render("list", {
          listTitle: "Today",
          Learn: ProductDetails,
          BannerName: BannerDetails,
          

        });
      }
    });

    //  res.render("list", {listTitle: "Today", Learn: ProductDetails,
    // });
  
  }) 
});











// Starting Sever
app.listen(5000, function() {  
  console.log("Server started on port 5000");
});

app.post('/search', (req, res) => {
  const searchQuery = req.body.searchQueryName.toLowerCase();

  console.log("Search Query: ", searchQuery);
  Payrollsmodel.find(
    { $or: [
      { Employee_LastName: { $regex: searchQuery, $options: "i" } },
      { Employee_FirstName: { $regex: searchQuery, $options: "i" } },
      { Employee_Department: { $regex: searchQuery, $options: "i" } }
    ]},
    function (err, EmployeeDetails) {
      if (err) {
        console.log(err);
        res.status(500).send("An error occurred while searching.");
      } else {
        // console.log(EmployeeDetails);
        res.render("list", { listTitle: "Today", Learn: EmployeeDetails });
      }
    }
  );
});
//Payroll search



app.get('/das', (req, res) => {
  Payrollsmodel.find(
    { },
    function (err, EmployeeDetails) {
    if (err) {
      console.log(err) 
    } else {
      //  console.log(EmployeeDetails)
      
    }
    res.render("userpage", {listTitle: "Today", Learn: EmployeeDetails,
    
  
  });
  });
});


app.get("/logout", function(req, res){
  req.logOut(function(err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});


app.get("/Manager",function(req, res){
  res.render("login");
});



app.post("/Manager", function(req, res){
const user = new UserModel({
  username: req.body.username,
  password: req.body.password,
})
req.logIn( user, function (err) {
  if(err){
    console.log(err)
  } else {
    passport.authenticate("local")(req, res, function () {

      Payrollsmodel.find({}, function (err, EmployeeDetails) {
        if (err) {
          console.log(err);
        } else { 
           const user = req.user;
  
           UserModel.find({ email: user.email }, function (err, users) {
            if (err) {
              console.log(err);
            } else {
              // console.log("Number of users:", users.length);
              // console.log("Logged-in user email:", user);
      res.render("list", {
        listTitle: "Today",
        Learn: EmployeeDetails,
        userEmail: user,
        userEmailHTML: user.username,
        ComapanyNmae: user.companyname,
      });
            }
          });
        }
      });
     
      
    })
  }
  
})

});
//Geeting data from DB to Front End to mian leavedays page
app.get("/LeavedaysAdmin.html",function(req, res){
  if (req.isAuthenticated()){
    Payrollsmodel.find(
      { },
      function (err, EmployeeDetails) {
      if (err) {
        console.log(err) 
      } else {
        //  console.log(EmployeeDetails)
      }
      res.render("leavedays", {listTitle: "Today", Learn: EmployeeDetails,
    });
    });

  } else {
    res.redirect("/")
  }
});

//Geeting data from DB to Front End to mian page
app.get('/dashboard.html', (req, res) => {
  if (req.isAuthenticated()){
    
    Payrollsmodel.find({}, function (err, EmployeeDetails) {
      if (err) {
        console.log(err);
      } else { 
         const user = req.user;

         UserModel.find({ email: user.email }, function (err, users) {
          if (err) {
            console.log(err);
          } else {
            console.log("Number of users:", users.length);
            console.log("Logged-in user email:", user);

    res.render("list", {
      listTitle: "Today",
      Learn: EmployeeDetails,
      userEmail: user,
      userEmailHTML: user.username,
      ComapanyNmae: user.companyname,
    });
          }
        });
      }
    });

  } else {
    res.redirect("/")
  }
});





//Geeting data from DB to Front End to Add new employee
app.get('/Payroll.html', (req, res) => {
  if (req.isAuthenticated()){
    Payrollsmodel.find(
      { },
      function (err, EmployeeDetails) {
      if (err) {
        console.log(err) 
      } else {
        //  console.log(EmployeeDetails)
      }
      res.render("payroll", {listTitle: "Today", Learn: EmployeeDetails,
    });
    });

  } else {
    res.redirect("/")
  }
});

//Geeting data from DB to Front End to Add new employee
app.get('/AddNewEmployee.html', (req, res) => {
  if (req.isAuthenticated()){
    Payrollsmodel.find(
      { },
      function (err, EmployeeDetails) {
      if (err) {
        console.log(err) 
      } else {
        //  console.log(EmployeeDetails)
      }
      res.render("Addnewemployee", {listTitle: "Today", Learn: EmployeeDetails,
    });
    });

  } else {
    res.redirect("/")
  }
});

// getting previous payroll commits from database'
app.get('/PayrollCommits.html', (req, res) => {

  if (req.isAuthenticated()){
    PayrollModelRollouts.find(
      { },
      function (err, EmployeeDetails) {
      if (err) {
        console.log(err) 
      } else {
        //  console.log(EmployeeDetails)
      }
      res.render("payrollcommits", {listTitle: "Today", Learn: EmployeeDetails,
      
    
    });
    });

  } else {
    res.redirect("/")
  }
});



app.get("/register.html",function(req, res){
  res.render("registerpage");
});
app.post("/register.html",function(req, res){

  UserModel.register({username: req.body.username, companyname: req.body.companyname, ContactDetails: req.body.ContactDetails }, req.body.password, function (err,user) {
    if(err){
      console.log(err);
      res.redirect("/register.html");
    } else {
      passport.authenticate("local")(req, res, function(){
        res.redirect("/welcome.html");
      })
    }
  });
});

app.get("/welcome.html", function (req, res) {
  if (req.isAuthenticated()){
    Payrollsmodel.find(
      { },
      function (err, EmployeeDetails) {
      if (err) {
        console.log(err) 
      } else {
        //  console.log(EmployeeDetails)
      }
      res.render("welecome",
    );
    });

  } else {
    res.redirect("/")
  }
  
})