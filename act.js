

let myPost = {
  name: "Nauman Khalid",
  greeting: function() {
      alert('Hi! I\'m ' + this.name + '.');
    },
  location: "Delaware",
  timezone: "Eastern Stnd time",
  message: "Hi Everyone!",
  //farewell: "Bye",
  farewell: function() { alert("Bye everybody!"); },
  like:0,
  addLikes:function(){
      like ++;
    }
  }
  
  //Dot notation access attribute like location
  console.log (myPost.location);
  
  // Dot notation modify message value
  myPost.message = " Hello, World";
  
  //Dot notation add object attribute emoji
  myPost.emoji = "happy";
  
  // Dot notation added date and time
  myPost['currentDate_Time'] = new Date();
  
  //myPost['likes'] = 12000;
  
  // Bracket notation access
  console.log(myPost['emoji']);
  
  // Bracket notation modify timezone attribute
  myPost['timezone'] = "Central";
  
  // Access whole object values
  console.log(myPost);