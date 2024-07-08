const sum = (a: number, b: number): number => {
  return a + b;
};

console.log(sum(5, 5));

interface Person {
  name: string;
  age: number;
}

const greet = (individual: Person): string => {
  return `Sveiki, mano vardas yra ${individual.name} ir man yra ${individual.age} metų.`;
};

const individual: Person = {
  name: "Faustas",
  age: 30,
};

console.log(greet(individual));

const number = [1, 2, 3, 4, 5];

const getFirstElement = <T>(arr: T[]): T => {
  return arr[0];
};

console.log(getFirstElement(number));

enum Colors {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

const getColorName = (color: Colors): void => {
  console.log(`Spalva yra ${color}`);
};

getColorName(Colors.Red);
