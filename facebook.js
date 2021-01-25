
let post = {
    name: "Team Ever Ready",
    username: "@eReady",
    message: "@coderhino why is your code hot garbage?",
    like: 0,
    comments: [],
    location: "Delaware",
    addLikes: function () {
        post.like ++;
    },

    addComment: function (comment) {
        (post.comments).push(comment);
    }
}

post.message = "@coderhino writes code like it's a work of fine art"
post.time = Math.time;
post["name"] = "Team EveReady";
console.log(post.like);
post.addLikes()
console.log(post.like);


// // properties
// name 
// message
// likes 
// time 
// location 
// tagperson 
// picture
// add Comment
// like increments likes by 1 (++)