// createAnimal factory function
function createAnimal(name, sound) {
    return {
        name: name,
        sound: sound,
        makeSound: function() {
            console.log(this.sound);
        }
    };
}

// createDog factory function inheriting from createAnimal
function createDog(name, sound, breed) {
    let animal = createAnimal(name, sound);
    animal.breed = breed;
    animal.fetch = function() {
        console.log(`${this.name} fetches the ball!`);
    };
    return animal;
}

// Creating an instance of createDog
let dog = createDog("Buddy", "Woof", "Labrador");

// Calling the makeSound() method
dog.makeSound(); // Woof

// Calling the fetch() method
dog.fetch(); // Buddy fetches the ball!
