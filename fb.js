
let post = {
    name: "Talyr Williams",
    message: "I love to code!",
    comments: "This new macbook is the best!",
    likes: 3,
    // function to add on like
    likePost: function (num = 1) { 
        this.likes += num;
    },
    location: "Wilmington",
    tag: function(){
        console.log('tag');
    },
    share: function(){
        console.log('share');
    }
};

console.log(post);
