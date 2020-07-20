var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data =[
    {
        name: "Cloud's Rest", 
        image: "http://photosforclass.com/download/7121861565",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit tortor massa. Integer interdum ultrices laoreet. Nam rutrum ligula risus, lacinia placerat nulla euismod faucibus. Duis sed efficitur massa. Phasellus metus nisi, convallis blandit tempus non, rhoncus ut lacus. Nunc commodo libero consectetur, efficitur felis vitae, interdum ante. Nam feugiat eros sem, id aliquam ante dignissim sit amet. Fusce luctus ultricies magna sed euismod. Morbi ante dolor, porttitor mollis ligula et, fringilla rhoncus diam. Maecenas non magna eget magna dignissim dictum ac id sem. Duis id sem eu dolor euismod blandit vitae eu ligula. Nunc a massa a urna malesuada commodo. "
    },
    {
        name: "Desert Mesa", 
        image: "http://photosforclass.com/download/2770447094",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit tortor massa. Integer interdum ultrices laoreet. Nam rutrum ligula risus, lacinia placerat nulla euismod faucibus. Duis sed efficitur massa. Phasellus metus nisi, convallis blandit tempus non, rhoncus ut lacus. Nunc commodo libero consectetur, efficitur felis vitae, interdum ante. Nam feugiat eros sem, id aliquam ante dignissim sit amet. Fusce luctus ultricies magna sed euismod. Morbi ante dolor, porttitor mollis ligula et, fringilla rhoncus diam. Maecenas non magna eget magna dignissim dictum ac id sem. Duis id sem eu dolor euismod blandit vitae eu ligula. Nunc a massa a urna malesuada commodo. "
    },
    {
        name: "Canyon Floor", 
        image: "http://photosforclass.com/download/7842069486",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit tortor massa. Integer interdum ultrices laoreet. Nam rutrum ligula risus, lacinia placerat nulla euismod faucibus. Duis sed efficitur massa. Phasellus metus nisi, convallis blandit tempus non, rhoncus ut lacus. Nunc commodo libero consectetur, efficitur felis vitae, interdum ante. Nam feugiat eros sem, id aliquam ante dignissim sit amet. Fusce luctus ultricies magna sed euismod. Morbi ante dolor, porttitor mollis ligula et, fringilla rhoncus diam. Maecenas non magna eget magna dignissim dictum ac id sem. Duis id sem eu dolor euismod blandit vitae eu ligula. Nunc a massa a urna malesuada commodo. "
    }
];

function seedDB(){
    // remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds"); 
        // add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                  if(err){
                      console.log(err);
                  } else {
                      console.log("added campground");
                      // create a comment
                      Comment.create(
                          {
                              text: "this place is great, but no internet",
                              author: "Homer"    
                          }, function(err, comment){
                              if(err){
                                  console.log(err);
                              } else {
                                  campground.comments.push(comment);
                                  campground.save();
                                  console.log("created new comment");
                              }
                          });    
                } 
            });
        });
    });
    // add a few comments
}

module.exports = seedDB;


