// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

beforeEach(function (){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
});

function destructivelyAppendCat (){
    cats.push("Ralph");
}

beforeEach(function (){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
});

function destructivelyPrependCat (){
    cats.unshift("Bob");
}
beforeEach(function (){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
});
function destructivelyRemoveLastCat (){
    cats.pop();
}

beforeEach(function (){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
});

function destructivelyRemoveFirstCat (){
    cats.shift ();
}
beforeEach(function (){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
});

function appendCat (name){
   let catNames = cats.slice()
     catNames.push(name)
     return catNames;
    
    
}
function prependCat (name){
    let newCat = cats.slice()
    newCat.unshift(name);
    return newCat;
}
function removeLastCat (){
    let lastCats = cats.slice()
    lastCats.pop();
    return lastCats;
}
  function removeFirstCat(){
    let firstCat = cats.slice()
    firstCat.shift();
    return firstCat;
  }


