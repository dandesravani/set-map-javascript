import "./styles.css";

// const set = new Set(["Beethoven", "Mozart", "Chopin", "Chopin"]);

// console.log(set);

// const arr = [...set];
const map = new Map();

map.set("firstName", "Luke");
map.set("lastName", "Skywalker");
map.set("occupation", "Jedi Knight");

const mapS = new Map([
  ["firstName", "Luke"],
  ["lastName", "Skywalker"],
  ["occupation", "Jedi Knight"]
]);

// converting obj to map
const luke = {
  firstName: "Luke",
  lastName: "Skywalker",
  occupation: "Jedi Knight"
};
const mapN = new Map(Object.entries(luke));

// map to object
const obj = Object.fromEntries(map);

// map to array
const arr = Array.from(map);

const set = new Set([1, 2, 3]);

let a = new Set([34, 35, 45, 48, 49]);
let b = new Set([48, 35]);

const union = new Set([...a, ...b]);

const unionFn = (fst, snd) => {
  let result = new Set(fst);
  for (const e of snd) {
    result.add(e);
  }

  return result;
};

const intersectFn = (fst, snd) => {
  let result = new Set();

  for (const e of fst) {
    if (snd.has(e)) {
      result.add(e);
    }
  }
  return result;
};

const differenceFn = (fst, snd) => {
  const result = new Set();
  for (const e of fst) {
    if (!snd.has(e)) {
      result.add(e);
    }
  }

  return result;
};

console.log(differenceFn(a, b));

const intersection = [...a].filter((v) => b.has(v));

// console.log(intersection);

// const difference =

// const arr = Object.entries(set);

// console.log(set.keys());

// console.log(Object.entries(set));

// console.log(arr);
