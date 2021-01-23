class Tweet {

    constructor(message, maxCharacterLength){
        this.message = [];
        this.maxCharacterLength = 5;
    }
    addLetter(letter){
       //if(this.validateCharacterLength() < 5){
        if(this.message.length + 1 > this.maxCharacterLength){
            console.log( `Max character count of ${this.maxCharacterLength} reached`); }
       else {
        return this.message.push(letter);}

        }

        removeLetter(){
        this.message.pop();
    }
    viewMessage(){
        console.log(this.message.join(''));
    }
    validateCharacterLength(){
        if(this.message.length + 1 > this.maxCharacterLength){
            console.log(`Max character count of ${this.maxCharacterLength} reached`);
        }
    }

}


let user = new Tweet();
user.addLetter('h');
user.addLetter('e');
user.addLetter('l');
user.addLetter('l');
user.addLetter('o');
user.addLetter('!');
user.viewMessage();
user.removeLetter();
user.viewMessage();
user.removeLetter();
user.viewMessage();

