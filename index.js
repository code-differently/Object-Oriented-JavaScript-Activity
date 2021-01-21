// Part 1

let post = {
    name: "Khalil Abdellah", 
    username: '@KhalilA',
    message: "Hello world",
    comment: function (comment) {
        return comment;
    }
}

post.profilePhotoURL = "https://photo.com";

post.timeStamp = new Date();

post.comment('Hey, nice!');

console.log(post.comment);


// Part 2

class Tweet {
    constructor(username, pictureURL, timeStamp, message, likes, retweets) {
        this.username = username;
        this.pictureURL = pictureURL;
        this.timeStamp = new Date();
        this.message = message;
        this.likes = 0;
        this.retweets = 0;
    }

    get message() {
        return this._message;
    }

    set message(message) {
        if (message.length <= 140) {
            this._message = message;
        } else {
            console.log('Max character limit reached!')
        }
    }

    like() {
        this.likes++;
    }

    retweet() {
        this.retweets++;
    }

    addLetter(letter) {
        this.message.push(letter);
    }

    removeLetter(message()) {
        this.message.split('');
        this.message.pop();
    }

    // // public static String removeLastChar(String s) {
    // //     return (s == null || s.length() == 0)
    // //       ? null 
    // //       : (s.substring(0, s.length() - 1));
    // // }

}

let person = new Tweet('@khalil_cvn', 'https://photo.com', '', 'Yo whatdup');

person.like();
person.retweet();
console.log(person);

person.message = "HelloHelloHelloHeHelloHelloHelloHeHelloHelloHelloHeHelloHelloHelloHeHelloHelloHelloHeHelloHelloHelloHeHelloHelloHelloHeHelloHelloHelloHeHelloHelloHelloHe";
console.log(person.message);

person.message = "eHelloHello";
console.log(person.message);

message().removeLetter();
console.log(person.message);