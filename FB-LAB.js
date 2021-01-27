

let post = {
    name: "Jermaine Cooper",
    tag: "Code Differently",
    message: "Coding Forever",
    time:  "7:18",
    reaction:  ["happy", "smile", "laugher", "sad"],
    picture: "image",
    caption: "Practice Coding everyday",
    comment: "Awesome",
    share: "share with friends",

    addComment(comment) {
        this.comment = comment;
   
    },    

    time() {
        let date = Date.now();
        let time = date.getTime();
        let dateTime = `${date} ${time}`;
    
    },
    react(feeling) {
        for(let i=o; i < reaction.length; i++) {
           if (feeling === reaction[i]) {
               return reaction[i];
           } 
        }
    }    
}    

console.log(post.time);