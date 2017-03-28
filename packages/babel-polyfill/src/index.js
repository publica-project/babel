require("core-js/shim");
// require("regenerator-runtime/runtime");

// Should be removed in the next major release:
if (!("escape" in RegExp)) {
  require("core-js/fn/regexp/escape");
}

const DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable:     true,
    configurable: true,
    value:        value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

// eslint-disable-next-line max-len
"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
