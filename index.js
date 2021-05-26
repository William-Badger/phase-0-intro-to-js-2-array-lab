// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

    cats.push("Ralph");
    cats;
}

function destructivelyPrependCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

    cats.unshift("Bob");
    cats;
}

function destructivelyRemoveLastCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

    cats.pop();
    cats;
}

function destructivelyRemoveFirstCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

    cats.shift();
    cats;
}

function appendCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

    const copyOfCats = cats.slice();
    copyOfCats.push("Broom");

    return copyOfCats;
}

function prependCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

    const copyOfCats = cats.slice();
    copyOfCats.unshift("Arnold");

    return copyOfCats;
}

function removeLastCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

    const copyOfCats = cats.slice();
    copyOfCats.pop();

    return copyOfCats;
}

function removeFirstCat() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");

    const copyOfCats = cats.slice();
    copyOfCats.shift();

    return copyOfCats;
}
