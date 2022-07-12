class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }

    getGreetings(){
        return (`Hi. My name is ${this.name}!`);
    }
    GetDescreption(){
        return (`${this.name} is ${this.age} year old!`);
    }
}

class Traveller extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }

    getGreetings(){
        let sentance = super.getGreetings();
        if(this.homeLocation){
            return sentance+=`. I'm visiting from ${this.homeLocation}`;
        }else{
            return sentance;
        }
    }
}

let traveller = new Traveller("Raj", 32, "Bengaluru");
console.log(traveller.getGreetings());