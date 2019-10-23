// Container (Page) Routes 
    router.get("/", function(req, res){
        // if user logged in, send Home.js, otherwise, send LogIn.js

    }
    router.get("/signUp", function(req, res){
        // send SignUp.js

    }
    router.get("/closet", function(req, res){
        // send myCloset.js

    }
    router.get("/closet/:id", function(req, res){
        // When user clicks a closet in closet feed, send their closet

    }
    router.get("/top", function(req, res){
        // send ChooseTop.js
        // chooseTop.js will mount with state from MongoDB:  this.setState({ tops: data.tops})

    }
    router.get("/bottom", function(req, res){
        // send ChooseBottom.js
        // chooseBottom.js will mount with state from MongoDB:  this.setState({ bottoms: data.bottoms})

    }
    router.get("/shoe", function(req, res){
        // send ChooseShoe.js
        // chooseShoe.js will mount with state from MongoDB:  this.setState({ shoes: data.shoes})

    }
    router.get("/outerwear", function(req, res){
        // send ChooseOuterwear.js
        // chooseOuterwear.js will mount with state from MongoDB: this.setState({ outwear: data.outerwear})

    }
    router.get("/results", function(req, res){
        // send Results.js
        // results.js will mount with programtically generated outfits from MongoDB: this.setState({outfits: outfits}) 

    }
    router.get("/about", function(req, res){
        //send About.js
        // basic about us page 

    }

    //API Routes 

    // get clothes items 
    router.get("/api/clothes", function(req, res){
        // send json of all 16 clothes items: shoes, tops, outwear, bottoms

    }
    router.get("/api/clothes/shoes", function(req, res){
        // send json of all four shoes

    }
    router.get("/api/clothes/tops", function(req, res){
        // send json of all four tops

    }
    router.get("/api/clothes/bottoms", function(req, res){
        // send json of all four bottoms

    }
    router.get("/api/clothes/outerwear", function(req, res){
        // send json of all four outerwear choices

    }

    // get user data, including their closet objects
    router.get("/api/users", function(req, res){
        // send all users and their closet objects, which is made up of outfits

    }
    router.get("/api/users/:id", function(req, res){
        // get specific user and their closet

    }

    // post outfits 
    router.post("/api/users/:id", function(req, res){
        // on clicking "save outfit", send outfit object to logged in users' closet 
        
    }