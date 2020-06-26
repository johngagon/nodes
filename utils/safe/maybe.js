// https://www.codingame.com/playgrounds/6272/building-a-maybe-in-javascript
const isNullOrUndef = (value) => value === null || typeof value === "undefined";

const maybe = (value) => ({
    isNothing: () => isNullOrUndef(value),
    extract: () => value,
    map: (transformer) => !isNullOrUndef(value) ? Maybe.just(transformer(value)) : Maybe.nothing()
});

const Maybe = {
    just: maybe,
    nothing: () => maybe(null),
    chain: (...fns) => (input) => fns.reduce((output, curr) => output.map(curr), input)
};

const prop = (propName) => (obj) => obj[propName];
const append = (appendee) => (appendix) => appendix + appendee;

const appendToC = Maybe.chain(
    prop("b"),
    prop("c"),
    append(" is great!")
);

const goodInput = Maybe.just({
    b: {
        c: "fp"
    }
});

const badInput = Maybe.just({});

console.log(appendToC(goodInput).extract())
console.log(appendToC(badInput).extract());