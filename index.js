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

post.comment = 'Hey, nice!';
console.log(post.comment);

post['comment'] = 'Yo, nice!';
console.log(post['comment']);


// Part 2

class Tweet {
    constructor(username, pictureURL, timeStamp, message, likes, retweets, maxCharacterLength) {
        this.username = username;
        this.pictureURL = pictureURL;
        this.timeStamp = new Date();
        this.message = [];
        this.likes = 0;
        this.retweets = 0;
        this.maxCharacterLength = 140;
    }

    like() {
        this.likes++;
    }

    retweet() {
        this.retweets++;
    }

    addLetter(letter) {
        if (this.message.length + 1 > 140) {
            console.log('Max character limit of 140 reached!')
        } else {
        this.message.push(letter);
        }
    }

    removeLetter(message) {
        this.message.pop();
    }

    viewMessage() {
        console.log(this.message.join(''));
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

person.addLetter('c');
person.addLetter('v');
person.addLetter('n');
person.addLetter('o');
console.log(person.viewMessage())


person.removeLetter();
console.log(person.message.join(''));