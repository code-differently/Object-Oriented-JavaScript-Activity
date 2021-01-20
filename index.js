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

    removeLetter() {
        return (this.message.substring(0, this.message.length - 1))
    }

    // // public static String removeLastChar(String s) {
    // //     return (s == null || s.length() == 0)
    // //       ? null 
    // //       : (s.substring(0, s.length() - 1));
    // // }

}

let khalilTweet = new Tweet('@khalil_cvn', 'https://photo.com', '', 'Yo whatdup');

khalilTweet.like();
khalilTweet.retweet();
console.log(khalilTweet);

khalilTweet.message = "HelloHelloHelloHeHelloHelloHelloHeHelloHelloHelloHeHelloHelloHelloHeHelloHelloHelloHeHelloHelloHelloHeHelloHelloHelloHeHelloHelloHelloHeHelloHelloHelloHe";
console.log(khalilTweet.message);

khalilTweet.message = "eHelloHello";
console.log(khalilTweet.message);

khalilTweet.removeLetter();
console.log(khalilTweet.message);

