//const getFirstName = (fullName) => fullName.split(" ")[0];

//console.log(getFirstName("John Constantine"));

const multiplier = {
    numbers: [1,3,5,6],
    mulyiplyBy: 23,
    multiply() {
        return this.numbers.map((number) => this.mulyiplyBy*number)
    }
}

console.log(multiplier.multiply());
