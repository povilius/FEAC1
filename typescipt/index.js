var sum = function (a, b) {
    return a + b;
};
console.log(sum(5, 5));
var greet = function (individual) {
    return "Sveiki, mano vardas yra ".concat(individual.name, " ir man yra ").concat(individual.age, " met\u0173.");
};
var individual = {
    name: "Faustas",
    age: 30,
};
console.log(greet(individual));
var number = [1, 2, 3, 4, 5];
var getFirstElement = function (arr) {
    return arr[0];
};
console.log(getFirstElement(number));
var Colors;
(function (Colors) {
    Colors["Red"] = "RED";
    Colors["Green"] = "GREEN";
    Colors["Blue"] = "BLUE";
})(Colors || (Colors = {}));
var getColorName = function (color) {
    console.log("Spalva yra ".concat(color));
};
getColorName(Colors.Red);
