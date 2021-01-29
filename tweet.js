
class Tweet {
    constructor (message, likes=0) {
        this.message = message;
        if (! this.isGoodLength()) {
            this.message = this.message.substring(0, 140);
        }
        this.likes = likes;
    }
    addChar (char) {
        if (this.isGoodLength()) {
            this.message += char;
        }
    }
    removeChar () {
        this.message = this.message.substring(0, this.message.length-1);
    }
    addLike () {
        this.likes++;
    }
    viewMessage () {
        return this.message;
    }
    isGoodLength () {
        if (this.message.length <= 140) {
            return true;
        } else {
            return false;
        }
    }
}

let post = new Tweet("new tweet");
 console.log(post.viewMessage());
