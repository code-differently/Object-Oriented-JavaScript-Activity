//Creating a class Tweet and adding constructor

class Tweet {

    constructor(message, maxCharacterLength){
        this.message = [];
        this.maxCharacterLength = 140;
    }
    addLetter(letter){
       //if(this.validateCharacterLength() < 140){
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

// adding and removing letters

let user = new Tweet();
user.addLetter('g');
user.addLetter('r');
user.addLetter('e');
user.addLetter('e');
user.addLetter('t');
user.addLetter('i');
user.addLetter('n');
user.addLetter('g');
user.addLetter('s');
user.addLetter('!');
user.viewMessage();
user.removeLetter();
user.viewMessage();
user.removeLetter();
user.viewMessage();
