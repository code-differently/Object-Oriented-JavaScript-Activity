//outline animal object
//add traits into object
/* 
eyes
eye color 
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

    eat: function () {
        console.log("mice");
    }
}

let dog = {
    eyes: 2,
    eyeColor: "brown",
    ears: "pointed",
    paw: 4,
    speed: "fast",
    mouth: "large",
    claws: true,
    tail: "long",
    fangs: true,
    sound: "woof woof",
    fur: true,
    hair: false,
    hump: false,
    color: "white",
    
    eat: function () {
        console.log("bones");
    }
}

let bird = {
    eyes: 2,
    eyeColor: "black",
    ears: false,
    paw: 2,
    speed: "fast",
    mouth: "small",
    claws: true,
    tail: "short",
    fangs: false,
    sound: "chirp chirp",
    fur: false,
    hair: false,
    hump: false,
    eat: function () {
        console.log("worms");
    }
}

let fish = {
    eyes: 2,
    eyeColor: "blue",
    ears: false,
    paw: false,
    speed: "slow",
    mouth: "small",
    claws: false,
    tail: "short",
    fangs: false,
    sound: "bloop bloop",
    fur: false,
    hair: false,
    hump: false,
    color: "gold",

    eat: function () {
        console.log("algae");
    }
}

cat['eyeColor'] = "black";
cat.paw = 3;
dog.mouth = "small";
dog["tail"] = "short";
bird["fangs"] = "true"
bird.mouth = "big";
fish.speed = "fast";

// console.log(cat);
// console.log(dog);
// console.log(bird);
// console.log(fish);
console.log (cat.eat());






