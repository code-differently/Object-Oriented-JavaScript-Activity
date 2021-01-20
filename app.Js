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
        this.maxCharacterLength = 1;
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

