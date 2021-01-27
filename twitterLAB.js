
class Tweet {
    constructor() {
        this.tweet = "";
     }

addMessage(message) {
    if (under140) {
        this.tweet = message;
        return "Message under 140 characters";
    
    }
}    

    under140(message) {
        if (message.length <= 140)  
        return true;
        return "Message over 140 characters";
    }



 addCharacter(character) {
    this.tweet.push(character);
}

   removeCharacter(Character) {
    this.tweet.pop(Character);
}
}

let tweet = new Tweet ("This is a tweet");
tweet.addCharacter("!");
console.log(tweet);

