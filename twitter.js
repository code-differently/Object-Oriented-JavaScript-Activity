class Tweet {
    constructor(name){
        this.message= [];
    }
    addLetter(letter){
        this.message.push(letter);
    }
    removeLetter(){
        this.message.pop();
    }
    viewMessage(){
        console.log(this.messge);
    }
}
