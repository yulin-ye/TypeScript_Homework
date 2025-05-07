interface Person {
  name: string,
  age: number
}

function greet(person: Person) {
  console.log(`Hello ${person.name}! You are ${person.age} year old.`)
}

greet({name: 'John', age: 18})