let post = {
    name: "kim",
    message: "@coderhino why is your code garbage",
    likes: 0,
    comments: [],
    addLikes: () => {
        post.likes ++;
    },
    addComments: (message) => {
        (post.comments).push(message);
    }
}

class Tweet {

    constructor(){
        this.message = [];
        this.maxCharacterLength = 140;
    }
    addLetter(letter){
       this.validateCharacterLength();
       this.message.push(letter);
    }
    removeLetter(){
        this.message.pop();
    }
    viewMessage(){
        console.log(this.message.join(''));
    }
    validateCharacterLength(){
        if(this.message.length + 1 > this.maxCharacterLength){
            throw new Error(`Max character count of ${this.maxCharacterLength} reached`);
        }
    }

}
let user = new Tweet();

user.addLetter('h');
user.addLetter('e');
user.addLetter('l');
user.addLetter('l');
user.addLetter('o');
user.viewMessage();
user.removeLetter();
user.viewMessage();
user.removeLetter();
user.viewMessage();