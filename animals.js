// outline animal object
//add traits into object

/*

eyes
ears
feet
speed 
mouth 
claws
tail
fangs
sound
fur
hair
hump
color*/


let cat = {
    eyes: 2,
    eyeColor: "blue",
    ears: "pointed",
    paw: 4,
    speed: "fast",
    mouth: "small",
    claws: true,
    tail: "short",
    fangs: true,
    sound: "meow",
    fur: true,
    hair: false,
    hump: false,
    color: "black",

    eat: function (){
        console.log ("mice");
    }

}

let dog = {
    eyes: 2,
    eyeColor: "blue",
    ears: "pointed",
    paw: 4,
    speed: "fast",
    mouth: "large",
    claws: true,
    tail: "short",
    fangs: true,
    sound: "woof woof",
    fur: true,
    hair: false,
    hump: false,
    color: "white",

    eat: function (){
        console.log ("bones");
    }



}
let fish = {
    eyes: 2,
    eyeColor: "blue",
    ears: "pointed",
    paw: 4,
    speed: "fast",
    mouth: "small",
    claws: true,
    tail: "short",
    fangs: true,
    sound: "bubble",
    fur: true,
    hair: false,
    hump: false,
    color: "gold",

    eat: function (){
        console.log ("coral");
    }


}
let bird = {
    eyes: 2,
    eyeColor: "blue",
    ears: false,
    paw: 4,
    speed: "fast",
    mouth: "small",
    claws: true,
    tail: "short",
    fangs: true,
    sound: "tweet",
    fur: true,
    hair: false,
    hump: false,
    color: "blue",

    eat: function (){
        console.log ("seeds");
    }


}
cat ['eyeColor'] = "black";
cat.paw = 3
dog.mouth = "small";
dog['tail'] = "short";
bird['fangs'] = "true";
bird.mouth = "big";
fish.speed = "fast";

console.log(cat);
console.log(dog);
console.log(bird);
console.log(fish);
console.log (cat.eat());
console.log (cat.eyeColor);
console.log (dog.hump);
