// https://observablehq.com/@observablehq/five-minute-introduction@385
import define1 from "./589f9a25112ad1c2@213.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Five-Minute Introduction

Welcome! This notebook gives a quick overview of Observable. For a more technical introduction, see [Observable’s not JavaScript](/@observablehq/observables-not-javascript). For hands-on, see our [introductory tutorial series](/collection/@observablehq/introduction). To watch rather than read, see our [short introductory video](https://www.youtube.com/watch?v=uEmDwflQ3xE)!

An Observable notebook consists of cells. Each cell is a snippet of JavaScript. You can see (and edit!) the code for any cell by clicking the menu <svg viewBox="0 0 8 14" fill="currentColor" stroke="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="8" height="14"><circle r="1.5" cx="4" cy="2"></circle><circle r="1.5" cx="4" cy="7"></circle><circle r="1.5" cx="4" cy="12"></circle></svg> in the left margin.`
)});
  main.variable(observer()).define(function(){return(
2 * 3 * 7
)});
  main.variable(observer()).define(function()
{
  let sum = 0;
  for (let i = 0; i <= 100; ++i) {
    sum += i;
  }
  return sum;
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`Cells can have names. This allows a cell’s value to be referenced by other cells.`
)});
  main.variable(observer("color")).define("color", function(){return(
"red"
)});
  main.variable(observer()).define(["color"], function(color){return(
`My favorite color is ${color}.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`A cell referencing another cell is re-evaluated automatically when the referenced value changes. Try editing the definition of *color* above and shift-return to re-evaluate.

Cells can generate DOM (HTML, SVG, Canvas, WebGL, *etc.*). You can use the standard DOM API like *document*.createElement, or use the built-in *html* tagged template literal:`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`<span style="background:yellow;">
  My favorite language is <i>HTML</i>.
</span>`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`There’s a Markdown tagged template literal, too. (This notebook is written in Markdown.)`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`My favorite language is *Markdown*.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`DOM can be made reactive simply by referring to other cells. The next cell refers to *color*. (Try editing the definition of *color* above.)`
)});
  main.variable(observer()).define(["html","color"], function(html,color){return(
html`My favorite color is <i style="background:${color};">${color}</i>.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Sometimes you need to load data from a remote server, or compute something expensive in a web worker. For that, cells can be defined asynchronously using [promises](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Using_promises):`
)});
  main.variable(observer("status")).define("status", function(){return(
new Promise(resolve => {
  setTimeout(() => {
    resolve({resolved: new Date});
  }, 2000);
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`A cell that refers to a promise cell sees the value when it is resolved; this implicit await means that referencing cells don’t care whether the value is synchronous or not. Edit the *status* cell above to see the cell below update after two seconds.`
)});
  main.variable(observer()).define(["status"], function(status){return(
status
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Promises are also useful for loading libraries from npm. Below, \`require\` returns a promise that resolves to the d3-fetch library:`
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3-fetch@1")
)});
  main.variable(observer()).define(["md"], function(md){return(
md`If you prefer, you can use async and await explicitly:`
)});
  main.variable(observer("countries")).define("countries", ["d3"], async function(d3){return(
(await d3.tsv("https://cdn.jsdelivr.net/npm/world-atlas@1/world/110m.tsv"))
    .sort((a, b) => b.pop_est - a.pop_est) // Sort by descending estimated population.
    .slice(0, 10)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Cells can be defined as [generators](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Iterators_and_Generators#Generators); a value is yielded up to sixty times a second.`
)});
  main.variable(observer("i")).define("i", function*()
{
  let i = 0;
  while (true) {
    yield ++i;
  }
}
);
  main.variable(observer()).define(["i"], function(i){return(
`The current value of i is ${i}.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Any cell that refers to a generator cell sees its current value; the referencing cell is re-evaluated whenever the generator yields a new value. As you might guess, a generator can yield promises for [async iteration](https://github.com/tc39/proposal-async-iteration); referencing cells see the current resolved value.`
)});
  main.variable(observer("date")).define("date", function*()
{
  while (true) {
    yield new Promise(resolve => {
      setTimeout(() => resolve(new Date), 1000);
    });
  }
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`Combining these primitives—promises, generators and DOM—you can build custom user interfaces. Here’s a slider and a generator that yields the slider’s value:`
)});
  main.variable(observer("slider")).define("slider", ["html"], function(html){return(
html`<input type=range>`
)});
  main.variable(observer("sliderValue")).define("sliderValue", ["Generators","slider"], function(Generators,slider){return(
Generators.input(slider)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Generators.input returns a generator that yields promises. The promise resolves whenever the associated input element emits an input event. You don’t need to implement that generator by hand, though. There’s a builtin viewof operator which exposes the current value of a given input element:`
)});
  main.variable(observer("viewof value")).define("viewof value", ["html"], function(html){return(
html`<input type=range>`
)});
  main.variable(observer("value")).define("value", ["Generators", "viewof value"], (G, _) => G.input(_));
  main.variable(observer()).define(["value"], function(value){return(
value
)});
  main.variable(observer()).define(["md"], function(md){return(
md`You can import cells from other notebooks. To demonstrate how custom user interfaces can expose arbitrary values to other cells, here’s a brushable scatterplot of cars showing the inverse relationship between horsepower and fuel efficiency.`
)});
  const child1 = runtime.module(define1);
  main.import("viewof selection", "viewof cars", child1);
  main.import("selection", "cars", child1);
  main.variable(observer()).define(["viewof cars"], function($0){return(
$0
)});
  main.variable(observer()).define(["cars"], function(cars){return(
cars
)});
  main.variable(observer()).define(["md","cars"], function(md,cars){return(
md`${Array.from(new Set(cars.map(c => c.name)))
    .sort()
    .map(c => `* <a target="_blank" href="https://google.com/search?tbm=isch&q=${escape(c)}">${c}</a>`)
    .join("\n")}`
)});
  return main;
}
