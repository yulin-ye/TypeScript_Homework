function greet(person) {
    console.log("Hello ".concat(person.name, "! You are ").concat(person.age, " year old."));
}
greet({ name: 'John', age: 18 });
